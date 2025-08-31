import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configure for GitHub Pages project site: https://smart-programmer.github.io/istaqrar-home/
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
  ],
  site: 'https://smart-programmer.github.io',
  base: '/istaqrar-home',
});
