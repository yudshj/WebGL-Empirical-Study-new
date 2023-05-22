import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://solarsystem.appzend.net/');
  await page.frameLocator('#solar1 iframe').getByRole('slider', { name: 'Planet Orbit Speed' }).click();
});