import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://geonetwork.pbh.gov.br/');
  await page.goto('http://geonetwork.pbh.gov.br/geonetwork/srv/eng/catalog.search;jsessionid=70DAB44AD52BEA384B6D5AF3BE0860BD.geonetwork1');
  await page.goto('http://geonetwork.pbh.gov.br/geonetwork/srv/eng/catalog.search;jsessionid=70DAB44AD52BEA384B6D5AF3BE0860BD.geonetwork1#/home');
  await page.getByText('Get me out of here').click();
});