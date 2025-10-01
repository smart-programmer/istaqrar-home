import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
    sitemap(),
  ],
  // Production site URL for canonical links & sitemap
  site: 'https://istaqrar.sa',
  base: '/',
});
