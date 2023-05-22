import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://maplestory.wiki/');
  await page.getByRole('link', { name: 'THMS/20.1.0' }).click();
  await page.locator('li:nth-child(3) > a').click();
  await page.locator('li:nth-child(4) > a').first().click();
  await page.locator('li:nth-child(5) > a').first().click();
  await page.locator('li:nth-child(2) > a').first().click();
  await page.getByTitle('Ludus Lake').click({
    position: {
      x: 79,
      y: 91
    }
  });
  const page1Promise = page.waitForEvent('popup');
  await page.locator('img:nth-child(56)').click();
  const page1 = await page1Promise;
});