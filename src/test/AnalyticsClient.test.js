import { beforeEach, expect, test } from 'vitest';

import { clearAnalyticsCookies, disableAnalytics } from '../privacy/analyticsClient';

beforeEach(() => {
  document.cookie = '_ga=test-client; Path=/';
  document.cookie = '_ga_TEST=test-session; Path=/';
  document.cookie = 'essential-preference=kept; Path=/';
});

test('removes Analytics cookies without clearing unrelated preferences', () => {
  clearAnalyticsCookies();

  expect(document.cookie).not.toContain('_ga=');
  expect(document.cookie).not.toContain('_ga_TEST=');
  expect(document.cookie).toContain('essential-preference=kept');
});

test('sets the Google Analytics disable flag', () => {
  disableAnalytics('G-TEST');

  expect(window['ga-disable-G-TEST']).toBe(true);
});
