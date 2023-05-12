import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://stickpage-137254548.us-east-1.elb.amazonaws.com/kingdomheartsparody.shtml');
  await page.locator('div:nth-child(7) > a').click();
});