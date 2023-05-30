import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {

  await page.goto('http://www.2dpaintball.com/online-paintball-field-editor.php');
  await page.getByRole('link', { name: 'Log In ' }).nth(1).click();
  await page.frameLocator('iframe[name="fancybox-frame1684345319492"]').locator('input[name="pass"]').click();
  await page.frameLocator('iframe[name="fancybox-frame1684345319492"]').locator('input[name="pass"]').fill('123456');
  await page.frameLocator('iframe[name="fancybox-frame1684345319492"]').getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '2D Paintball' }).click();
  await page.getByRole('link', { name: ' Play Now!' }).click();
  await page.locator('#room_8_info').getByRole('link', { name: ' Join field' }).click();
  await page.locator('.underlay').click();
});