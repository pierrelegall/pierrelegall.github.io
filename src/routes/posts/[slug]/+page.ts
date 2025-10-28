import { error } from "@sveltejs/kit"
import type { MarkdocModule } from "markdoc-svelte"

export async function load({ params }) {
  try {
    // NOTE: absolute /src/content should be better, but does no work
    const post = (await import(`./../../../content/posts/${params.slug}.md`)) as MarkdocModule

    return {
      content: post.default,
      meta: post.frontmatter
    }
  } catch (_error) {
    error(404, "Nothing here 🤔")
  }
}
