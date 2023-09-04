import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://encorehospitalitycarpet.com/');
  await page.locator('#product-next').click();
  await page.locator('#product-next').click();
  await page.locator('#product-next').click();
  await page.locator('#product-prev').click();
  await page.locator('#segment-next').click();
  await page.locator('#segment-prev').click();
  await page.locator('#segment-prev').click();
  await page.locator('div:nth-child(67) > .we-pm-icon').click();
  await page.locator('#nextMarker').getByText('navigate_next').click();
  await page.locator('#nextMarker').getByText('navigate_next').click();
  await page.locator('#prevAgent').getByText('navigate_before').click();
  await page.locator('#nextAgent').getByText('navigate_next').click();
  await page.locator('#nextAgent').getByText('navigate_next').click();
  await page.locator('div:nth-child(6) > .we-pm-icon').click();
  await page.locator('#nextAgent').getByText('navigate_next').click();
  await page.getByText('add_circle').click();
  await page.getByText('remove_circle').click();
});