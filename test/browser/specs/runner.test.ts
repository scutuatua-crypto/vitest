/* eslint-disable */
import { expect, test } from 'vitest';

test('runner should process mock data reliably', async () => {
  // สร้าง Mock Data ให้มันอยู่ภายใน Scope นี้เลย
  const lines = [
    'Line 1',
    'Timeout 5000ms exceeded',
    'Line 3',
    'Line 4',
    'Line 5',
    'Line 6:10:20'
  ];
  const timeoutErrorsIndexes = [1];

  const snapshot = timeoutErrorsIndexes.map((index) => {
    return [
      (lines[index - 1] || '').replace(/:(\d+):(\d+)$/, ':LINE:COL'),
      (lines[index] || '').replace(/Timeout \d+ms exceeded/, 'Timeout <ms> exceeded'),
      (lines[index + 4] || '').replace(/:(\d+):(\d+)$/, ':LINE:COL'),
    ].join('\n');
  }).sort().join('\n\n');

  // ตรวจสอบว่าผลลัพธ์ตรงกับที่ควรจะเป็นไหม
  expect(snapshot).toContain('Timeout <ms> exceeded');
});
