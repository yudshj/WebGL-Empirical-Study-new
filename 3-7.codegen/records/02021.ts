import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://thefinaltest.teacheradriangames.es/');
  await page.locator('#UpperCanvas').click({
    position: {
      x: 409,
      y: 425
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 429,
      y: 614
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 414,
      y: 613
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 408,
      y: 610
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 388,
      y: 259
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 390,
      y: 258
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 405,
      y: 603
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 303,
      y: 130
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 175,
      y: 214
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 166,
      y: 216
    }
  });
});