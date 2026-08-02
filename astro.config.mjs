import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.finalmileproviders.com',
  // Static output — deploys to any static host (Netlify, Cloudflare Pages, etc.)
  build: { format: 'directory' }
});
