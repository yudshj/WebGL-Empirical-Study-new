import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.freistadt.at/system/web/default.aspx?sprache=2');
  await page.getByText('Save').first().click();
});