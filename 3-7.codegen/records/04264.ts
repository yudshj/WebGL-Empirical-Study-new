import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://3dx.kommunekart.com/');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.goto('https://3dx.kommunekart.com/?x=51&y=9.999999999999973&z=2499999.9999989406&head=360&pitch=-64.99999999999997&roll=360');
  await page.locator('canvas').click({
    modifiers: ['Control'],
    position: {
      x: 736,
      y: 381
    }
  });
  await page.goto('https://3dx.kommunekart.com/?x=84.9648658526636&y=13.37586710505628&z=743052.8611824713&head=359.9999999999999&pitch=-46.77620425204124&roll=359.9999999999997');
});