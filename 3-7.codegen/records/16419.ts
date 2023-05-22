import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://store.flyaerodyne.com/en/canopy-configurator/#1687');
  await page.locator('#checktext-cell').click();
  await page.locator('#checktext-group').click();
  await page.locator('#checktext-full-top').click();
  await page.locator('#checktext-panel').click();
  await page.locator('#button-slider').click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.locator('#checktext-cell').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.locator('#checktext-panel').click();
  await page.locator('#checktext-full-top').click();
  await page.getByRole('heading', { name: 'Slider:' }).click();
  await page.locator('#button-slider').dblclick();
  await page.getByRole('button', { name: 'Open' }).dblclick();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.locator('#config_menu div').filter({ hasText: 'CloseOpen' }).click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click({
    button: 'right'
  });
  await page.getByText('Please wait... 000/000 Color by: Cell Group All Panel Slider: SHARE DESIGN Close').click();
  await page.locator('#button-slider').click();
});