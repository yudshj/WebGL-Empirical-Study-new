import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/paint-with-music/YAGuJyDB-XbbWg');
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^In the Sky$/ }).locator('canvas').click({
    position: {
      x: 140,
      y: 264
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 567,
      y: 345
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 422,
      y: 308
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 524,
      y: 378
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 634,
      y: 295
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 538,
      y: 210
    }
  });
  await page.frameLocator('iframe').getByRole('button', { name: 'Saxophone' }).click();
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 618,
      y: 285
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 596,
      y: 337
    }
  });
  await page.frameLocator('iframe').getByRole('button', { name: 'Birds Stamp' }).click();
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 531,
      y: 327
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 674,
      y: 395
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 588,
      y: 491
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 378,
      y: 443
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 923,
      y: 309
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 664,
      y: 422
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 642,
      y: 286
    }
  });
  await page.frameLocator('iframe').getByRole('button', { name: 'Trumpet' }).click();
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 554,
      y: 401
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 878,
      y: 437
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 730,
      y: 429
    }
  });
  await page.frameLocator('iframe').locator('#container canvas').nth(3).click({
    position: {
      x: 730,
      y: 420
    }
  });
});