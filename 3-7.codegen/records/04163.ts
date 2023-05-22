import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2019.lenta.ru/');
  await page.getByText('Начать', { exact: true }).click();
  await page.locator('section:nth-child(4) > .event > .event__wrap > .event__illn > .event__illn__wrap').click();
  await page.locator('section').filter({ hasText: '0Amazon стала самой дорогой компанией на планетеКрупнейший мировой интернет-рете' }).getByRole('button', { name: 'Подробнее' }).click();
  await page.locator('section').filter({ hasText: '0Amazon стала самой дорогой компанией на планетеКрупнейший мировой интернет-рете' }).getByRole('button', { name: 'Close' }).click();
  await page.locator('section').filter({ hasText: '0Amazon стала самой дорогой компанией на планетеКрупнейший мировой интернет-рете' }).getByRole('button', { name: 'Close' }).click();
  await page.locator('section:nth-child(4) > .event > .event__arrows-wrap > .event__arrow').click();
});