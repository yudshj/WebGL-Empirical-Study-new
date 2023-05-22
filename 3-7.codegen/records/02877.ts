import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.granreserve.com.br/parkgranreserve/');
  await page.locator('#fullscreenSlideshowContainer').getByRole('img').click();
  await page.locator('#fullscreenSlideshowContainer').getByRole('img').click();
  await page.locator('#fullscreenSlideshowContainer').getByRole('img').click();
  await page.getByText('×').click();
  await page.frameLocator('#tour-container iframe').locator('div:nth-child(13) > div:nth-child(3)').click();
  await page.frameLocator('#tour-container iframe').locator('div:nth-child(9) > div:nth-child(3)').first().click();
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