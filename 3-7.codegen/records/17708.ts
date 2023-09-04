import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://us.online.babylonhealth.com/');
  await page.goto('https://auth.global2.babylonpartners.com/login?state=hKFo2SBpQXpUWXB0ZDA1eXBOQVhtZkVqZFlreXZhWUNNNW1XT6FupWxvZ2luo3RpZNkgclBIYW9acDd2dkltYTZQQlRCVzcxRW5jZGs5cUwyaGyjY2lk2SBXVkNaZnpDZjJNRHdVajZkVG1CRmp6ekl3UjNnUHF3SA&client=WVCZfzCf2MDwUj6dTmBFjzzIwR3gPqwH&protocol=oauth2&redirect_uri=https%3A%2F%2Fus.online.babylonhealth.com%2Fcallback&response_type=code&xAppName=babylon_us&scope=openid%20offline_access&mode=sign-in&response_mode=query&nonce=QXUwaFRQZmtLT2lfVnpOVjNvYktWOVNTM2tTfnc0Y0lESnNEQS12eVNLZg%3D%3D&code_challenge=y6sJRh_WOsT20qibZJSHaULG7dc_pWark0llbuaXgTc&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjIuMSJ9');
  await page.goto('https://auth.global2.babylonpartners.com/login?state=hKFo2SBpQXpUWXB0ZDA1eXBOQVhtZkVqZFlreXZhWUNNNW1XT6FupWxvZ2luo3RpZNkgclBIYW9acDd2dkltYTZQQlRCVzcxRW5jZGs5cUwyaGyjY2lk2SBXVkNaZnpDZjJNRHdVajZkVG1CRmp6ekl3UjNnUHF3SA&client=WVCZfzCf2MDwUj6dTmBFjzzIwR3gPqwH&protocol=oauth2&redirect_uri=https%3A%2F%2Fus.online.babylonhealth.com%2Fcallback&response_type=code&xAppName=babylon_us&scope=openid%20offline_access&mode=sign-in&response_mode=query&nonce=QXUwaFRQZmtLT2lfVnpOVjNvYktWOVNTM2tTfnc0Y0lESnNEQS12eVNLZg%3D%3D&code_challenge=y6sJRh_WOsT20qibZJSHaULG7dc_pWark0llbuaXgTc&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjIuMSJ9#/');
  await page.goto('https://auth.global2.babylonpartners.com/login?state=hKFo2SBpQXpUWXB0ZDA1eXBOQVhtZkVqZFlreXZhWUNNNW1XT6FupWxvZ2luo3RpZNkgclBIYW9acDd2dkltYTZQQlRCVzcxRW5jZGs5cUwyaGyjY2lk2SBXVkNaZnpDZjJNRHdVajZkVG1CRmp6ekl3UjNnUHF3SA&client=WVCZfzCf2MDwUj6dTmBFjzzIwR3gPqwH&protocol=oauth2&redirect_uri=https%3A%2F%2Fus.online.babylonhealth.com%2Fcallback&response_type=code&xAppName=babylon_us&scope=openid%20offline_access&mode=sign-in&response_mode=query&nonce=QXUwaFRQZmtLT2lfVnpOVjNvYktWOVNTM2tTfnc0Y0lESnNEQS12eVNLZg%3D%3D&code_challenge=y6sJRh_WOsT20qibZJSHaULG7dc_pWark0llbuaXgTc&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjIuMSJ9#/login');
});