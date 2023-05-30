import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://justedit.lol/');
  await page.getByRole('button', { name: 'Got It' }).click();
  await page.locator('#gameContainer').click({
    position: {
      x: 866,
      y: 543
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 1022,
      y: 629
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 1058,
      y: 621
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 1014,
      y: 637
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 1083,
      y: 598
    }
  });
  await page.keyboard.press('f');
  await page.mouse.click(640, 480);
  await page.mouse.move(100, 100);
});