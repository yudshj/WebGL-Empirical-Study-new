import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://thegreytales.net/en/');
  await page.locator('div').filter({ hasText: 'Navigate stories by dragging, scrolling or using your arrow keys.' }).nth(2).click();
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.locator('svg:nth-child(4)').click();
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR The Grey Tales Loa').press('ArrowRight');
  await page.locator('div').filter({ hasText: 'Navigate stories by dragging, scrolling or using your arrow keys.' }).nth(2).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('.Home-drag').dragTo(page.locator('.DragSlider-rail-end'));
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR mozambique Drag to').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR kenya mozambique D').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR kenya mozambique D').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR kenya mozambique D').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR kenya mozambique D').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR kenya mozambique D').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR kenya mozambique D').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR kenya mozambique D').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR sri lanka kenya Dr').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR sri lanka kenya Dr').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR sri lanka kenya Dr').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR sri lanka kenya Dr').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR sri lanka kenya Dr').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR sri lanka kenya Dr').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR thailand sri lanka').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR thailand sri lanka').press('ArrowRight');
  await page.getByText('The Grey Tales Homepage About Wallpapers Sound On Off EN | FR thailand sri lanka').press('ArrowRight');
});