import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://zeitkapsel.wdr.de/');
  await page.getByText('starten').click();
  await page.getByText('normal für langsame Internetverbindungen empfohlen').click();
});