import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

import { mdsvex, escapeSvelte } from "mdsvex"
import { createHighlighter } from "shiki"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"

import { join, dirname } from "path"
import { fileURLToPath } from "url"

function absolutePath(path) {
  const fileName = fileURLToPath(import.meta.url)
  const dirName = dirname(fileName)
  const absolutePath = join(dirName, path)

  return absolutePath
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  layout: {
    _: absolutePath("./src/mdsvex.svelte")
  },
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await createHighlighter({
        themes: ["laserwave"],
        langs: [
          "css",
          "elixir",
          "erlang",
          "gleam",
          "html",
          "javascript",
          "json",
          "typescript",
          "rust",
          "shell",
          "toml",
          "yaml"
        ]
      })
      await highlighter.loadLanguage("javascript", "typescript")
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: "laserwave" }))
      return `{@html \`${html}\` }`
    }
  },
  remarkPlugins: [[remarkToc, { tight: true }]],
  rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true
    })
  }
}

export default config
