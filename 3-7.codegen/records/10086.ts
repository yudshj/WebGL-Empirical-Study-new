import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://holeio2.com/');
  await page.getByRole('button', { name: 'Got it!' }).click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);

  await page.frameLocator('internal:role=banner >> iframe').frameLocator('iframe').locator('#gameContainer').click({
    position: {
      x: 635,
      y: 646
    }
  });
  await page.mouse.move(100, 100);
});