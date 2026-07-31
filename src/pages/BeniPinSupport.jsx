import React, { useState } from 'react';

import BeniPinChrome from '../components/BeniPin/BeniPinChrome';
import Main from '../layouts/Main';
import { supportCopy } from '../data/benipin';

const BeniPinSupport = () => {
  const [language, setLanguage] = useState('en');
  const copy = supportCopy[language];

  return (
    <Main
      canonicalPath="/projects/benipin/support/"
      description="BeniPin support, setup instructions, catalog troubleshooting, safe bug reporting, platform details, and contact information."
      fullPage
      image="/images/projects/beni-pin.png"
      title="BeniPin Support"
      type="article"
    >
      <BeniPinChrome
        current="support"
        language={language}
        onLanguageChange={setLanguage}
      >
        <main className="benipin-document benipin-support" lang={language}>
          <header className="benipin-document__hero benipin-support__hero">
            <div>
              <p className="benipin-kicker">{copy.eyebrow}</p>
              <h1 data-testid="heading">{copy.title}</h1>
              <p>{copy.summary}</p>
            </div>
            <a
              className="benipin-button benipin-button--primary"
              href="mailto:mithsul@foxmail.com?subject=BeniPin%20Support"
            >
              {copy.contactLabel}
            </a>
          </header>

          <dl className="benipin-support__facts">
            <div><dt>Platform</dt><dd>{copy.platform}</dd></div>
            <div><dt>Languages / 语言</dt><dd>{copy.languages}</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:mithsul@foxmail.com">mithsul@foxmail.com</a></dd></div>
          </dl>

          <section className="benipin-support__section">
            <p className="benipin-kicker">01 · {copy.quickStartTitle}</p>
            <ol className="benipin-support__steps">
              {copy.steps.map(([title, body], index) => (
                <li key={title}>
                  <span>{index + 1}</span>
                  <div><h2>{title}</h2><p>{body}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="benipin-support__callout">
            <div className="benipin-support__wallet-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div><h2>{copy.walletTitle}</h2><p>{copy.walletBody}</p></div>
          </section>

          <section className="benipin-support__section">
            <p className="benipin-kicker">02 · {copy.troubleshootingTitle}</p>
            <div className="benipin-support__troubleshooting">
              {copy.troubleshooting.map((item) => (
                <article key={item.title}><h2>{item.title}</h2><p>{item.body}</p></article>
              ))}
            </div>
          </section>

          <section className="benipin-support__report">
            <div>
              <p className="benipin-kicker">03 · {copy.bugTitle}</p>
              <h2>{copy.bugIntro}</h2>
              <ul>{copy.bugItems.map((item) => <li key={item}>{item}</li>)}</ul>
              <p>{copy.contactNote}</p>
            </div>
            <div className="benipin-support__warning">
              <h2>{copy.safetyTitle}</h2>
              <p>{copy.safetyBody}</p>
            </div>
          </section>

          <aside className="benipin-source-note">
            <span aria-hidden="true">!</span>
            <div><strong>{copy.boundaryTitle}</strong><p>{copy.boundaryBody}</p></div>
          </aside>
        </main>
      </BeniPinChrome>
    </Main>
  );
};

export default BeniPinSupport;
