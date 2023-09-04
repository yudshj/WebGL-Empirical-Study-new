import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://15gunluk.semtkoyhava.com/2021/04/koy-havasi.html');
  await page.frameLocator('#HTML5 iframe >> nth=0').getByText('+').click();
  await page.frameLocator('#HTML5 iframe >> nth=0').getByText('−').click();
  await page.frameLocator('#HTML5 iframe >> nth=0').getByText('−').click();
  await page.frameLocator('#HTML3 iframe').getByRole('link', { name: 'Windy.com', exact: true }).click();
  await page.getByText('3D').click();
  await page.goto('https://www.windy.com/?35.582,139.766,4');
  await page.goto('https://www.windy.com/?35.627,140.033,4');
  await page.goto('https://www.windy.com/?36.922,140.305,4');
  await page.goto('https://www.windy.com/?37.005,140.296,4');
});