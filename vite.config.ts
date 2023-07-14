import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    eslint(),
    stylelint({
      exclude: ['node_modules', 'dist'],
    }),
  ],
});
