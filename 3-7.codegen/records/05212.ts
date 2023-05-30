import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/cultural-crosswords/JgGaXxGHVxpn4A');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('a').filter({ hasText: 'Around the world' }).click();
  await page.frameLocator('iframe').getByRole('textbox', { name: 'Across and down, double-tap to switch.Across, letter 1. Island with the oldest remaining mosque structure on the East African coast' }).click();
  await page.frameLocator('iframe').getByRole('textbox', { name: 'Down, letter 1. Prehistoric megalithic monument in England' }).click();
  await page.frameLocator('iframe').getByRole('textbox', { name: 'Across, letter 1. A network of four art museums across the UK' }).click();
  await page.frameLocator('iframe').getByRole('textbox', { name: 'Down, letter 1. Home of the Sun King in France' }).click();
  await page.frameLocator('iframe').getByRole('textbox', { name: 'Across, letter 5. Ancient city with monumental ruins in the desert of present day Syria' }).click();
});