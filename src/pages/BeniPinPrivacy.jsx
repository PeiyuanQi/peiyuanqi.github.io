import React, { useState } from 'react';

import BeniPinChrome from '../components/BeniPin/BeniPinChrome';
import Main from '../layouts/Main';
import { privacyCopy } from '../data/benipin';

const BeniPinPrivacy = () => {
  const [language, setLanguage] = useState('en');
  const copy = privacyCopy[language];

  return (
    <Main
      canonicalPath="/projects/benipin/privacy/"
      description="BeniPin privacy policy: local app state, public catalog updates, no bank credentials, analytics, advertising, or tracking."
      fullPage
      image="/images/projects/beni-pin.png"
      title="BeniPin Privacy Policy"
      type="article"
    >
      <BeniPinChrome
        current="privacy"
        language={language}
        onLanguageChange={setLanguage}
      >
        <main className="benipin-document" lang={language}>
          <header className="benipin-document__hero">
            <p className="benipin-kicker">{copy.eyebrow}</p>
            <h1 data-testid="heading">{copy.title}</h1>
            <p>{copy.summary}</p>
            <time dateTime="2026-07-31">{copy.effectiveDate}</time>
          </header>

          <div className="benipin-document__body">
            <article>
              {copy.sections.map((section, index) => (
                <section key={section.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </article>

            <aside className="benipin-contact-card">
              <img src="/images/projects/beni-pin.png" alt="" />
              <p className="benipin-kicker">{copy.contactTitle}</p>
              <p>{copy.contactBody}</p>
              <a href="mailto:mithsul@foxmail.com?subject=BeniPin%20Privacy">
                mithsul@foxmail.com
              </a>
            </aside>
          </div>
        </main>
      </BeniPinChrome>
    </Main>
  );
};

export default BeniPinPrivacy;
