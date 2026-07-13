import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  ANALYTICS_CONSENT,
  hasGlobalPrivacyControl,
  readAnalyticsConsent,
  storeAnalyticsConsent,
} from './analyticsConsent';

const PrivacyContext = createContext(null);

export const PrivacyProvider = ({ children }) => {
  const [globalPrivacyControl] = useState(hasGlobalPrivacyControl);
  const [analyticsConsent, setAnalyticsConsent] = useState(readAnalyticsConsent);
  const [preferencesOpen, setPreferencesOpen] = useState(
    analyticsConsent === ANALYTICS_CONSENT.UNKNOWN,
  );

  useEffect(() => {
    const syncStoredConsent = () => {
      const storedConsent = readAnalyticsConsent();
      setAnalyticsConsent(storedConsent);
      setPreferencesOpen(storedConsent === ANALYTICS_CONSENT.UNKNOWN);
    };

    window.addEventListener('storage', syncStoredConsent);
    return () => window.removeEventListener('storage', syncStoredConsent);
  }, []);

  const closePreferences = useCallback(() => setPreferencesOpen(false), []);
  const openPreferences = useCallback(() => setPreferencesOpen(true), []);

  const denyAnalytics = useCallback(() => {
    storeAnalyticsConsent(ANALYTICS_CONSENT.DENIED);
    setAnalyticsConsent(ANALYTICS_CONSENT.DENIED);
    setPreferencesOpen(false);
  }, []);

  const grantAnalytics = useCallback(() => {
    if (globalPrivacyControl) {
      return;
    }

    storeAnalyticsConsent(ANALYTICS_CONSENT.GRANTED);
    setAnalyticsConsent(ANALYTICS_CONSENT.GRANTED);
    setPreferencesOpen(false);
  }, [globalPrivacyControl]);

  const value = useMemo(() => ({
    analyticsConsent,
    closePreferences,
    denyAnalytics,
    globalPrivacyControl,
    grantAnalytics,
    openPreferences,
    preferencesOpen,
  }), [
    analyticsConsent,
    closePreferences,
    denyAnalytics,
    globalPrivacyControl,
    grantAnalytics,
    openPreferences,
    preferencesOpen,
  ]);

  return (
    <PrivacyContext.Provider value={value}>
      {children}
    </PrivacyContext.Provider>
  );
};

PrivacyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePrivacy = () => {
  const context = useContext(PrivacyContext);

  if (!context) {
    throw new Error('usePrivacy must be used within a PrivacyProvider.');
  }

  return context;
};
