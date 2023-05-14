import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://pony-creator.ru/igra/752-poni-kreator-v3.html');
});