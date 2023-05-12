import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://postomino.wkraj.pl/html5/index.php?id=80719');
  await page.goto('https://postomino.wkraj.pl/html5/index.php?id=80719#80671/316,13');
});