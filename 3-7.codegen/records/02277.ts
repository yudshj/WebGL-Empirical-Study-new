import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://www.activelivingnolimits-vr.co.uk/');
  await page.getByText('Let\'s get started').click();
  await page.getByText('Downpatrick Leisure CentreDownpatrickDownpatrick Leisure CentreDownpatrickThe Oz').click();
});