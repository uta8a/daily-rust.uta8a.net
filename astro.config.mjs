import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://daily-rust.uta8a.net',
  compressHTML: true,
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
    icon(),
  ],
})
