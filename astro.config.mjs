import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // output: 'hybrid',
  // adapter: vercel(),
  integrations: [tailwind(), sitemap(), robotsTxt(), react()],
  site: SITE_URL,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    }
  }
});