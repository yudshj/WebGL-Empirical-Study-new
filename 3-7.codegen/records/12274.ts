import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://maplestory.wiki/EMS/92');
  await page.getByText('Character').click();
  await page.getByText('Cape').click();
  await page.getByText('Show Preview').click();
  await page.locator('li:nth-child(2) > a').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('img:nth-child(37)').click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Kriel the Fairy' }).click();
  await page1.getByRole('link', { name: 'Sky Road Rumble 3' }).click();
});