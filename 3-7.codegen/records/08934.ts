import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://foe-event-set-builder.github.io/');
  await page.getByText('✔️ Add').click();
  await page.locator('canvas').click({
    button: 'right',
    position: {
      x: 539,
      y: 222
    }
  });
  await page.locator('canvas').click({
    button: 'right',
    position: {
      x: 935,
      y: 58
    }
  });
  await page.getByRole('listitem').filter({ hasText: /^BuildingSakuraRockEmperorsEntranceZenZoneNishikigoiPondGongOfWisdom$/ }).getByRole('combobox').selectOption('1');
  await page.getByText('✔️ Add').click();
  await page.getByRole('listitem').filter({ hasText: /^BuildingSakuraRockEmperorsEntranceZenZoneNishikigoiPondGongOfWisdom$/ }).getByRole('combobox').selectOption('2');
  await page.getByText('✔️ Add').click();
  await page.locator('div').filter({ hasText: /^12$/ }).click();
  await page.locator('div').filter({ hasText: /^SakuraRockEmperorsEntranceZenZoneNishikigoiPondGongOfWisdom$/ }).click();
  await page.getByRole('listitem').filter({ hasText: /^BuildingSakuraRockEmperorsEntranceZenZoneNishikigoiPondGongOfWisdom$/ }).getByRole('combobox').selectOption('3');
  await page.getByText('✔️ Add').click();
});