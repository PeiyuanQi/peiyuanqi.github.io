import React from 'react';
import { Link } from 'react-router-dom';

import { ANALYTICS_CONSENT } from '../../privacy/analyticsConsent';
import { usePrivacy } from '../../privacy/PrivacyContext';

const ConsentBanner = () => {
  const {
    analyticsConsent,
    closePreferences,
    denyAnalytics,
    globalPrivacyControl,
    grantAnalytics,
    preferencesOpen,
  } = usePrivacy();

  if (!preferencesOpen) {
    return null;
  }

  const hasChoice = analyticsConsent !== ANALYTICS_CONSENT.UNKNOWN;
  const analyticsEnabled = analyticsConsent === ANALYTICS_CONSENT.GRANTED;

  let status = 'Analytics is off until you make a choice.';

  if (globalPrivacyControl) {
    status = 'Your browser is sending a Global Privacy Control signal, so analytics is off.';
  } else if (analyticsEnabled) {
    status = 'Analytics is currently on.';
  } else if (hasChoice) {
    status = 'Analytics is currently off.';
  }

  return (
    <section
      className="privacy-consent"
      id="privacy-consent"
      aria-labelledby="privacy-consent-title"
    >
      <div className="privacy-consent__inner">
        <div className="privacy-consent__copy">
          <p className="privacy-consent__eyebrow">Privacy choice</p>
          <h2 id="privacy-consent-title">Optional analytics</h2>
          <p>
            Google Analytics helps measure aggregate site traffic. It does not load unless
            you accept. <Link to="/privacy">Read the privacy notice</Link>.
          </p>
          <p className="privacy-consent__status" aria-live="polite">{status}</p>
        </div>

        {globalPrivacyControl ? (
          <div className="privacy-consent__actions">
            <button type="button" onClick={closePreferences}>Keep analytics off</button>
          </div>
        ) : (
          <div className="privacy-consent__actions">
            <button type="button" onClick={denyAnalytics}>
              {analyticsEnabled ? 'Turn analytics off' : 'Reject analytics'}
            </button>
            <button type="button" onClick={grantAnalytics}>
              {analyticsEnabled ? 'Keep analytics on' : 'Accept analytics'}
            </button>
          </div>
        )}

        {hasChoice && (
          <button
            type="button"
            className="privacy-consent__close"
            onClick={closePreferences}
            aria-label="Close privacy settings"
            title="Close privacy settings"
          >
            &times;
          </button>
        )}
      </div>
    </section>
  );
};

export default ConsentBanner;
