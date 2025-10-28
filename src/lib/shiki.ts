import { createHighlighter } from "shiki"

let highlighterInstance: Awaited<ReturnType<typeof createHighlighter>> | null = null

export async function getHighlighter() {
  if (!highlighterInstance) {
    highlighterInstance = await createHighlighter({
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
  }
  return highlighterInstance
}
