import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://almaguincampground.ca/');
  await page.getByRole('link', { name: 'Experience Almaguin Campground ' }).click();
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 611,
      y: 382
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 556,
      y: 395
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 596,
      y: 373
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 644,
      y: 407
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 628,
      y: 378
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 334,
      y: 247
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 1038,
      y: 249
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click();
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 572,
      y: 367
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 639,
      y: 386
    }
  });
  await page.frameLocator('#experience iframe').frameLocator('iframe').locator('#viewer canvas').click({
    position: {
      x: 644,
      y: 402
    }
  });
});