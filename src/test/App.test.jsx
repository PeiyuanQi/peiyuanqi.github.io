// jest-dom adds custom matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import About from '../pages/About';
import BeniPin from '../pages/BeniPin';
import BeniPinPrivacy from '../pages/BeniPinPrivacy';
import BeniPinSupport from '../pages/BeniPinSupport';
import Contact from '../pages/Contact';
import Index from '../pages/Index';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import Privacy from '../pages/Privacy';
import Stats from '../pages/Stats';
import { PrivacyProvider } from '../privacy/PrivacyContext';

const getDescriptionMeta = () => document.querySelector('meta[name="description"]');
const getCanonicalLink = () => document.querySelector('link[rel="canonical"]');
const getOpenGraphMeta = (property) => document.querySelector(`meta[property="${property}"]`);

const pages = [
  {
    route: '/',
    heading: 'To Infinity and Beyond.',
    component: Index,
  },
  {
    route: '/about',
    heading: 'About Me',
    component: About,
  },
  {
    route: '/projects',
    heading: 'Projects',
    component: Projects,
  },
  {
    route: '/projects/benipin',
    heading: 'Keep every card benefit in sight.',
    component: BeniPin,
  },
  {
    route: '/projects/benipin/privacy',
    heading: 'Privacy Policy',
    component: BeniPinPrivacy,
  },
  {
    route: '/projects/benipin/support',
    heading: 'Support',
    component: BeniPinSupport,
  },
  {
    route: '/privacy',
    heading: 'Privacy Notice',
    component: Privacy,
  },
  {
    route: '/stats',
    heading: 'Stats',
    component: Stats,
  },
  {
    route: '/contact',
    heading: 'Contact',
    component: Contact,
  },
];

// Adds router to Page context and allows us to navigate to the
// correct page. See:
// https://testing-library.com/docs/example-react-router/#reducing-boilerplate
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <BrowserRouter>
      <PrivacyProvider>{ui}</PrivacyProvider>
    </BrowserRouter>,
  );
};

beforeEach(() => {
  document.title = '';
  getDescriptionMeta()?.remove();
  window.scrollTo = vi.fn();

  vi.stubGlobal('fetch', vi.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      forks: 0,
      open_issues_count: 0,
      pushed_at: '2026-06-19T00:00:00Z',
      stargazers_count: 0,
      subscribers_count: 0,
    }),
  })));
});

afterEach(() => {
  vi.unstubAllGlobals();
});

test('Renders 404 Page Component', () => {
  renderWithRouter(<NotFound />);
  const linkElement = screen.getByText(/Page Not Found/i);
  expect(linkElement).toBeInTheDocument();
});

test('Updates document head for standard pages', () => {
  renderWithRouter(<Projects />, { route: '/projects' });

  expect(document.title).toBe('Projects | Peiyuan Qi');
  expect(getDescriptionMeta()).toHaveAttribute('content', "Learn about Peiyuan Qi's projects.");
});

test('Updates document head for the 404 page', () => {
  renderWithRouter(<NotFound />);

  expect(document.title).toBe('404 Not Found');
  expect(getDescriptionMeta()).toHaveAttribute(
    'content',
    'The content you are looking for cannot be found.',
  );
});

test('Adds App Store-ready metadata to the BeniPin product page', () => {
  renderWithRouter(<BeniPin />, { route: '/projects/benipin' });

  expect(document.title).toBe('BeniPin | Peiyuan Qi');
  expect(getCanonicalLink()).toHaveAttribute(
    'href',
    'https://peiyuanqi.me/projects/benipin/',
  );
  expect(getOpenGraphMeta('og:type')).toHaveAttribute('content', 'product');
  expect(getOpenGraphMeta('og:image')).toHaveAttribute(
    'content',
    'https://peiyuanqi.me/images/projects/beni-pin.png',
  );
});

test('Switches BeniPin pages to Simplified Chinese', () => {
  renderWithRouter(<BeniPin />, { route: '/projects/benipin' });

  fireEvent.click(screen.getByRole('button', { name: '简中' }));

  expect(screen.getByTestId('heading')).toHaveTextContent('让每一项信用卡权益都清晰可见');
});

test('Provides public BeniPin privacy and support contacts', () => {
  renderWithRouter(<BeniPinSupport />, { route: '/projects/benipin/support' });

  expect(screen.getByRole('link', { name: 'Email Support' })).toHaveAttribute(
    'href',
    'mailto:mithsul@foxmail.com?subject=BeniPin%20Support',
  );
  expect(screen.getByText(/Never email sensitive financial information/i)).toBeInTheDocument();
});

test('Renders the BeniPin project entry', () => {
  renderWithRouter(<Projects />, { route: '/projects' });

  expect(screen.getByText('卡益 (BeniPin)')).toBeInTheDocument();
  expect(screen.getByText(/bilingual, privacy-first iOS app/i)).toBeInTheDocument();
});

const checkPageComponent = async (page) => {
  test(`Renders ${page.route} Component`, () => {
    renderWithRouter(<page.component />, { route: page.route });
    const linkElement = screen.getByTestId('heading');
    expect(linkElement).toHaveTextContent(page.heading);
  });
};

pages.forEach((page) => checkPageComponent(page));
