import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ include: /src\/.*\.js$/ })],
  oxc: {
    include: /src\/.*\.[jt]sx?(?:\?.*)?$/,
    exclude: /node_modules/,
    lang: 'jsx',
    jsx: {
      runtime: 'automatic',
    },
  },
  build: {
    outDir: 'build',
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
