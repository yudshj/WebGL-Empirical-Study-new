import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://flowerverse.sundae.flowers/');
  await page.goto('https://flowerverse.sundae.flowers/pc/HTML5/SUNDAE_SCHOOL.html');
  await page.locator('#canvas').click({
    position: {
      x: 682,
      y: 651
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 540
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 540
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 540
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 711,
      y: 540
    }
  });
  await page.keyboard.press('w', { delay: 4000 });
});