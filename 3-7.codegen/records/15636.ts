import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://self-guide.maes.yourcultureconnect.com/');
  await page.goto('https://self-guide.maes.yourcultureconnect.com/language');
  await page.getByText('中文 (Zhōngwén), 汉语, 漢語').click();
  await page.getByRole('link', { name: 'Links to', exact: true }).click();
});