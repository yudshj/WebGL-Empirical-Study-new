import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.greenwoodcampbell.com/what');
  await page.getByRole('link', { name: 'Go now!' }).click();
  await page.goto('https://greenwoodcampbellmetaverse.com/qD7Knea/?vr_entry_type=2d_now');
  await page.getByRole('button', { name: 'Enter Room' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.locator('canvas').click({
    position: {
      x: 427,
      y: 350
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 981,
      y: 286
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 630,
      y: 168
    }
  });
});