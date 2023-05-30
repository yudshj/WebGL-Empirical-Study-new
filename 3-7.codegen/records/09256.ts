import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gears.aposteriori.com.sg/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('#blockly-k').click();
  await page.locator('#blocklyDiv').getByRole('img').filter({ hasText: 'When Started' }).click();
  await page.locator('#blockly-i').click();
  await page.locator('#blockly-l').click();
  await page.getByRole('img').filter({ hasText: 'color sensor seesblack ▾When Started2020move tank with left speedand right speed' }).click();
  await page.locator('#blockly-j').click();
  await page.getByRole('img').filter({ hasText: 'color sensor seesblack ▾When Started2020move tank with left speedand right speed' }).click();
  await page.getByText('Blocks').click();
  await page.getByRole('img').filter({ hasText: 'color sensor seesblack ▾When Started2020move tank with left speedand right speed' }).click();
});