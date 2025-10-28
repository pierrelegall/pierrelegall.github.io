import config from "$lib/config"
import type { Post } from "$lib/types"
import type { RequestEvent } from "@sveltejs/kit"

export const prerender = true

export async function GET({ fetch }: RequestEvent) {
  const response = await fetch("../api/posts")
  const posts: Post[] = await response.json()
  const headers = { "Content-Type": "application/xml" }

  const feed = `
    <?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
      <title>${config.title}</title>
      <subtitle>${config.description}</subtitle>
      <link href="${config.url}/posts/feed.xml" rel="self"/>
      <link href="${config.url}/posts"/>
      <updated>${posts.length > 0 ? new Date(posts[0].publish_date).toISOString() : new Date().toISOString()}</updated>
      <id>${config.url}/posts</id>
      ${posts.map((post) => postTemplate(post)).join("")}
    </feed>
    `
    .trim()

  return new Response(feed, { headers })
}

function postTemplate(post: Post) {
  const updated = post.last_edit_date || post.publish_date

  return `
    <entry>
      <title>${post.title}</title>
      <link href="${config.url}/posts/${post.slug}"/>
      <id>${config.url}/posts/${post.slug}</id>
      <published>${new Date(post.publish_date).toISOString()}</published>
      <updated>${new Date(updated).toISOString()}</updated>
      <summary>${post.description}</summary>
    </entry>
    `
    .trim()
}
