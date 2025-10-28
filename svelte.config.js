import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { markdocPreprocess } from "markdoc-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    vitePreprocess(),
    markdocPreprocess({
      headingIds: true
    })
  ],
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true
    }),
    inlineStyleThreshold: Infinity,
    paths: {
      relative: false
    }
  }
}

export default config
