import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://uczelniaoswiecim.wkraj.pl/html5/index.php?id=80348');
  await page.getByRole('img').nth(2).click();
  await page.locator('#key_1498331543281').getByRole('img').nth(1).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('#key_1598543554276').getByRole('img').nth(1).click();
});