const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');
const routes = ['about', 'projects'];

fs.copyFileSync(indexPath, path.join(buildDir, '404.html'));

routes.forEach((route) => {
  const routeDir = path.join(buildDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
});
