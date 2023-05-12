import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://nexal.studio/');
  await page.locator('div').filter({ hasText: 'INSPIRED... AND READY TO KICK INSPIRED... AND READY TO KICK SOME AS*** SOME AS**' }).nth(2).click();
});