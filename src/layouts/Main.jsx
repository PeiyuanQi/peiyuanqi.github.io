import React from 'react';
import PropTypes from 'prop-types';

import DocumentHead from '../components/Template/DocumentHead';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <>
    <ScrollToTop />
    <DocumentHead
      canonicalPath={props.canonicalPath}
      description={props.description}
      image={props.image}
      title={props.title}
      type={props.type}
    />
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  canonicalPath: PropTypes.string,
  description: PropTypes.string,
  fullPage: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  canonicalPath: null,
  description: "Peiyuan's Personal Website.",
  fullPage: false,
  image: '/images/me.jpg',
  title: null,
  type: 'website',
};

export default Main;
