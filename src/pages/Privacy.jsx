import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { usePrivacy } from '../privacy/PrivacyContext';

const Privacy = () => {
  const { openPreferences } = usePrivacy();

  return (
    <Main
      title="Privacy"
      description="Privacy information and analytics choices for peiyuanqi.me."
    >
      <article className="post privacy-notice">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/privacy">Privacy Notice</Link></h2>
            <p>Last updated July 12, 2026</p>
          </div>
        </header>

        <p>
          This personal website uses optional Google Analytics only after you choose to
          accept analytics. The site remains fully available when analytics is off.
        </p>

        <h3>Information and purpose</h3>
        <p>
          When enabled, Google Analytics may process pages viewed, visit timing, referrer,
          browser and device information, and an approximate geographic region derived from
          network information. The purpose is to understand aggregate traffic and improve the
          site. This site does not intentionally send names, email addresses, or other direct
          identifiers to Google Analytics, and does not use analytics for advertising.
        </p>

        <h3>Consent and storage</h3>
        <p>
          Consent is the basis for optional analytics processing. Before consent, the Google
          Analytics library is not loaded and no analytics request is sent. Your choice is
          stored in your browser&apos;s local storage under
          {' '}<code>peiyuanqi-analytics-consent-v1</code> so the site can remember it.
        </p>

        <h3>Google and retention</h3>
        <p>
          Google may process analytics information in the United States and other countries.
          Analytics information is kept only for as long as reasonably needed to understand
          aggregate site usage, using the retention controls available in the Google Analytics
          property. Google&apos;s own handling is described in its
          {' '}<a href="https://policies.google.com/privacy">privacy policy</a> and
          {' '}<a href="https://business.safety.google/privacy/">business data safeguards</a>.
        </p>

        <h3>Your choices</h3>
        <p>
          You can reject or withdraw analytics without losing access to the site. Withdrawing
          disables future measurement and removes accessible Google Analytics cookies from this
          domain. The site also treats an active Global Privacy Control browser signal as a
          direction to keep analytics off.
        </p>
        <p>
          <button type="button" className="button" onClick={openPreferences}>
            Open privacy settings
          </button>
        </p>

        <h3>California privacy</h3>
        <p>
          This site does not intentionally sell personal information or use analytics data for
          cross-context behavioral advertising. Global Privacy Control signals are honored as
          described above.
        </p>

        <h3>Contact</h3>
        <p>
          Questions or requests about this notice can be sent to
          {' '}<a href="mailto:peiyuanqi@gmail.com">peiyuanqi@gmail.com</a>.
        </p>
      </article>
    </Main>
  );
};

export default Privacy;
