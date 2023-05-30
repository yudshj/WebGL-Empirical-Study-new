import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/Rishit-dagli/MIRNet-TFJS');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'rishit-dagli.github.io/MIRNet-TFJS/' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Run on Repl.it' }).click();
  await page1.goto('https://replit.com/@RishitDagli/MIRNet-TFJS');
  await page1.getByRole('button', { name: 'Run' }).click();
  await page1.frameLocator('#main-content iframe').locator('#image').click();
  await page1.frameLocator('#main-content iframe').locator('#image').setInputFiles('1.jpg');
  await page1.frameLocator('#main-content iframe').getByRole('button', { name: 'Submit' }).click();
  await page1.frameLocator('#main-content iframe').getByRole('button', { name: 'Submit' }).click();
});