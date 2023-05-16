import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://playgroundx.site/');
  await page.getByRole('link', { name: 'muplus' }).click();
  await page.locator('video').click();
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
  await page.locator('#modal-to-render').press('ArrowDown');
});