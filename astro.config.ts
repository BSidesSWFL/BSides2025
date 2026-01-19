import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    mode: 'directory',
    imageService: 'passthrough'
  }),
  integrations: [
    tailwind(),
    react()
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
