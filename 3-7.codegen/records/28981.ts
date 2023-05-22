import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://youarethestylist.imm-g-prod.com/');
  await page.locator('canvas').click({
    position: {
      x: 626,
      y: 670
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 362
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 362
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 362
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 362
    }
  });
});