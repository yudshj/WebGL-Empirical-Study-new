import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://buildinghop.es/');
  await page.getByRole('button', { name: 'START' }).click();
  await page.locator('canvas').nth(1).click({
    position: {
      x: 611,
      y: 204
    }
  });
  await page.locator('.totem-canvas').click();
  await page.locator('.totem-canvas').click();
  await page.locator('.totem-canvas').click();
  await page.getByRole('button', { name: 'CHOOSE' }).click();
  await page.locator('canvas').nth(1).click({
    position: {
      x: 730,
      y: 214
    }
  });
  await page.getByRole('button', { name: 'CHOOSE' }).click();
  await page.locator('canvas').nth(1).click({
    position: {
      x: 971,
      y: 258
    }
  });
  await page.getByRole('button', { name: 'CHOOSE' }).click();
  await page.locator('canvas').nth(1).click({
    position: {
      x: 624,
      y: 500
    }
  });
  await page.getByRole('button', { name: 'CHOOSE' }).click();
  await page.locator('canvas').nth(1).click({
    position: {
      x: 645,
      y: 639
    }
  });
  await page.getByRole('button', { name: 'DONE' }).click();
  await page.getByPlaceholder('What’s your name?').click();
  await page.getByPlaceholder('What’s your name?').fill('abc');
  await page.getByPlaceholder('Where are you now?').click();
  await page.getByPlaceholder('Where are you now?').fill('china');
  await page.locator('div').filter({ hasText: /^China$/ }).click();
  await page.getByRole('button', { name: 'DONE' }).click();
  await page.locator('canvas').click({
    position: {
      x: 644,
      y: 434
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 642,
      y: 479
    }
  });
  await page.locator('div').filter({ hasText: 'Scroll downto compare to others' }).nth(2).click();
  await page.locator('canvas').click({
    position: {
      x: 627,
      y: 142
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 614,
      y: 166
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 486,
      y: 294
    }
  });
  await page.mouse.move(100,100);
  await page.getByText('Scroll downto go back').click();
});