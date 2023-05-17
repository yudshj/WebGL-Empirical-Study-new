import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://agh.wkraj.pl/html5/index.php?id=50645');
  await page.getByRole('img').nth(2).click();
});