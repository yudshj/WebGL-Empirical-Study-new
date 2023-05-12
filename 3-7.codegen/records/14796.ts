import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://qodeinteractive.com/kaleidoscope/');
  await page.getByText('FFuullll').click();
  await page.locator('div').filter({ hasText: 'CChhoooossee yyoouurr eexxppeerriieennccee bbaasseedd oonn yyoouurr ddeevviiccee' }).nth(1).click();
});