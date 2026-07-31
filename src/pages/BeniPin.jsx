import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BeniPinChrome from '../components/BeniPin/BeniPinChrome';
import Main from '../layouts/Main';
import { productCopy } from '../data/benipin';

const BeniPin = () => {
  const [language, setLanguage] = useState('en');
  const copy = productCopy[language];

  return (
    <Main
      canonicalPath="/projects/benipin/"
      description="BeniPin is a privacy-first iOS app for organizing U.S. credit-card benefits, earning rates, and recurring usage."
      fullPage
      image="/images/projects/beni-pin.png"
      title="BeniPin"
      type="product"
    >
      <BeniPinChrome
        current="product"
        language={language}
        onLanguageChange={setLanguage}
      >
        <main lang={language}>
          <section className="benipin-hero">
            <div className="benipin-hero__copy">
              <p className="benipin-kicker">{copy.eyebrow}</p>
              <p className="benipin-status"><span aria-hidden="true" />{copy.status}</p>
              <h1 data-testid="heading">{copy.title}</h1>
              <p className="benipin-lede">{copy.intro}</p>
              <div className="benipin-actions">
                <Link className="benipin-button benipin-button--primary" to="/projects/benipin/privacy/">
                  {copy.primaryAction}
                </Link>
                <Link className="benipin-button" to="/projects/benipin/support/">
                  {copy.secondaryAction}
                </Link>
              </div>
            </div>

            <div className="benipin-product-visual" aria-label={copy.visualLabel}>
              <div className="benipin-product-visual__glow" />
              <img
                className="benipin-product-visual__icon"
                src="/images/projects/beni-pin.png"
                alt=""
              />
              <div className="benipin-phone benipin-phone--benefits">
                <div className="benipin-phone__topline">
                  <strong>{copy.visualBenefits}</strong>
                  <span>2 / 3</span>
                </div>
                <div className="benipin-phone__search" aria-hidden="true" />
                <div className="benipin-phone__row">
                  <span className="benipin-phone__mark benipin-phone__mark--done">✓</span>
                  <span>
                    <strong>{copy.visualMonthly}</strong>
                    <small>$10 · {copy.visualUsed}</small>
                  </span>
                </div>
                <div className="benipin-phone__row">
                  <span className="benipin-phone__mark" />
                  <span>
                    <strong>{copy.visualTravel}</strong>
                    <small>$300 · 2026</small>
                  </span>
                </div>
              </div>
              <div className="benipin-phone benipin-phone--earning">
                <div className="benipin-phone__topline">
                  <strong>{copy.visualEarning}</strong>
                  <span>4×</span>
                </div>
                <div className="benipin-rate">
                  <span>{copy.visualDining}</span><strong>4×</strong>
                </div>
                <div className="benipin-rate"><span>{copy.visualTravelRate}</span><strong>3×</strong></div>
                <div className="benipin-rate"><span>{copy.visualOther}</span><strong>1×</strong></div>
                <small>{copy.visualPointValue}</small>
              </div>
            </div>
          </section>

          <dl className="benipin-facts">
            {copy.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <section className="benipin-section">
            <div className="benipin-section__intro">
              <p className="benipin-kicker">{copy.sectionEyebrow}</p>
              <h2>{copy.sectionTitle}</h2>
            </div>
            <div className="benipin-feature-grid">
              {copy.features.map((feature) => (
                <article key={feature.number}>
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="benipin-section benipin-workflow">
            <div className="benipin-section__intro">
              <p className="benipin-kicker">{copy.workflowEyebrow}</p>
              <h2>{copy.workflowTitle}</h2>
            </div>
            <ol>
              {copy.workflow.map(([title, body], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="benipin-privacy-block">
            <div>
              <p className="benipin-kicker">{copy.privacyEyebrow}</p>
              <h2>{copy.privacyTitle}</h2>
              <p>{copy.privacyBody}</p>
              <Link className="benipin-text-link" to="/projects/benipin/privacy/">
                {copy.primaryAction} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul>
              {copy.privacyItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <aside className="benipin-source-note">
            <span aria-hidden="true">i</span>
            <p>{copy.sourceNote}</p>
          </aside>
        </main>
      </BeniPinChrome>
    </Main>
  );
};

export default BeniPin;
