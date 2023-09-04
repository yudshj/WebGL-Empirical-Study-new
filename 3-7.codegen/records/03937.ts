import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.waidhofen-thaya-stadt.at/system/web/default.aspx?sprache=2');
  await page.getByText('Alle akzeptieren').first().click();
});