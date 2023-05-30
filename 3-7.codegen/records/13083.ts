import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://muzeumzamkowewmalborku.wkraj.pl/html5/index.php?id=34844');
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('link', { name: 'START' }).nth(2).click();
  await page.getByRole('link', { name: 'START' }).nth(1).click();
  await page.getByRole('link', { name: '×' }).click();
  await page.locator('#key_1394371896974 > .marker > .ico').first().click();
});