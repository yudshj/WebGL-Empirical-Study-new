import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://game-jornada-acolhimento.virtualplanet.tech/');
  await page.locator('#canvas').click({
    position: {
      x: 678,
      y: 376
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 670,
      y: 398
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 296,
      y: 393
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 729,
      y: 430
    }
  });
  await page.getByText('Por favor, rotacione o dispositivo. 100% Só mais um pouquinho... Seu navegador n').press('ArrowRight');
  await page.getByText('Por favor, rotacione o dispositivo. 100% Só mais um pouquinho... Seu navegador n').press('ArrowRight');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
  await page.keyboard.press('w');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
});