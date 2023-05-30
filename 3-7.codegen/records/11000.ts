import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://juegosopqa.com/');
  await page.frameLocator('iframe[name="preview-frame"]').getByRole('button', { name: 'Aceptar Todas y Continuar' }).click();
  await page.frameLocator('iframe[name="preview-frame"]').locator('#game_6').click();
  await page.frameLocator('iframe[name="preview-frame"]').getByRole('button', { name: 'JUGAR YA' }).click();
  await page.frameLocator('iframe[name="preview-frame"]').getByRole('button', { name: 'ACEPTAR' }).click();
  await page.frameLocator('iframe[name="preview-frame"]').locator('canvas').click({
    position: {
      x: 121,
      y: 508
    }
  });
  await page.frameLocator('iframe[name="preview-frame"]').locator('canvas').click({
    position: {
      x: 130,
      y: 347
    }
  });
  await page.frameLocator('iframe[name="preview-frame"]').locator('canvas').click({
    position: {
      x: 219,
      y: 357
    }
  });
});