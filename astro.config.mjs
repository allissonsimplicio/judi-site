import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://judi.com.br',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  build: {
    // Gerar páginas bonitas sem .html na URL
    format: 'directory',
  },
});
