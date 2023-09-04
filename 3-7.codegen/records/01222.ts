import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lokano.az/');
  await page.locator('rect').nth(1).click();
  await page.getByText('Mühəndis Taxta DöşəməKovrolinLinolum və PVC döşəmə Mühəndis Taxta Döşəmə Çoxqatl').click();
  await page.getByText('Mühəndis Taxta DöşəməKovrolinLinolum və PVC döşəmə Mühəndis Taxta Döşəmə Çoxqatl').click();
  await page.getByText('Mühəndis Taxta DöşəməKovrolinLinolum və PVC döşəmə Mühəndis Taxta Döşəmə Çoxqatl').click();
});