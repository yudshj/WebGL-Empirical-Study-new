import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://msqxr.at/wp-content/themes/msqtemplate/msq_showroom/index.html');
});