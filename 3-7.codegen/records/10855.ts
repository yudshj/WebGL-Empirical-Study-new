import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://jellymar.io/');
  await page.locator('canvas').click({
    position: {
      x: 271,
      y: 485
    }
  });
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowLeft');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowUp');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowRight');
  await page.getByText('Jelly Mario does not work on mobile, sorry :( Loading 100% Sound #jellymario Mad').press('ArrowDown');
});