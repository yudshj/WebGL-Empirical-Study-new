import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://catalog-plans.ru:4443/');
  await page.locator('.wci-texture').first().click();
  await page.locator('.wctt-body > div:nth-child(24)').first().click();
  await page.locator('div:nth-child(2) > .wct-show-texture > .wctst-close').click();
  await page.locator('#drawing').click({
    position: {
      x: 447,
      y: 66
    }
  });
  await page.locator('canvas').dblclick({
    position: {
      x: 659,
      y: 340
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 382,
      y: 514
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 766,
      y: 551
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 294,
      y: 340
    }
  });
  await page.getByText('Фасад', { exact: true }).first().click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
});