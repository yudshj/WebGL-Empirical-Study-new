import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://climatecrisis.zenergi.co.uk/');
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 618,
      y: 353
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 627,
      y: 475
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 637,
      y: 500
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 642,
      y: 488
    }
  });
  await page.frameLocator('#gameiFrame').getByRole('textbox').click();
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 679,
      y: 494
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 686,
      y: 484
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 678,
      y: 503
    }
  });
  await page.frameLocator('#gameiFrame').getByRole('textbox').click();
  await page.frameLocator('#gameiFrame').getByRole('textbox').press('Enter');
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 669,
      y: 491
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 642,
      y: 517
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 598,
      y: 623
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 590,
      y: 504
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 54,
      y: 45
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 597,
      y: 489
    }
  });
  await page.frameLocator('#gameiFrame').getByRole('textbox').fill('dsfsadfvsd');
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 683,
      y: 496
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 1050,
      y: 450
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 529,
      y: 483
    }
  });
  await page.frameLocator('#gameiFrame').locator('canvas').click({
    position: {
      x: 211,
      y: 57
    }
  });
});