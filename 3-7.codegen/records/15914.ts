import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://simpsonsteel.custom3dbuilder.com/');
  await page.getByRole('listitem').filter({ hasText: /^Width \(ft\)$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^Width \(ft\)$/ }).getByRole('textbox').fill('80');
  await page.getByRole('listitem').filter({ hasText: /^Width \(ft\)$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^Length \(ft\)$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^Length \(ft\)$/ }).getByRole('textbox').fill('80');
  await page.getByRole('listitem').filter({ hasText: /^Length \(ft\)$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^Height \(ft\)$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^Height \(ft\)$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^Height \(ft\)$/ }).getByRole('textbox').fill('80');
  await page.getByRole('listitem').filter({ hasText: /^Height \(ft\)$/ }).getByRole('textbox').press('Enter');
  await page.getByText('Colors').click();
  await page.locator('.CharcoalGray').selectOption('Cobalt Blue');
  await page.locator('.BurnishedSlate').first().selectOption('Rustic Red');
  await page.getByText('Porch', { exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: /^Left Side Wall Porch$/ }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: /^Right Side Wall Porch$/ }).locator('div').click();
  await page.getByRole('listitem').filter({ hasText: /^FR Wrap Porch$/ }).getByRole('checkbox').check();
  await page.getByRole('listitem').filter({ hasText: /^FL Wrap Porch$/ }).getByRole('checkbox').check();
  await page.getByRole('listitem').filter({ hasText: /^BL Wrap Porch$/ }).click();
  await page.locator('div').filter({ hasText: /^BR Wrap Porch$/ }).locator('div').click();
  await page.getByText('Windows & Doors').click();
  await page.getByRole('listitem').filter({ hasText: /^Add Slider Window$/ }).click();
  await page.getByRole('listitem').filter({ hasText: /^Add Walk Door Solid$/ }).click();
  await page.getByRole('listitem').filter({ hasText: /^Add Walk Door Solid Double$/ }).click();
  await page.getByRole('listitem').filter({ hasText: /^Add Overhead Door$/ }).click();
  await page.getByRole('listitem').filter({ hasText: /^Add Roll Up Door$/ }).click();
  await page.getByText('Interior', { exact: true }).click();
  await page.getByText('Add for Scale').click();
  await page.getByRole('listitem').filter({ hasText: /^Add Car$/ }).click();
  await page.getByRole('listitem').filter({ hasText: /^Add Tractor$/ }).click();
  await page.getByText('Add ATV').click();
  await page.getByText('Add RV').click();
  await page.getByText('Add Person').click();
  await page.getByText('Add Person').click();
  await page.getByText('Add Person').click();
  await page.getByText('Add Ski Boat').click();
});