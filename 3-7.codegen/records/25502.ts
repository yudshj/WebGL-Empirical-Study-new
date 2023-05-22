import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.photo-canvas.com/estore/design/317?tid=cb1d0198-72e4-43e1-a065-2f0805804e30');
  await page.getByRole('link', { name: 'Mirror wrap Mirror wrap' }).click();
  await page.getByRole('link', { name: 'Satin Bag-73x114cm Printed Satin Bag-73x114cm Printed' }).click();
  await page.getByRole('link', { name: 'Colour Edge Wrap Colour Edge Wrap' }).click();
  await page.getByRole('cell', { name: 'OK Cancel #f99877ff #f26a4fff #ef1c23ff #9b0c11ff #7a0000ff #ffffffff #f4c484ff #f9ac5eff #f4931dff #a5610eff #7c4400ff #ffffffff #fcf99cff #fff466ff #fff200ff #aa9f03ff #7f7f00ff #e5e5e5ff #c4e295ff #a3d66dff #8fbf3dff #518923ff #3d601fff #ccccccff #8bc9a0ff #42b578ff #00a854ff #007039ff #00592bff #b2b2b2ff #7eccc9ff #1dbab2ff #00a595ff #00756dff #005b51ff #999999ff #71cff7ff #00bdedff #00adedff #00769eff #005e87ff #7f7f7fff #7aa9d6ff #448dc4ff #0077b7ff #004982ff #003560ff #666666ff #a58bbaff #855fa8ff #61288cff #440e60ff #290049ff #494949ff #a087bfff #a763aaff #8e2a8eff #630261ff #4f004bff #2d2d2dff #ed9cbbff #ef6ea8ff #ea078bff #7a0047ff #7c0042ff #111111ff #f497a4ff #ef6b81ff #ed125bff #a00040ff #7c0025ff #000000ff' }).getByTitle('#ef1c23ff').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'ico-pencil Design View' }).click();
  await page.getByRole('button', { name: 'Select Images to Upload' }).click();
  await page.getByRole('button', { name: 'Select Images to Upload' }).setInputFiles('1.jpg');
  await page.getByRole('button', { name: 'Select', exact: true }).click();
  await page.getByRole('button', { name: 'Add 1 image to product' }).click();
  await page.getByRole('link', { name: 'ico-save Save Design' }).click();
  await page.locator('#md-saveDesign i').click();
});