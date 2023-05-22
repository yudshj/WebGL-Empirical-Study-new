import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lab.julienverneaut.com/matcap-editor/');
  await page.locator('img:nth-child(7)').click();
  await page.locator('input[name="brushSize"]').click();
  await page.locator('input[name="brushSize"]').click();
  await page.locator('input[name="brushSize"]').fill('112');
  await page.getByText('Brush Size1256').click();
  await page.locator('input[name="blur"]').click();
  await page.locator('img:nth-child(23)').click();
  await page.locator('img:nth-child(10)').click();
});