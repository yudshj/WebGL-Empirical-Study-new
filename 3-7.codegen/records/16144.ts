import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://somati.life/innervoice/');
  await page.goto('https://somati.life/innervoice/#/');
  await page.goto('https://somati.life/innervoice/');
  await page.getByText('Skip Intro').click();
  await page.goto('https://somati.life/innervoice/');
  await page.getByText('Skip Intro').click();
  await page.locator('.iv-c-choice-text').first().click();
  await page.locator('.iv-q-2 > .iv-buttons > div > .iv-c-choice-btn > .iv-c-choice-text').first().click();
  await page.locator('#canon_wall canvas').click({
    position: {
      x: 655,
      y: 449
    }
  });
  await page.locator('#canon_wall canvas').click({
    position: {
      x: 618,
      y: 339
    }
  });
  await page.locator('#canon_wall canvas').click({
    position: {
      x: 386,
      y: 370
    }
  });
  await page.locator('#canon_wall canvas').click({
    position: {
      x: 612,
      y: 362
    }
  });
  await page.locator('#canon_wall canvas').click({
    position: {
      x: 898,
      y: 419
    }
  });
  await page.locator('#canon_wall canvas').click({
    position: {
      x: 606,
      y: 410
    }
  });
  await page.locator('#canon_wall canvas').click({
    position: {
      x: 419,
      y: 426
    }
  });
  await page.locator('#canon_wall canvas').click({
    position: {
      x: 878,
      y: 437
    }
  });
  await page.locator('div').filter({ hasText: 'Get tips for a healthier you' }).nth(2).click();
});