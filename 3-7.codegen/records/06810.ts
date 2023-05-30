import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://classic.gamcore.com/games/lost_in_immoral_grounds_chapter_2');
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click();
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click();
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').dblclick();
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click();
  await page.frameLocator('#nf_game').getByText('0FPSWebGL mode.').press('Enter');
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click();
  await page.getByRole('link', { name: 'Got it!' }).click();
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').dblclick();
  await page.frameLocator('#nf_game').locator('#UpperCanvas').click({
    position: {
      x: 388,
      y: 603
    }
  });
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click();
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click();
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click();
  await page.frameLocator('#nf_game').locator('#UpperCanvas').click({
    position: {
      x: 396,
      y: 473
    }
  });
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click({
    clickCount: 6
  });
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click({
    clickCount: 3
  });
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click({
    clickCount: 19
  });
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click();
  await page.frameLocator('#nf_game').locator('#UpperCanvas').click({
    position: {
      x: 408,
      y: 597
    }
  });
  await page.frameLocator('#nf_game').locator('#UpperCanvas').click({
    position: {
      x: 401,
      y: 570
    }
  });
  await page.frameLocator('#nf_game').locator('#ErrorPrinter').click({
    clickCount: 13
  });
});