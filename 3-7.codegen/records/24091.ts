import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.madeeasyschool.in/Virtualtour/mestest/index.htm');
  await page.locator('[id="\\32 24"] canvas').nth(1).click({
    position: {
      x: 628,
      y: 415
    }
  });
  await page.locator('[id="\\32 24"] canvas').nth(1).click({
    position: {
      x: 851,
      y: 489
    }
  });
  await page.locator('[id="\\35 0"] > div:nth-child(2) > div > div').click();
  await page.locator('[id="\\32 24"] canvas').nth(1).click({
    position: {
      x: 1076,
      y: 566
    }
  });
  await page.locator('[id="\\31 6"]').getByRole('img').click();
  await page.locator('[id="\\35 2"] > div:nth-child(2) > div > div').click();
  await page.locator('[id="\\32 24"] canvas').nth(1).click({
    position: {
      x: 1034,
      y: 458
    }
  });
  await page.locator('[id="\\32 24"] canvas').nth(1).click({
    position: {
      x: 330,
      y: 323
    }
  });
});