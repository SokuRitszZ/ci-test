import { defineConfig } from 'vite';
import viteEslint from 'vite-plugin-eslint';
import vitePluginStylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    viteEslint(),
    vitePluginStylelint({
      exclude: ['node_modules', 'dist'],
    }),
  ],
});
