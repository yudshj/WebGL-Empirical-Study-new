import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bubbles-sueddeutsche.das-onlinespiel.de/');
  await page.goto('https://bubbles-sueddeutsche.das-onlinespiel.de/?re=1');
  await page.frameLocator('#bubbles').locator('#game').click({
    position: {
      x: 595,
      y: 427
    }
  });
  await page.frameLocator('#bubbles').locator('#game').click({
    position: {
      x: 295,
      y: 493
    }
  });
  await page.frameLocator('#bubbles').locator('#game').click({
    position: {
      x: 278,
      y: 93
    }
  });
  await page.frameLocator('#bubbles').locator('#game').click({
    position: {
      x: 498,
      y: 93
    }
  });
  await page.frameLocator('#bubbles').locator('#game').click({
    position: {
      x: 341,
      y: 85
    }
  });
});