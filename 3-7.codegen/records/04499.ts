import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://aeximius.com/');
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.getByText('I Agree').click();
  await page.locator('#hero-lightpass').click({
    position: {
      x: 721,
      y: 905
    }
  });
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});