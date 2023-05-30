import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.wavescanner.net/');
  await page.locator('canvas').click({
    position: {
      x: 1046,
      y: 643
    }
  });
  await page.locator('#play-barnacle').click();
  await page.locator('#play-escape-pod').click();
  await page.locator('canvas').click({
    position: {
      x: 984,
      y: 623
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 504,
      y: 476
    }
  });
  await page.locator('#play-bronzite-chondrite').click();
  await page.locator('#toggle-bronzite-chondrite').click();
  await page.locator('#toggle-geyser').click();
  await page.locator('#toggle-barnacle').click();
  await page.locator('#toggle-escape-pod').click();
  await page.locator('#play-barnacle').click();
  await page.locator('#play-escape-pod').click();
  await page.locator('#play-escape-pod').click();
  await page.locator('#play-barnacle').click();
  await page.locator('canvas').click({
    position: {
      x: 921,
      y: 430
    }
  });
  await page.locator('#play-crash-site').click();
  await page.locator('#play-metallic-meteorite').click();
  await page.locator('#toggle-mesosiderite').click();
  await page.locator('#toggle-crash-site').click();
  await page.locator('#play-crash-site').click();
  await page.locator('canvas').click({
    position: {
      x: 634,
      y: 372
    }
  });
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
});