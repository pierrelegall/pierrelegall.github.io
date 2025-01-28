<script lang="ts">
  import { formatDate } from "$lib/utils"
  import * as config from "$lib/config"

  let { data } = $props()
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section class="space-y-7">
  <h1 class="page-title text-4xl highlight">
    <mark>Posts</mark>
  </h1>

  <div>
    <a href="/rss.xml" target="_blank">RSS feed</a>
  </div>

  <div id="posts" class="space-y-7">
    {#each data.posts as post}
      <div id="post">
        <a href={`posts/${post.slug}`}>
          <p class="text-2xl">{post.title}</p>
          <p class="text-white opacity-50">{formatDate(post.date)}</p>
          {#if post.categories && post.categories.length > 0}
            <div class="flex gap-3">
              {#each post.categories as category}
                <span>&num;{category}</span>
              {/each}
            </div>
          {/if}
          {#if post.description}
            <p class="text-white">{post.description}</p>
          {/if}
        </a>
      </div>
    {/each}
  </div>
</section>
