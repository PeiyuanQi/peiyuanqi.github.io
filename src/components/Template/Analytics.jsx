import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { ANALYTICS_CONSENT } from '../../privacy/analyticsConsent';
import { usePrivacy } from '../../privacy/PrivacyContext';
import { disableAnalytics, enableAnalytics } from '../../privacy/analyticsClient';

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || '';

const Analytics = ({ production, trackingId }) => {
  const { pathname, search } = useLocation();
  const { analyticsConsent } = usePrivacy();
  const analyticsClient = useRef(null);
  const currentPage = useRef(`${pathname}${search}`);
  const lastTrackedPage = useRef(null);

  currentPage.current = `${pathname}${search}`;

  useEffect(() => {
    if (!production || !trackingId || analyticsConsent !== ANALYTICS_CONSENT.GRANTED) {
      analyticsClient.current = null;
      lastTrackedPage.current = null;
      disableAnalytics(trackingId);
      return undefined;
    }

    let active = true;

    enableAnalytics(trackingId).then((client) => {
      if (!active) {
        return;
      }

      analyticsClient.current = client;
      const page = currentPage.current;
      client.send({ hitType: 'pageview', page, title: document.title });
      lastTrackedPage.current = page;
    });

    return () => {
      active = false;
    };
  }, [analyticsConsent, production, trackingId]);

  useEffect(() => {
    const page = `${pathname}${search}`;

    if (
      analyticsConsent === ANALYTICS_CONSENT.GRANTED
      && analyticsClient.current
      && lastTrackedPage.current !== page
    ) {
      analyticsClient.current.send({ hitType: 'pageview', page, title: document.title });
      lastTrackedPage.current = page;
    }
  }, [analyticsConsent, pathname, search]);

  return null;
};

Analytics.propTypes = {
  production: PropTypes.bool,
  trackingId: PropTypes.string,
};

Analytics.defaultProps = {
  production: import.meta.env.PROD,
  trackingId: GA_TRACKING_ID,
};

export default Analytics;
