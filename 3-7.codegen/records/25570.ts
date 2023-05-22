import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.planet-schule.de/mm/klima-challenge/');
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: 'Abenteuer starten' }).click();
  await page.getByRole('button', { name: 'Sofort ohne Code starten' }).click();
  await page.getByRole('button', { name: '👍' }).click();
  await page.locator('canvas').click({
    position: {
      x: 736,
      y: 286
    }
  });
  await page.getByRole('img', { name: 'susanne-arndt' }).click();
  await page.getByRole('button', { name: 'Station besuchen' }).click();
  await page.getByRole('button', { name: 'Okay, los geht\'s!' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Ich bin dabei!' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Warum?' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Okay' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByText('8°W70°S').click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByText('8°W70°S').click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByText('8°W70°S').click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByText('8°W70°S').click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Losfahren' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Bohren beginnen' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button').nth(1).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Verstanden' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button').nth(1).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button').nth(1).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button').nth(1).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Cool' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Danke :-)' }).click();
  await page.frameLocator('iframe[title="Spiel im iFrame"]').getByRole('button', { name: 'Zur Station' }).click();
  await page.locator('div:nth-child(4) > svg > .c-world-marker__graphic-display > .c-world-marker__graphic-display-hover').first().click();
  await page.goto('https://www.planet-schule.de/mm/klima-challenge/antarktis');
});