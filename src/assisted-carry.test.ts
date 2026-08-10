import { describe, expect, it } from 'vitest';
import { assistedFloor, createAssistedJob, decodeAssistedJob, encodeAssistedJob } from './assisted-carry';
import { configFixture } from './test/fixtures';
import type { JobDraft } from './types';

const drafts: JobDraft[] = [
  {
    preset_id: 'smartplan',
    strategy: 'smartplan',
    cleaning_type: 'vacuum_and_mop',
    cleaning_count: 1,
  },
  {
    preset_id: 'vacuum_then_mop',
    strategy: 'custom',
    cleaning_type: 'vacuum_then_mop',
    fan_speed: 'turbo',
    mop_mode: 'fast',
    mop_intensity: 'high',
    cleaning_count: 1,
  },
  {
    preset_id: 'vacuum_and_mop',
    strategy: 'custom',
    cleaning_type: 'vacuum_and_mop',
    fan_speed: 'balanced',
    mop_mode: 'standard',
    mop_intensity: 'medium',
    cleaning_count: 2,
  },
  {
    preset_id: 'vacuum_only',
    strategy: 'custom',
    cleaning_type: 'vacuum',
    fan_speed: 'max_plus',
    cleaning_count: 2,
  },
];

describe('assisted carry payload', () => {
  it('restores the isolated floor saved in the durable job', () => {
    const bathroom = {
      id: 'bathroom', name: 'Bathroom', map_entity: 'image.bathroom', map_select_option: 'Bathroom',
      assisted_carry: true, rooms: [{ segment_id: 1, area_id: 'bathroom', name: 'Bathroom' }],
    };
    const config = { ...configFixture, floors: [...configFixture.floors, bathroom] };
    expect(assistedFloor(config, createAssistedJob(bathroom, [1], drafts[3]))).toBe(bathroom);
  });

  it.each(drafts)('round-trips $preset_id below the helper limit', (draft) => {
    const job = createAssistedJob({
      id: 'upstairs', name: 'Upstairs', map_entity: 'image.upstairs', map_select_option: 'Map 1',
      assisted_carry: true, rooms: [
        { segment_id: 1, area_id: 'bedroom', name: 'Bedroom' },
        { segment_id: 2, area_id: 'laundry', name: 'Laundry' },
        { segment_id: 3, area_id: 'landing', name: 'Landing' },
        { segment_id: 5, area_id: 'office', name: 'Office' },
      ],
    }, [1, 2, 3, 5, 5], draft);
    const encoded = encodeAssistedJob(job);
    expect(encoded.length).toBeLessThanOrEqual(255);
    expect(decodeAssistedJob(encoded)).toEqual(job);
  });

  it('decodes the old payload as Vac & Mop', () => {
    expect(decodeAssistedJob('{"s":[1,5],"f":"balanced","m":"standard","w":"medium","c":1}')).toEqual({
      segment_ids: [1, 5],
      whole_floor: false,
      strategy: 'custom',
      cleaning_type: 'vacuum_and_mop',
      fan_speed: 'balanced',
      mop_mode: 'standard',
      mop_intensity: 'medium',
      cleaning_count: 1,
    });
  });

  it('omits mop controls from Vacuum-only and all manual controls from SmartPlan', () => {
    const floor = { id: 'bathroom', name: 'Bathroom', map_entity: 'image.bathroom', map_select_option: 'Bathroom', assisted_carry: true, rooms: [{ segment_id: 1, area_id: 'bathroom', name: 'Bathroom' }] };
    expect(JSON.parse(encodeAssistedJob(createAssistedJob(floor, [1], drafts[3])))).toEqual({
      s: [1], d: 'bathroom', o: 'Bathroom', a: ['bathroom'], e: 1, g: 'custom', t: 'vacuum', f: 'max_plus', c: 2,
    });
    expect(JSON.parse(encodeAssistedJob(createAssistedJob(floor, [1], drafts[0])))).toEqual({
      s: [1], d: 'bathroom', o: 'Bathroom', a: ['bathroom'], e: 1, g: 'smartplan', t: 'vacuum_and_mop', c: 1,
    });
    expect(JSON.parse(encodeAssistedJob(createAssistedJob(floor, [1], drafts[1])))).toEqual({
      s: [1], d: 'bathroom', o: 'Bathroom', a: ['bathroom'], e: 1, g: 'custom', t: 'vacuum_then_mop', c: 1,
    });
  });
});
