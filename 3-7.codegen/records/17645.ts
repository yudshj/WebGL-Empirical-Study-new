import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://uniwersytetrolniczy.wkraj.pl/html5/index.php?id=78196#78201/0');
  await page.getByRole('link', { name: 'GALERIA 3D' }).click();
});