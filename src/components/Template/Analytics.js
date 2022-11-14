import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const { REACT_APP_GA_TRACKING_ID } = process.env;

ReactGA.initialize(REACT_APP_GA_TRACKING_ID);

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.set({
      page: pathname,
    });
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);

  return null;
};

export default Analytics;
