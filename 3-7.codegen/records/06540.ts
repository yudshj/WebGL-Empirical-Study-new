import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://centroclinicoaveiro.pt/sars-cov-2-testes-covid-19/');
});