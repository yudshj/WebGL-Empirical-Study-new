import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://moccos3d.com/');
  await page.locator('canvas').click({
    position: {
      x: 643,
      y: 117
    }
  });
  await page.locator('#idbody').press('Control+0');
  await page.locator('canvas').click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.locator('canvas').click({
    position: {
      x: 453,
      y: 261
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 786,
      y: 344
    }
  });
  await page.getByText('    Sign in with Google').click();
  await page.locator('canvas').click({
    position: {
      x: 932,
      y: 181
    }
  });
});