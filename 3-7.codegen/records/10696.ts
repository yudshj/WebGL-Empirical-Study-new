import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://isezpan.wkraj.pl/html5/index.php?id=80187');
  await page.getByTitle('Rozpocznij zwiedzanie od:WEJŚCIE / WYJŚCIE').getByRole('img').nth(1).click();
  await page.getByTitle('Kliknij aby przejść do: HISTORIA MUZEUM PRZYRODNICZEGO ISEZ PAN').getByRole('img').nth(1).click();
});