import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://multiuser-fluid.glitch.me/');
  await page.getByRole('textbox', { name: 'Nickname' }).click();
  await page.getByRole('textbox', { name: 'Nickname' }).fill('8888');
  await page.locator('.bg').first().click();
  await page.locator('canvas').first().click({
    position: {
      x: 1055,
      y: 315
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1014,
      y: 281
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 921,
      y: 432
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 919,
      y: 298
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1033,
      y: 193
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 942,
      y: 457
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 795,
      y: 625
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 738,
      y: 284
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1094,
      y: 226
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1181,
      y: 395
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 879,
      y: 532
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1043,
      y: 576
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 886,
      y: 354
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 386,
      y: 386
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1062,
      y: 405
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 570,
      y: 548
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1122,
      y: 324
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1258,
      y: 260
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1246,
      y: 547
    }
  });
});