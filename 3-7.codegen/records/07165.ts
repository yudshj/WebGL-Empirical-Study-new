import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://covid-19-newfoundland-and-labrador-gnl.hub.arcgis.com/');
  await page.getByRole('link', { name: 'Go To New Site' }).click();
  await page.frameLocator('[data-testid="embedSafe"]').getByRole('button').filter({ hasText: 'JavaScript chart by amCharts 3.21.15Jul2023Date05001kCases' }).click();
  await page.frameLocator('[data-testid="embedSafe"]').getByRole('button').filter({ hasText: 'JavaScript chart by amCharts 3.21.15Jul2023Date05001kCases' }).click();
  await page.frameLocator('[data-testid="embedSafe"]').getByRole('button').filter({ hasText: 'JavaScript chart by amCharts 3.21.15Jul2023Date05001kCases' }).click();
  await page.frameLocator('[data-testid="embedSafe"]').getByRole('button', { name: '70-79:55.8%' }).click();
  await page.frameLocator('[data-testid="embedSafe"]').getByRole('button', { name: 'Eastern Health Authority:9' }).click();
  await page.frameLocator('[data-testid="embedSafe"]').getByRole('button').filter({ hasText: 'JavaScript chart by amCharts 3.21.15981771158Central Health AuthorityEastern Hea' }).click();
  await page.frameLocator('[data-testid="embedSafe"]').getByRole('button', { name: 'Western Health Authority:58' }).click();
  await page.frameLocator('[data-testid="embedSafe"]').getByRole('button', { name: 'Total Deaths by Area Total Deaths by Age' }).getByRole('button', { name: 'Total Deaths by Age' }).getByRole('button', { name: 'Total Deaths by Age', exact: true }).filter({ hasText: 'Total Deaths by Age' }).click();
});