import type { CalibrationPoint, DiscoveredRoom, FloorConfig, HassEntity, MapZone, VacuumZone } from './types';

function finite(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function parseCalibrationPoints(entity?: HassEntity): CalibrationPoint[] {
  const raw = entity?.attributes.calibration_points;
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((item) => {
    const point = item as Partial<CalibrationPoint>;
    if (
      !finite(point.vacuum?.x) ||
      !finite(point.vacuum?.y) ||
      !finite(point.map?.x) ||
      !finite(point.map?.y)
    ) {
      return [];
    }
    return [point as CalibrationPoint];
  });
}

export function parseRooms(entity?: HassEntity): DiscoveredRoom[] {
  const raw = entity?.attributes.rooms;
  if (!raw) return [];
  const entries: Array<[string, unknown]> = Array.isArray(raw)
    ? raw.map((room, index) => [String(index), room])
    : typeof raw === 'object'
      ? Object.entries(raw as Record<string, unknown>)
      : [];

  return entries.flatMap(([key, value]) => {
    if (!value || typeof value !== 'object') return [];
    const room = value as Record<string, unknown>;
    const rawId = room.number ?? room.room_id ?? room.segment_id ?? key;
    const segmentId = Number(rawId);
    const x0 = Number(room.x0);
    const y0 = Number(room.y0);
    const x1 = Number(room.x1);
    const y1 = Number(room.y1);
    if (![segmentId, x0, y0, x1, y1].every(Number.isFinite)) return [];
    return [
      {
        segment_id: segmentId,
        source_name: typeof room.name === 'string' ? room.name : `Room ${segmentId}`,
        x0,
        y0,
        x1,
        y1,
      },
    ];
  });
}

export function vacuumToMap(
  vacuumX: number,
  vacuumY: number,
  calibration: CalibrationPoint[],
): { x: number; y: number } {
  if (calibration.length < 3) throw new Error('At least three calibration points are required');
  const [p1, p2, p3] = calibration;
  const vx1 = p2.vacuum.x - p1.vacuum.x;
  const vy1 = p2.vacuum.y - p1.vacuum.y;
  const vx2 = p3.vacuum.x - p1.vacuum.x;
  const vy2 = p3.vacuum.y - p1.vacuum.y;
  const determinant = vx1 * vy2 - vy1 * vx2;
  if (determinant === 0) throw new Error('Calibration points are degenerate');

  const dx = vacuumX - p1.vacuum.x;
  const dy = vacuumY - p1.vacuum.y;
  const a = (dx * vy2 - dy * vx2) / determinant;
  const b = (vx1 * dy - vy1 * dx) / determinant;

  return {
    x: p1.map.x + a * (p2.map.x - p1.map.x) + b * (p3.map.x - p1.map.x),
    y: p1.map.y + a * (p2.map.y - p1.map.y) + b * (p3.map.y - p1.map.y),
  };
}

export function mapToVacuum(
  mapX: number,
  mapY: number,
  calibration: CalibrationPoint[],
): { x: number; y: number } {
  if (calibration.length < 3) throw new Error('At least three calibration points are required');
  const [p1, p2, p3] = calibration;
  const mx1 = p2.map.x - p1.map.x;
  const my1 = p2.map.y - p1.map.y;
  const mx2 = p3.map.x - p1.map.x;
  const my2 = p3.map.y - p1.map.y;
  const determinant = mx1 * my2 - my1 * mx2;
  if (determinant === 0) throw new Error('Calibration points are degenerate');

  const dx = mapX - p1.map.x;
  const dy = mapY - p1.map.y;
  const a = (dx * my2 - dy * mx2) / determinant;
  const b = (mx1 * dy - my1 * dx) / determinant;

  return {
    x: p1.vacuum.x + a * (p2.vacuum.x - p1.vacuum.x) + b * (p3.vacuum.x - p1.vacuum.x),
    y: p1.vacuum.y + a * (p2.vacuum.y - p1.vacuum.y) + b * (p3.vacuum.y - p1.vacuum.y),
  };
}

export function normalizeMapZone(zone: MapZone): MapZone {
  return {
    x1: Math.min(zone.x1, zone.x2),
    y1: Math.min(zone.y1, zone.y2),
    x2: Math.max(zone.x1, zone.x2),
    y2: Math.max(zone.y1, zone.y2),
  };
}

export function clampMapZone(zone: MapZone, width: number, height: number): MapZone {
  const normalized = normalizeMapZone(zone);
  const zoneWidth = normalized.x2 - normalized.x1;
  const zoneHeight = normalized.y2 - normalized.y1;
  const x1 = Math.min(Math.max(0, normalized.x1), Math.max(0, width - zoneWidth));
  const y1 = Math.min(Math.max(0, normalized.y1), Math.max(0, height - zoneHeight));
  return { x1, y1, x2: x1 + zoneWidth, y2: y1 + zoneHeight };
}

export function mapZoneToVacuumZone(zone: MapZone, calibration: CalibrationPoint[]): VacuumZone {
  const normalized = normalizeMapZone(zone);
  const points = [
    mapToVacuum(normalized.x1, normalized.y1, calibration),
    mapToVacuum(normalized.x2, normalized.y1, calibration),
    mapToVacuum(normalized.x2, normalized.y2, calibration),
    mapToVacuum(normalized.x1, normalized.y2, calibration),
  ];
  const xs = points.map(({ x }) => x);
  const ys = points.map(({ y }) => y);
  return {
    x1: Math.round(Math.min(...xs)),
    y1: Math.round(Math.min(...ys)),
    x2: Math.round(Math.max(...xs)),
    y2: Math.round(Math.max(...ys)),
  };
}

export function createRoomPath(room: DiscoveredRoom, calibration: CalibrationPoint[]): string {
  const points = [
    vacuumToMap(room.x0, room.y0, calibration),
    vacuumToMap(room.x1, room.y0, calibration),
    vacuumToMap(room.x1, room.y1, calibration),
    vacuumToMap(room.x0, room.y1, calibration),
  ];
  return `${points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')} Z`;
}

export function roomCenter(room: DiscoveredRoom, calibration: CalibrationPoint[]): { x: number; y: number } {
  return vacuumToMap((room.x0 + room.x1) / 2, (room.y0 + room.y1) / 2, calibration);
}

export function configuredRoomMap(floor: FloorConfig): Map<number, FloorConfig['rooms'][number]> {
  return new Map(floor.rooms.map((room) => [room.segment_id, room]));
}
