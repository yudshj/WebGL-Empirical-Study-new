import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://cm.versiongeek.com/cartaLCDA.html');
  await page.locator('#OneBook3d_227662_stage_container').click();
  await page.getByText('1 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.locator('#OneBook3d_227662_stage_container').click();
  await page.locator('#OneBook3d_227662_stage_container').click();
  await page.locator('#OneBook3d_227662_stage').click();
  await page.locator('#OneBook3d_227662_stage_container').click({
    clickCount: 11
  });
  await page.locator('#OneBook3d_227662_stage_container').click();
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
});