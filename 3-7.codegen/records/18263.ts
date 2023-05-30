import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://wayfinder.nfb.ca/');
  await page.locator('.content-container').first().click();
  await page.getByText('skip').click();
  await page.mouse.move(100, 100);
  await page.mouse.move(100, 100);
  await page.mouse.move(-300, -200);
  await page.locator('canvas').click({
    position: {
      x: 338,
      y: 283
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 655,
      y: 339
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 886,
      y: 538
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 839,
      y: 690
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 806,
      y: 426
    }
  });
});