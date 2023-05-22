import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://design.fbibuildings.com/');
  await page.getByRole('listitem').filter({ hasText: /^Width \(ft\)$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^Width \(ft\)$/ }).getByRole('textbox').fill('90');
  await page.getByRole('listitem').filter({ hasText: /^Width \(ft\)$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Building DimensionsWidth (ft)Length (ft)Height (ft)Roof TypeGabledAsymmetricalSi' }).getByRole('combobox').selectOption('Single Slope');
  await page.getByRole('listitem').filter({ hasText: 'Building DimensionsWidth (ft)Length (ft)Height (ft)Roof TypeGabledAsymmetricalSi' }).getByRole('combobox').selectOption('Asymmetrical');
});