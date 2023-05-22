import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/play-a-kandinsky/sgF5ivv105ukhA');
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.frameLocator('iframe').locator('#LoadingScreenSvg').click();
  await page.frameLocator('iframe').getByText('3Hear the painting').click({
    button: 'right'
  });
  await page.frameLocator('iframe').getByText('Hear the painting').click();
  await page.getByRole('button', { name: 'Close Experiment' }).click();
  await page.getByRole('button', { name: 'Quit Game' }).click();
  await page.frameLocator('iframe').getByText('Try it yourself').click();
  await page.frameLocator('iframe').locator('#two-backdrop-texture').click();
  await page.frameLocator('iframe').getByText('Heavenly Alive Still Cheeky Energy Radiant Restless Rage Immovable Supernatural').click();
  await page.frameLocator('iframe').getByText('Heavenly Alive Still Cheeky Energy Radiant Restless Rage Immovable Supernatural').click();
  await page.getByRole('button', { name: 'Close Experiment' }).click();
});