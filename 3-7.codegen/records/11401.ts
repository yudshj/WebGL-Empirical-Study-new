import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kryspinow.wkraj.pl/html5/index.php?id=66890');
  await page.getByRole('img').nth(2).click();
  await page.locator('#key_1625133974307').getByRole('img').nth(1).click();
  await page.locator('#key_1375383283753').getByRole('img').nth(1).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('#player canvas').click({
    position: {
      x: 780,
      y: 387
    }
  });
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
});