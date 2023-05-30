import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://alpha.castaways.com/');
  await page.goto('https://alpha.castaways.com/?st=hub');
  await page.goto('https://alpha.castaways.com/?st=hub&s=d376d5');
  await page.goto('https://alpha.castaways.com/?st=hub&s=d376d5&r=237836');
  await page.keyboard.press('w', {delay: 1000});
});