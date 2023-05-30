import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://helloenjoy.itch.io/hellorun');
  await page.getByRole('button', { name: 'Run game' }).click();
  await page.frameLocator('#game_drop').getByText('CREDITSSHARESETTINGSFULL SCREENCLICK TO STARTAN HTML5 GAME BY HELLOENJOY').click();
  await page.frameLocator('#game_drop').getByText('NEW RECORDCREDITSSHARESETTINGSFULL SCREENPRESS SPACE TO STARTAN HTML5 GAME BY HE').click();
});