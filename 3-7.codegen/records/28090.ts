import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.valsparcolorverse.com/');
  await page.goto('https://www.valsparcolorverse.com/#/');
  await page.goto('https://www.valsparcolorverse.com/#/app');
  await page.locator('#renderCanvas').click({
    position: {
      x: 255,
      y: 520
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 664,
      y: 499
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 656,
      y: 366
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 659,
      y: 534
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 944,
      y: 537
    }
  });
  await page.getByRole('button', { name: 'Let\'s Run!' }).click();
  await page.getByText('0 Please rotate your device! This website uses cookies and similar technologies ').press('ArrowLeft');
  await page.goto('https://www.valsparcolorverse.com/#/app');
});