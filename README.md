# Personal Website

[peiyuanqi.me](https://peiyuanqi.me).

[MIT](./LICENSE) licensed. Modified based on [mldangelo.com](https://mldangelo.com/) by MICHAEL D'ANGELO.
Original template based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).

Master branch contains the deprecated version of peiyuanqi.me.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v14 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
nvm install # this is optional - make sure you're running >= node 14 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

To deploy to GitHub Pages, run:

```bash
npm run predeploy
npm run deploy
```

The `predeploy` script will:
1. Remove the existing `build/` folder
2. Build the React application to create a fresh `build/` folder

The `deploy` script uses `gh-pages` to deploy the build folder to GitHub Pages.

### Static Export

To generate a static export without deploying, run:

```bash
npm run build
```

This creates a production build in the `build/` folder that can be deployed to any static hosting service.
