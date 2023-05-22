import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://app.bombcrypto.io/');
  await page.frameLocator('iframe[title="Bombcrypto"]').locator('#unity-canvas').click({
    position: {
      x: 439,
      y: 477
    }
  });
  await page.frameLocator('iframe[title="Bombcrypto"]').locator('#unity-canvas').click({
    position: {
      x: 506,
      y: 220
    }
  });
  await page.frameLocator('iframe[title="Bombcrypto"]').getByPlaceholder('USERNAME').fill('qwertasdfg');
  await page.frameLocator('iframe[title="Bombcrypto"]').locator('#unity-canvas').click({
    position: {
      x: 442,
      y: 262
    }
  });
  await page.frameLocator('iframe[title="Bombcrypto"]').getByPlaceholder('PASSWORD').fill('123456');
  await page.frameLocator('iframe[title="Bombcrypto"]').locator('#unity-canvas').click({
    position: {
      x: 496,
      y: 384
    }
  });
  await page.frameLocator('iframe[title="Bombcrypto"]').locator('#unity-canvas').click({
    position: {
      x: 842,
      y: 538
    }
  });
  await page.frameLocator('iframe[title="Bombcrypto"]').locator('#unity-canvas').click({
    position: {
      x: 467,
      y: 524
    }
  });
});