import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://topservicegmbh.de/');
  await page.locator('#curtain').click();
  await page.getByRole('button', { name: 'Einverstanden nicht mehr zeigen' }).click();
  await page.frameLocator('internal:text="<a href=\\"https://my.matterport.com/show/?m=KZwwpFKqw7u\\">Top Service 360Â°-Rundga"i').locator('#showcase-play').click();
});