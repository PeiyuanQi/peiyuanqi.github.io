export const ANALYTICS_CONSENT = Object.freeze({
  UNKNOWN: 'unknown',
  GRANTED: 'granted',
  DENIED: 'denied',
});

export const ANALYTICS_CONSENT_STORAGE_KEY = 'peiyuanqi-analytics-consent-v1';

export const hasGlobalPrivacyControl = () => (
  typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true
);

export const readAnalyticsConsent = () => {
  if (hasGlobalPrivacyControl()) {
    return ANALYTICS_CONSENT.DENIED;
  }

  try {
    const storedConsent = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);

    if (
      storedConsent === ANALYTICS_CONSENT.GRANTED
      || storedConsent === ANALYTICS_CONSENT.DENIED
    ) {
      return storedConsent;
    }
  } catch {
    // Consent still works for this page when storage is unavailable.
  }

  return ANALYTICS_CONSENT.UNKNOWN;
};

export const storeAnalyticsConsent = (consent) => {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  } catch {
    // Keep the in-memory choice when storage is unavailable.
  }
};
