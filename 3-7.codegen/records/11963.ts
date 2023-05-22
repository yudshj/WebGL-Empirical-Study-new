import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lucretius.network/');
  await page.getByRole('link', { name: 'Playground' }).click();
  await page.getByRole('img').nth(1).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Go To Playground' }).click();
  const page1 = await page1Promise;
  await page1.locator('#unity-canvas').click({
    position: {
      x: 390,
      y: 316
    }
  });
  await page1.getByPlaceholder('Enter Your Wallet Address').fill('123456');
  await page1.locator('#unity-canvas').click({
    position: {
      x: 664,
      y: 312
    }
  });
  await page1.getByPlaceholder('Enter Your Tag Number').fill('0');
  await page1.locator('#unity-canvas').click({
    position: {
      x: 852,
      y: 441
    }
  });
  await page1.locator('#unity-canvas').click({
    position: {
      x: 830,
      y: 435
    }
  });
  await page1.locator('#unity-canvas').click({
    clickCount: 3,
    position: {
      x: 824,
      y: 438
    }
  });
});