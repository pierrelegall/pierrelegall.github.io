import { error } from "@sveltejs/kit"

export async function load({ params }) {
  try {
    // NOTE: absolute /src/content should be better, but does no work
    const post = await import(`./../../../content/posts/${params.slug}.md`)

    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (_error) {
    error(404, "Nothing here 🤔")
  }
}
