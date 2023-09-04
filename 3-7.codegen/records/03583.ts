import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.rostimenu.com/');
  await page.getByTitle('Siguiente').click();
  await page.getByTitle('Siguiente').click();
  await page.getByTitle('Anterior').click();
  await page.getByTitle('Zoom').click();
  await page.locator('#OneBook3d_730419_zoom_layer').getByTitle('Zoom').click();
  await page.getByTitle('Inclinado').click();
  await page.getByTitle('Inclinado').click();
});