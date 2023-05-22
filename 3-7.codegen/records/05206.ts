import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/assisted-melody/cAGcgh18Zi7DqQ');
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Play/Pause' }).click();
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 553,
      y: 211
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 810,
      y: 191
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 575,
      y: 171
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 514,
      y: 188
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 418,
      y: 191
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 838,
      y: 143
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 958,
      y: 150
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 645,
      y: 170
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 536,
      y: 146
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 277,
      y: 173
    }
  });
  await page.frameLocator('iframe').getByRole('button', { name: 'Harmonize' }).click();
  await page.goto('https://artsandculture.google.com/experiment/assisted-melody/cAGcgh18Zi7DqQ?cp=eyJ1cmwiOiJ8MTIwfGJhY2h8b3JnYW4ifQ..');
  await page.goto('https://artsandculture.google.com/experiment/assisted-melody/cAGcgh18Zi7DqQ?cp=eyJ1cmwiOiI2NTAwMTAxLDY0MDEyMDEsNjIwMzkwMSw2MDE1MTAxLDYwMTY1MDEsNjIyMTIwMSw2NDIzMjAxLDY1Mjc0MDEsNjQzMTEwMSw2MDAwMzExLDU5MDM0MTEsNjAwNzYxMSw1OTEzMjExLDU1MTUxMTEsNTcxOTIxMSw1ODI1MjExLDUyMzExMTEsNTcwMDEyMSw1NTAxODIxLDUzMDkyMjEsNTIxMTIyMSw1MzEzMjIxLDUyMTUxMjEsNTIxNjMyMSw1MzE5MjIxLDUyMjExMjEsNTUyMzIyMSw1MjI1MjIxLDQ4Mjc0MjEsNTczMTEyMSw1MzAwMTMxLDUyMDEyMzEsNTMwMzQzMSw1MjA3NDMxLDU1MTE0MzEsMzYxNTEzMSwzNjE2MzMxLDQ1MTkyMzEsNDcyMTIzMSw0NTIzMjMxLDQ4MjUyMzEsNDUyNzIzMSw0NzI5MjMxLDQ1MzExMzEsNTUxNjExMCw2MDE5MTAwLDU1MjExMTAsNTMyMjExMCw1MjIzMTEwLDYyMjUxMDAsNjQyNjEwMCw1NzI3MTEwLDUzMjgxMTAsNDgzMDEyMHwxMjB8YmFjaHxvcmdhbiJ9');
  await page.frameLocator('iframe').getByRole('button', { name: 'Play/Pause' }).click();
});