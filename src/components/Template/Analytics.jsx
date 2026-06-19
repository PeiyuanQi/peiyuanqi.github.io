import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || '';
const SHOULD_TRACK = import.meta.env.PROD && GA_TRACKING_ID;

if (SHOULD_TRACK) {
  ReactGA.initialize(GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!SHOULD_TRACK) {
      return;
    }

    ReactGA.set({
      page: pathname,
    });
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);

  return null;
};

export default Analytics;
