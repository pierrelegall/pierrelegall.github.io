import { json } from "@sveltejs/kit"
import type { Post } from "$lib/types"

export const prerender = true

async function getPosts() {
  let posts: Post[] = []

  const paths = import.meta.glob("/src/content/posts/*.md", { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split("/").at(-1)?.replace(".md", "")

    if (file && typeof file === "object" && "frontmatter" in file && slug) {
      const metadata = file.frontmatter as Omit<Post, "slug">
      const post = { ...metadata, slug } satisfies Post
      if (post.published) posts.push(post)
    }
  }

  posts = posts.sort((first, second) => {
    return (
      new Date(second.publish_date).getTime() -
      new Date(first.publish_date).getTime()
    )
  })

  return posts
}

export async function GET() {
  const posts = await getPosts()
  return json(posts)
}
