import type { Post } from "$lib/types"
import type { RequestEvent } from "@sveltejs/kit"

export async function load({ fetch }: RequestEvent) {
  const response = await fetch("api/posts")
  const posts: Post[] = await response.json()
  return { posts }
}
