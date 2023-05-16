import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://maps3d.io/');
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
});