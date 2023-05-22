import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/the-descent-of-the-serpent/vAEAZBv58OliBA');
  await page.frameLocator('iframe').getByRole('button', { name: 'Start Game' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Skip' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Huitzilopochtli' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Continue' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Challenge' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Continue' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Continue' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Start Level' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'OK' }).click();
  await page.frameLocator('iframe').locator('#game').click();
  await page.frameLocator('iframe').locator('app-input-joystick div').nth(2).click();
  page.keyboard.press('w', { delay: 1000 });
  page.keyboard.press('d', { delay: 1000 });
});