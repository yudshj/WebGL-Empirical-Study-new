import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.o-ran.org/o-ran-ecosystem');
  await page.mouse.down();
  await page.mouse.move(100, 100);
  await page.mouse.move(200, 200);
  await page.mouse.move(300, 300);
  await page.mouse.up();
  await page.mouse.down();
  await page.mouse.move(-100, -100);
  await page.mouse.move(-200, -200);
  await page.mouse.move(-300, -300);
  await page.mouse.up();
});