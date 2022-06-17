import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
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
          <Link to={`${PUBLIC_URL}/Peiyuan_Qi_Resume.pdf`} className="button" target="_blank" download>Download Résumé</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;{' '}
        {new Date().getFullYear()}{' '}
        Peiyuan Qi {' '} <Link to="/">peiyuanqi.me</Link>.
        {' '} <a href="https://github.com/PeiyuanQi/peiyuanqi.github.io" target="_blank" rel="noreferrer">Source Code</a>.
      </p>

    </section>
  </section>
);

export default SideBar;
