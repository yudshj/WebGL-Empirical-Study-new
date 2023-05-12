import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://cabbi.bo/enough/');
  await page.getByText('BEGIN').click();
  await page.locator('canvas').click({
    position: {
      x: 312,
      y: 235
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1047,
      y: 575
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 687,
      y: 415
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1153,
      y: 590
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1146,
      y: 606
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1146,
      y: 606
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1146,
      y: 606
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1146,
      y: 606
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 511,
      y: 378
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 549,
      y: 348
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 578,
      y: 301
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 521,
      y: 291
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1150,
      y: 604
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1163,
      y: 580
    }
  });
});