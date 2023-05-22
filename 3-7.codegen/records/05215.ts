import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/giga-manga/UAHzM-yZUdUpNA');
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.frameLocator('iframe').getByText('screen_rotation Please rotate your device for a better experience Colorize forma').click();
  await page.frameLocator('iframe').getByText('screen_rotation Please rotate your device for a better experience Colorize forma').click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: 'Colorize format_color_fill' }).nth(1).click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: 'Colorize format_color_fill' }).nth(1).click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: 'Colorize format_color_fill' }).nth(1).click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: 'Colorize format_color_fill' }).nth(1).click();
  await page.frameLocator('iframe').getByText('screen_rotation Please rotate your device for a better experience Colorize forma').click();
  await page.frameLocator('iframe').getByText('screen_rotation Please rotate your device for a better experience Colorize forma').click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: 'Colorize format_color_fill' }).nth(1).click();
});