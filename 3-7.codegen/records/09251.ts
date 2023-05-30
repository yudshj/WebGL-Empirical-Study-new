import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gdpseditor.com/');
  await page.goto('https://gdpseditor.com/os.html');
  await page.locator('#icons').getByText('GDPS Browser').click();
  await page.frameLocator('#window0 >> internal:text="Couldn\'t display the window. Please enable the iframe support on your browser."i').getByRole('link', { name: 'Daily Level' }).click();
  await page.frameLocator('#window0 >> internal:text="Couldn\'t display the window. Please enable the iframe support on your browser."i').locator('#playButton').click();
  await page.locator('#window0').getByTitle('Close').click();
});