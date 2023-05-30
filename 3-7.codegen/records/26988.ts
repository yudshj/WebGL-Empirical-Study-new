import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.sourcetype.com/');
  await page.locator('canvas').click({
    position: {
      x: 648,
      y: 92
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 705,
      y: 143
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 650,
      y: 54
    }
  });
  page.mouse.move(50,50);
  await page.locator('canvas').click({
    position: {
      x: 631,
      y: 85
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 680,
      y: 49
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 637,
      y: 74
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 648,
      y: 47
    }
  });
  page.mouse.move(50,50);
  await page.locator('canvas').click({
    position: {
      x: 648,
      y: 47
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 650,
      y: 36
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 650,
      y: 36
    }
  });
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('canvas').click({
    position: {
      x: 647,
      y: 118
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 693,
      y: 58
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 647,
      y: 82
    }
  });
});