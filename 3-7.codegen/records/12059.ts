import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://m.htpchem.com/');
  await page.goto('https://www.htpchem.com/');
  await page.getByRole('link', { name: '콘텐츠 감상하기 오른쪽 화살표' }).click();
  await page.getByRole('link', { name: '콘텐츠 감상하기 HD SD' }).click();
});