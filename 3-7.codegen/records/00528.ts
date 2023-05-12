import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://damianaact1.tif360.mx/');
  await page.locator('#renderCanvas').click({
    position: {
      x: 656,
      y: 428
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 731,
      y: 420
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 654,
      y: 429
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 664,
      y: 430
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 660,
      y: 461
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 1175,
      y: 401
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 964,
      y: 499
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 674,
      y: 348
    }
  });
});