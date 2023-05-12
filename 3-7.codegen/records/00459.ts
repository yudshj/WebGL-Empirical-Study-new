import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://cohtran-toan-don-gian.blogspot.com/');
  await page.frameLocator('#HTML25 iframe').getByText('3D-Functions Plotter | www.mathstools.comExecuteAnalysisToolsHelp Analytic z=f(x').click();
  await page.frameLocator('#HTML25 iframe').getByRole('button', { name: 'I agree' }).click();
  await page.frameLocator('#HTML25 iframe').getByRole('button', { name: 'Plot f(x,y)' }).click();
});