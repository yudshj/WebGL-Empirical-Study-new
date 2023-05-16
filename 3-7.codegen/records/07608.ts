import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://demos.littleworkshop.fr/track');
  await page.frameLocator('#viewport').getByText('.cls-1 { fill: none; stroke: #fff; stroke-width: 4.43px; fill-rule: evenodd; } S').click();
});