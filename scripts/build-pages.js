const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');
const routes = [
  { path: 'about' },
  { path: 'privacy' },
  { path: 'projects' },
  {
    path: 'projects/benipin',
    title: 'BeniPin | Peiyuan Qi',
    description: 'A privacy-first iOS app for organizing U.S. credit-card benefits and earning rates.',
    type: 'product',
  },
  {
    path: 'projects/benipin/privacy',
    title: 'BeniPin Privacy Policy | Peiyuan Qi',
    description: 'BeniPin privacy policy covering local app state, catalog updates, and data boundaries.',
    type: 'article',
  },
  {
    path: 'projects/benipin/support',
    title: 'BeniPin Support | Peiyuan Qi',
    description: 'BeniPin setup help, troubleshooting, safe bug reporting, and support contact details.',
    type: 'article',
  },
];

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const renderRouteHtml = (html, route) => {
  const canonicalUrl = `https://peiyuanqi.me/${route.path}/`;
  let rendered = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${canonicalUrl}">`,
  );

  if (!route.title) {
    return rendered;
  }

  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const image = 'https://peiyuanqi.me/images/projects/beni-pin.png';
  const metadata = [
    `    <title>${title}</title>`,
    `    <meta name="description" content="${description}">`,
    `    <meta property="og:title" content="${title}">`,
    `    <meta property="og:description" content="${description}">`,
    `    <meta property="og:type" content="${route.type}">`,
    `    <meta property="og:url" content="${canonicalUrl}">`,
    `    <meta property="og:image" content="${image}">`,
    '    <meta property="og:site_name" content="Peiyuan Qi">',
    '    <meta name="twitter:card" content="summary_large_image">',
    `    <meta name="twitter:title" content="${title}">`,
    `    <meta name="twitter:description" content="${description}">`,
    `    <meta name="twitter:image" content="${image}">`,
  ].join('\n');

  rendered = rendered.replace('</head>', `${metadata}\n</head>`);
  return rendered;
};

fs.copyFileSync(indexPath, path.join(buildDir, '404.html'));

routes.forEach((route) => {
  const routeDir = path.join(buildDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(
    path.join(routeDir, 'index.html'),
    renderRouteHtml(fs.readFileSync(indexPath, 'utf8'), route),
  );
});
