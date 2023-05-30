import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/OmriGM/body-pose-beat-game');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'bit.ly/2VbsgmL' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'bit.ly/2VbsgmL' }).click();
  const page2 = await page2Promise;
});