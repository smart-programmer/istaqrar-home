import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
  ],
  // Netlify deployment: serve from site root
  site: 'https://spectacular-maamoul-9b4d2d.netlify.app',
  base: '/',
});
