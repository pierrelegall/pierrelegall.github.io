import config from "$lib/config"
import type { Post } from "$lib/types"

export const prerender = true

export async function GET({ fetch }) {
  const response = await fetch("../api/posts")
  const posts: Post[] = await response.json()
  const headers = { "Content-Type": "application/xml" }

  const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>${config.title}</title>
        <description>${config.description}</description>
        <link>${config.url}/posts</link>
        <atom:link href="${config.url}/posts/rss.xml" rel="self" type="application/rss+xml"/>
        ${posts.map((post) => postTemplate(post)).join("")}
      </channel>
    </rss>
  `.trim()

  return new Response(xml, { headers })
}

function postTemplate(post: Post) {
  return `
    <item>
      <title>${post.title}</title>
      <description>${post.description}</description>
      <link>${config.url}/posts/${post.slug}</link>
      <guid isPermaLink="true">${config.url}/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
  `
}
