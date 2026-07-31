import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import Analytics from './components/Template/Analytics';
import ConsentBanner from './components/Privacy/ConsentBanner';
import { PrivacyProvider } from './privacy/PrivacyContext';
import './static/css/main.scss'; // All of our styles

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
// const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const BeniPin = lazy(() => import('./pages/BeniPin'));
const BeniPinPrivacy = lazy(() => import('./pages/BeniPinPrivacy'));
const BeniPinSupport = lazy(() => import('./pages/BeniPinSupport'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Projects = lazy(() => import('./pages/Projects'));
// const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter>
    <PrivacyProvider>
      <Analytics />
      <Suspense fallback={<Main />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route exact path="/projects/benipin/privacy" component={BeniPinPrivacy} />
          <Route exact path="/projects/benipin/support" component={BeniPinSupport} />
          <Route exact path="/projects/benipin" component={BeniPin} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/privacy" component={Privacy} />
          {/* <Route path="/stats" component={Stats} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          <Route component={NotFound} status={404} />
        </Switch>
      </Suspense>
      <ConsentBanner />
    </PrivacyProvider>
  </BrowserRouter>
);

export default App;
