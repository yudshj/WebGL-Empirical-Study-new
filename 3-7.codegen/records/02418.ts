import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.baqueratta.com/');
  await page.locator('canvas').click({
    position: {
      x: 419,
      y: 478
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 650,
      y: 425
    }
  });
  await page.getByRole('img', { name: 'Return' }).click();
  await page.locator('canvas').click({
    position: {
      x: 798,
      y: 390
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1070,
      y: 391
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1085,
      y: 428
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 645,
      y: 442
    }
  });
  await page.locator('#sortVertical').click();
  await page.locator('#viewPhoto').getByRole('img', { name: 'Return' }).click();
  await page.locator('canvas').click({
    position: {
      x: 658,
      y: 426
    }
  });
  await page.locator('#sortVertical').click();
  await page.locator('#viewPhoto div').nth(4).click();
  await page.locator('#viewPhoto').getByRole('img', { name: 'Return' }).click();
  await page.locator('canvas').click({
    position: {
      x: 38,
      y: 430
    }
  });
});