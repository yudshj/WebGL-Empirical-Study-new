import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://polo-experience.piaget.com/video/360');
  await page.locator('pg-preloader-button div').nth(3).click();
});