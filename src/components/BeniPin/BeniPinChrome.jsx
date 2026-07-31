import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const navCopy = {
  en: {
    product: 'Product',
    privacy: 'Privacy',
    support: 'Support',
    projects: 'All Projects',
    status: 'Coming to the App Store',
  },
  'zh-Hans': {
    product: '产品',
    privacy: '隐私',
    support: '支持',
    projects: '全部项目',
    status: '即将登陆 App Store',
  },
};

const BeniPinChrome = ({
  children,
  current,
  language,
  onLanguageChange,
}) => {
  const copy = navCopy[language];

  return (
    <div className="benipin-site">
      <header className="benipin-site__header">
        <Link className="benipin-brand" to="/projects/benipin/">
          <img src="/images/projects/beni-pin.png" alt="BeniPin app icon" />
          <span>
            <strong>BeniPin</strong>
            <small>{copy.status}</small>
          </span>
        </Link>

        <nav className="benipin-nav" aria-label="BeniPin">
          <Link
            aria-current={current === 'product' ? 'page' : undefined}
            to="/projects/benipin/"
          >
            {copy.product}
          </Link>
          <Link
            aria-current={current === 'privacy' ? 'page' : undefined}
            to="/projects/benipin/privacy/"
          >
            {copy.privacy}
          </Link>
          <Link
            aria-current={current === 'support' ? 'page' : undefined}
            to="/projects/benipin/support/"
          >
            {copy.support}
          </Link>
        </nav>

        <div className="benipin-language" role="group" aria-label="Page language">
          <button
            aria-pressed={language === 'en'}
            onClick={() => onLanguageChange('en')}
            type="button"
          >
            EN
          </button>
          <button
            aria-pressed={language === 'zh-Hans'}
            onClick={() => onLanguageChange('zh-Hans')}
            type="button"
          >
            简中
          </button>
        </div>
      </header>

      {children}

      <footer className="benipin-site__footer">
        <p>BeniPin · {copy.status}</p>
        <nav aria-label="BeniPin footer">
          <Link to="/projects/benipin/privacy/">{copy.privacy}</Link>
          <Link to="/projects/benipin/support/">{copy.support}</Link>
          <Link to="/projects">{copy.projects}</Link>
        </nav>
      </footer>
    </div>
  );
};

BeniPinChrome.propTypes = {
  children: PropTypes.node.isRequired,
  current: PropTypes.oneOf(['product', 'privacy', 'support']).isRequired,
  language: PropTypes.oneOf(['en', 'zh-Hans']).isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default BeniPinChrome;
