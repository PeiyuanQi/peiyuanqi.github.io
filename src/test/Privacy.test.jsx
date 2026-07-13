import '@testing-library/jest-dom/vitest';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import {
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ConsentBanner from '../components/Privacy/ConsentBanner';
import Analytics from '../components/Template/Analytics';
import {
  ANALYTICS_CONSENT,
  ANALYTICS_CONSENT_STORAGE_KEY,
} from '../privacy/analyticsConsent';
import { PrivacyProvider, usePrivacy } from '../privacy/PrivacyContext';
import { disableAnalytics, enableAnalytics } from '../privacy/analyticsClient';

vi.mock('../privacy/analyticsClient', () => ({
  disableAnalytics: vi.fn(),
  enableAnalytics: vi.fn(),
}));

const SettingsButton = () => {
  const { openPreferences } = usePrivacy();
  return <button type="button" onClick={openPreferences}>Privacy settings</button>;
};

const renderPrivacyControls = ({ analytics = false } = {}) => render(
  <MemoryRouter>
    <PrivacyProvider>
      {analytics && <Analytics production trackingId="G-TEST" />}
      <SettingsButton />
      <ConsentBanner />
    </PrivacyProvider>
  </MemoryRouter>,
);

beforeEach(() => {
  window.localStorage.clear();
  vi.clearAllMocks();
  Object.defineProperty(navigator, 'globalPrivacyControl', {
    configurable: true,
    value: false,
  });
});
describe('analytics privacy controls', () => {
  test('requires an explicit choice and remembers acceptance', () => {
    renderPrivacyControls();

    expect(screen.getByRole('heading', { name: 'Optional analytics' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Accept analytics' }));

    expect(screen.queryByRole('heading', { name: 'Optional analytics' })).not.toBeInTheDocument();
    expect(window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY))
      .toBe(ANALYTICS_CONSENT.GRANTED);
  });

  test('allows previously granted consent to be withdrawn', () => {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, ANALYTICS_CONSENT.GRANTED);
    renderPrivacyControls();

    fireEvent.click(screen.getByRole('button', { name: 'Privacy settings' }));
    expect(screen.getByText('Analytics is currently on.')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Turn analytics off' }));

    expect(window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY))
      .toBe(ANALYTICS_CONSENT.DENIED);
  });

  test('honors Global Privacy Control over a stored grant', () => {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, ANALYTICS_CONSENT.GRANTED);
    Object.defineProperty(navigator, 'globalPrivacyControl', {
      configurable: true,
      value: true,
    });

    renderPrivacyControls();
    fireEvent.click(screen.getByRole('button', { name: 'Privacy settings' }));

    expect(screen.getByText(/Global Privacy Control signal/)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Accept analytics' })).not.toBeInTheDocument();
  });

  test('does not load Analytics before consent and disables it after withdrawal', async () => {
    const send = vi.fn();
    enableAnalytics.mockResolvedValue({ send });
    renderPrivacyControls({ analytics: true });

    expect(enableAnalytics).not.toHaveBeenCalled();
    expect(disableAnalytics).toHaveBeenCalledWith('G-TEST');

    fireEvent.click(screen.getByRole('button', { name: 'Accept analytics' }));

    await waitFor(() => expect(enableAnalytics).toHaveBeenCalledWith('G-TEST'));
    expect(send).toHaveBeenCalledWith(expect.objectContaining({
      hitType: 'pageview',
      page: '/',
    }));

    fireEvent.click(screen.getByRole('button', { name: 'Privacy settings' }));
    fireEvent.click(screen.getByRole('button', { name: 'Turn analytics off' }));

    await waitFor(() => expect(disableAnalytics).toHaveBeenCalledTimes(2));
  });
});
