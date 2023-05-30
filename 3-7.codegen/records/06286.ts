import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://calculla.com/calculators/calculator');
  await page.getByRole('listitem').filter({ hasText: 'ASCII-2-number converterconverter ASCII hex decThe converter of any ASCII or Uni' }).getByRole('img').first().click();
  await page.getByText('one big HEX', { exact: true }).click();
  await page.locator('div').filter({ hasText: 'Show detailed settings:' }).nth(2).click();
  await page.getByRole('navigation').filter({ hasText: 'Calculators listCALCULATORASCII characters (or Unicode) to numbers converter' }).getByRole('link', { name: 'CALCULATOR', exact: true }).click();
  await page.frameLocator('iframe[name="aswift_3"]').frameLocator('iframe[name="ad_iframe"]').getByRole('button', { name: 'Close ad' }).click();
  await page.getByText('Boiling point calculatorpressure↔temperature↔enthalpy of vaporization↔Clausius-C').click();
  await page.locator('#inBoilingPointReference').click();
  await page.locator('#inBoilingPointReference').fill('8888');
});