import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ddw.nl/en/room-tour/25/1781/tour/vruchtvlees-awards');
  await page.getByRole('button', { name: 'Start 3D Experience' }).click();
});