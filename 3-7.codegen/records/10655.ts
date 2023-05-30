import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://iourpg.com/index.html');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('#unity-canvas').click({
    position: {
      x: 533,
      y: 360
    }
  });
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('a');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('b');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('c');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('d');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('e');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('f');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('g');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('h');

  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('#unity-canvas').click({
    position: {
      x: 585,
      y: 370
    }
  });
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('1');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('2');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('3');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('4');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('5');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('6');

  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('body').press('Enter');
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('#unity-canvas').click({
    position: {
      x: 489,
      y: 462
    }
  });
  await page.frameLocator('internal:text="<param name=\'movie\' value=\'https://d3dpj2e0gpjyc1.cloudfront.net/index.html?test"i').frameLocator('iframe[name="game"]').locator('#unity-canvas').click({
    position: {
      x: 475,
      y: 478
    }
  });
});