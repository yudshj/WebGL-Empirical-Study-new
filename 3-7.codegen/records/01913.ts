import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://spacelamb.12wave.com/');
  await page.locator('#oval').click();
  await page.locator('#mainBigButton path').first().click();
  await page.locator('#mouse_button_svg').click();
  await page.locator('#okRoundButton path').nth(1).click();
});