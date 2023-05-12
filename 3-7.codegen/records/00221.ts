import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://ava-sessions.com/');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('foobar');
  await page.getByRole('button', { name: '[ Submit ]' }).click();
  await page.getByRole('button', { name: '[ Yes ]' }).click();
  await page.getByRole('button', { name: '[ Click Anywhere to Begin ]' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '[ See The Others ]' }).click();
  const page1 = await page1Promise;
});