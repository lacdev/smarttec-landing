// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import robots from 'astro-robots'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://smarttec.mx',
  output: 'static',

  // Evita duplicados de URL (/, /index.html, /)
  trailingSlash: 'never',

  // URLs limpias (mejor para SEO en landing)
  build: { format: 'file' },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap(),

    robots({
      policy: [{ userAgent: '*', allow: '/' }],
      // Tu output real: sitemap-index.xml → sitemap-0.xml
      sitemap: 'https://smarttec.mx/sitemap-index.xml',
    }),
  ],
})
