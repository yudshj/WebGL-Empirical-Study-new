import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mobileguide.rom.yourcultureconnect.com/');
  await page.getByRole('link', { name: 'Links to Mobile Tours and Online Experiences' }).click();
  await page.getByRole('button', { name: 'Willner Madge Gallery, Dawn of Life' }).click();
  await page.getByRole('link', { name: 'Audio Tour' }).click();
  await page.getByRole('button', { name: 'Return to main page' }).click();
  await page.getByRole('button', { name: 'Return to main page' }).click();
  await page.getByRole('button', { name: 'Museum Highlights' }).click();
  await page.getByRole('link', { name: 'Welcome to ROM’s Highlights' }).click();
  await page.getByRole('button', { name: 'Return to experience page' }).click();
  await page.getByRole('button', { name: 'Return to main page' }).click();
  await page.getByRole('button', { name: 'Museum Highlights' }).click();
});