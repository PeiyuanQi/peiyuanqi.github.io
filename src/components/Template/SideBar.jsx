import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import { usePrivacy } from '../../privacy/PrivacyContext';

const SideBar = () => {
  const { openPreferences } = usePrivacy();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src="/images/me.jpg" alt="" />
        </Link>
        <header>
          <h2>Peiyuan Qi</h2>
          <h2>戚培源</h2>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>Hi, I&apos;m Peiyuan Qi.
        </p>
        <ul className="actions">
          <li>
            <Link to="/Peiyuan_Qi_Resume.pdf" className="button" target="_blank" download>Download Résumé</Link>
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy;{' '}
          {new Date().getFullYear()}{' '}
          Peiyuan Qi {' '} <Link to="/">peiyuanqi.me</Link>.
          {' '} <Link to="/privacy">Privacy</Link>.
          {' '}
          <button
            type="button"
            className="privacy-settings-link"
            onClick={openPreferences}
            aria-controls="privacy-consent"
          >
            Privacy Settings
          </button>
          {'. '}
          <a href="https://github.com/PeiyuanQi/peiyuanqi.github.io" target="_blank" rel="noreferrer">Source Code</a>.
        </p>

      </section>
    </section>
  );
};

export default SideBar;
