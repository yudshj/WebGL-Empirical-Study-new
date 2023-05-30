import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.mymodelrobot.appspot.com/');
  await page.goto('http://www.mymodelrobot.appspot.com/5629499534213120');
  await page.getByRole('button', { name: 'Play' }).click();
  await page.getByRole('button', { name: 'Play' }).click();
  await page.getByRole('listitem').filter({ hasText: /^torso_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^torso_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^torso_joint$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^head_pan_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^head_pan_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^head_pan_joint$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^head_tilt_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^head_tilt_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^head_tilt_joint$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^left_shoulder_forward_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^left_shoulder_forward_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^left_shoulder_forward_joint$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^right_shoulder_forward_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^right_shoulder_forward_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^right_shoulder_forward_joint$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^left_shoulder_up_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^left_shoulder_up_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^left_shoulder_up_joint$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^right_shoulder_up_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^right_shoulder_up_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^right_shoulder_up_joint$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^left_elbow_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^left_elbow_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^left_elbow_joint$/ }).getByRole('textbox').press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^right_elbow_joint$/ }).getByRole('textbox').click();
  await page.getByRole('listitem').filter({ hasText: /^right_elbow_joint$/ }).getByRole('textbox').fill('9');
  await page.getByRole('listitem').filter({ hasText: /^right_elbow_joint$/ }).getByRole('textbox').press('Enter');
});