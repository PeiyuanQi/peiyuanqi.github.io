let analyticsClientPromise;
let initializedTrackingId;

const getCookieDomains = () => {
  if (typeof window === 'undefined') {
    return [''];
  }

  const { hostname } = window.location;
  const parts = hostname.split('.');
  const domains = ['', hostname, `.${hostname}`];

  if (parts.length > 1) {
    domains.push(`.${parts.slice(-2).join('.')}`);
  }

  return [...new Set(domains)];
};

export const clearAnalyticsCookies = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => /^_ga(?:_|$)/.test(name));

  cookieNames.forEach((name) => {
    getCookieDomains().forEach((domain) => {
      const domainAttribute = domain ? `; Domain=${domain}` : '';
      document.cookie = `${name}=; Max-Age=0; Path=/${domainAttribute}; SameSite=Lax`;
    });
  });
};

export const disableAnalytics = (trackingId) => {
  if (typeof window !== 'undefined' && trackingId) {
    window[`ga-disable-${trackingId}`] = true;
  }

  clearAnalyticsCookies();
};

export const enableAnalytics = async (trackingId) => {
  if (!analyticsClientPromise) {
    analyticsClientPromise = import('react-ga4').then((module) => module.default);
  }

  const analyticsClient = await analyticsClientPromise;

  if (typeof window !== 'undefined') {
    window[`ga-disable-${trackingId}`] = false;
  }

  if (initializedTrackingId !== trackingId) {
    analyticsClient.initialize(trackingId);
    initializedTrackingId = trackingId;
  }

  return analyticsClient;
};
