import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://waysofcurating.withgoogle.com/');
  await page.getByRole('link').filter({ hasText: 'Created with Sketch.' }).click();
  await page.locator('a').filter({ hasText: 'Exhibitions' }).click();
  await page.getByRole('link', { name: '"11 Rooms" Manchester, England, 2011 View Full Exhibition' }).click();
  await page.getByRole('link', { name: 'What Manchester Does Today the Rest of the World Does Tomorrow, 2011 Lucy Raven' }).click();
  await page.locator('.project__overlay__media > a:nth-child(3)').click();
  await page.locator('.project__overlay__media > a:nth-child(3)').click();
  await page.locator('.overlay__close').click();
  await page.getByRole('link', { name: 'Timeline' }).click();
});