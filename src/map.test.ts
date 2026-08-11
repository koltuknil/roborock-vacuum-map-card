import { describe, expect, it } from 'vitest';
import { createRoomPath, mapToVacuum, mapZoneToVacuumZone, parseRooms, vacuumToMap } from './map';
import type { HassEntity } from './types';

describe('map metadata', () => {
  it('parses number, room_id and record-key segment identifiers', () => {
    const entity = { attributes: { rooms: {
      1: { number: 7, name: 'Number', x0: 1, y0: 2, x1: 3, y1: 4 },
      2: { room_id: 8, name: 'Room ID', x0: 1, y0: 2, x1: 3, y1: 4 },
      9: { name: 'Key', x0: 1, y0: 2, x1: 3, y1: 4 },
    } } } as unknown as HassEntity;
    expect(parseRooms(entity).map((room) => room.segment_id)).toEqual([7, 8, 9]);
  });

  it('converts vacuum coordinates with three-point affine calibration', () => {
    const calibration = [
      { vacuum: { x: 25500, y: 25500 }, map: { x: 712, y: 108 } },
      { vacuum: { x: 35500, y: 25500 }, map: { x: 1512, y: 108 } },
      { vacuum: { x: 25500, y: 35500 }, map: { x: 712, y: -692 } },
    ];
    expect(vacuumToMap(25900, 21500, calibration)).toEqual({ x: 744, y: 428 });
    expect(mapToVacuum(744, 428, calibration)).toEqual({ x: 25900, y: 21500 });
    expect(createRoomPath({ segment_id: 1, source_name: 'Kitchen', x0: 25900, y0: 21500, x1: 28550, y1: 22850 }, calibration)).toContain('M 744 428');
  });

  it('converts a drawn map rectangle into normalized Roborock zone coordinates', () => {
    const calibration = [
      { vacuum: { x: 25500, y: 25500 }, map: { x: 712, y: 108 } },
      { vacuum: { x: 35500, y: 25500 }, map: { x: 1512, y: 108 } },
      { vacuum: { x: 25500, y: 35500 }, map: { x: 712, y: -692 } },
    ];
    expect(mapZoneToVacuumZone({ x1: 824, y1: 428, x2: 744, y2: 348 }, calibration)).toEqual({
      x1: 25900,
      y1: 21500,
      x2: 26900,
      y2: 22500,
    });
  });

  it('refuses missing or degenerate calibration instead of guessing', () => {
    expect(() => vacuumToMap(1, 2, [])).toThrow('At least three calibration points');
  });
});
