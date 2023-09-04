import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://maps.tirol.gv.at/externalcall.jsp?user=guest&project=tmap_master&client=auto');
  await page.goto('https://maps.tirol.gv.at/synserver?user=guest&project=tmap_master&client=core');
  await page.getByRole('button', { name: 'Zoom In' }).click();
  await page.getByRole('button', { name: 'Zoom out' }).click();
  await page.getByRole('button', { name: 'Show Previous Extent.\nRight mouse button for panning the map.' }).click();
  await page.getByRole('button', { name: 'Next Extent' }).click();
  await page.getByRole('button', { name: 'Toggle Toolbar' }).click();
});