import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://onevone.web.app/');
  await page.getByRole('button', { name: 'Got It' }).click();
  await page.locator('#gameContainer').click({
    position: {
      x: 740,
      y: 559
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 1085,
      y: 612
    }
  });
  await page.mouse.move(1085, 612);
  await page.locator('body').press('Control+f');
  await page.locator('body').press('Control+1');
  await page.locator('body').press('Control+3');
  await page.locator('body').press('Control+4');
  await page.locator('#gameContainer').click({
    position: {
      x: 526,
      y: 693
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 526,
      y: 693
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 526,
      y: 693
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 526,
      y: 693
    }
  });
  await page.locator('body').press('Control+z');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#gameContainer').click({
    modifiers: ['Control'],
    position: {
      x: 526,
      y: 693
    }
  });
});