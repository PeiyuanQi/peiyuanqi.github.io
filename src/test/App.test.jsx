// jest-dom adds custom matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Index from '../pages/Index';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import Stats from '../pages/Stats';

const getDescriptionMeta = () => document.querySelector('meta[name="description"]');

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
  return render(ui, { wrapper: BrowserRouter });
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

const checkPageComponent = async (page) => {
  test(`Renders ${page.route} Component`, () => {
    renderWithRouter(<page.component />, { route: page.route });
    const linkElement = screen.getByTestId('heading');
    expect(linkElement).toHaveTextContent(page.heading);
  });
};

pages.forEach((page) => checkPageComponent(page));
