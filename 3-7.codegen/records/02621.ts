import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.dallacosta.com.br/');
  await page.goto('https://www.dallacosta.com.br/');
  await page.locator('.linhas > .owl-dots > div:nth-child(3)').click();
});