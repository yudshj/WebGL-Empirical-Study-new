import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://trsanaltur.com/');
  await page.locator('section:nth-child(3) > div > div > div > .elementor-section > .elementor-container > div:nth-child(2) > .elementor-widget-wrap > .elementor-element > .elementor-widget-container').click();
  await page.locator('div:nth-child(2) > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-img > .attachment-full').click();
  await page.locator('div:nth-child(2) > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-img').click();
  await page.getByRole('heading', { name: 'QR KOD TASARIMI' }).click();
  await page.locator('div:nth-child(4) > .elementor-widget-wrap > .elementor-element > .elementor-widget-container').first().click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});