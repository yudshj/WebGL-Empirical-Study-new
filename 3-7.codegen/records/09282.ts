import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://geo-devrel-io2021-oobe.web.app/');
  await page.goto('https://geo-devrel-io2021-oobe.web.app/#intro');
  await page.getByRole('button', { name: 'Start Exploring' }).click();
  await page.getByRole('link', { name: '2. Integrated Camera Control' }).click();
  await page.getByRole('link', { name: '3. WebGL Overlay View' }).click();
  await page.getByRole('link', { name: '4. Depth and Occlusion' }).click();
  await page.getByRole('link', { name: '5. Data Visualization' }).click();
  await page.getByRole('link', { name: '6. Reimagine the Map' }).click();
});