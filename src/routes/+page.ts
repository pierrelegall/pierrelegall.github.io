import { error } from "@sveltejs/kit"

export async function load() {
  try {
    const about = await import("/src/content/about.md")

    return {
      content: about.default,
      meta: about.metadata
    }
  } catch (_error) {
    error(404, "Nothing here 🤔")
  }
}
