import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.freewebarcade.com/game/escape-from-the-mysterious-gallery/');
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 414,
      y: 335
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 531,
      y: 367
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 873,
      y: 415
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 873,
      y: 415
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 443,
      y: 320
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 445,
      y: 370
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 460,
      y: 397
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 333,
      y: 277
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 494,
      y: 82
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 488,
      y: 85
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 434,
      y: 145
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 550,
      y: 145
    }
  });
  await page.frameLocator('internal:role=cell[name="Flash game not working or \'No Longer Supported\'? Fear not! You can still enjoy flash games by downloading the Flash Player Chrome Extension. Simply add it to Chrome, enable it, and all Flash games will work for you! Escape from the Mysterious Gallery"i] >> iframe').locator('#unity-canvas').click({
    position: {
      x: 486,
      y: 410
    }
  });
});