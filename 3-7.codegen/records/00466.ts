import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://combiendesucres.fr/');
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 150,
      y: 145
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 403,
      y: 290
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 198,
      y: 176
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 182
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 181
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').dblclick({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    clickCount: 4,
    position: {
      x: 376,
      y: 180
    }
  });
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 402,
      y: 294
    }
  });
});