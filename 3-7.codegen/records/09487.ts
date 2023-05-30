import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/tensorspace-team/tensorspace');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'tensorspace.org', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'ResNet-50' }).click();
  await page1.goto('https://tensorspace.org/html/playground/resnet50.html');
  await page1.locator('canvas').first().click({
    position: {
      x: 490,
      y: 366
    }
  });
  await page1.locator('canvas').first().click({
    position: {
      x: 490,
      y: 359
    }
  });
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
  await page1.locator('canvas').first().click({
    position: {
      x: 491,
      y: 418
    }
  });
  await page1.locator('canvas').first().click({
    position: {
      x: 488,
      y: 333
    }
  });
  await page1.locator('canvas').first().click({
    position: {
      x: 506,
      y: 330
    }
  });
});