<script lang="ts">
  import { formatDate } from "$lib/utils"
  import config from "$lib/config"

  let { data } = $props()
</script>

<svelte:head>
  <title>Posts ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Posts from Pierre Le Gall" />
</svelte:head>

<section class="space-y-7">
  <div class="flex items-center justify-between">
    <h1 class="page-title text-4xl">
      $ ls -l posts/
    </h1>
    <a href="/posts/feed.xml" target="_blank">-> feed</a>
  </div>

  <div id="posts" class="space-y-7">
    {#each data.posts as post}
      <div id="post">
        <a href={`posts/${post.slug}`}>
          <p class="text-2xl">{post.title}</p>
          <p class="text-white opacity-50">{formatDate(post.date)}</p>
          {#if post.tags && post.tags.length > 0}
            <div class="flex gap-3">
              {#each post.tags as tag}
                <span>&num;{tag}</span>
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
