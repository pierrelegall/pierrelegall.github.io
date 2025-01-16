import { error } from "@sveltejs/kit"

export async function load({ params }) {
  try {
    const post = await import(`/src/content/posts/${params.slug}.md`)

    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (_error) {
    error(404, "Nothing here 🤔")
  }
}
