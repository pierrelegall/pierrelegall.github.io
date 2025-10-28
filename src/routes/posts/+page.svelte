<script lang="ts">
  import { formatDate } from "$lib/utils"
  import config from "$lib/config"

  let { data } = $props()

  function localeToLang(locale: string) {
    return locale.split('_')[0].toUpperCase()
  }
</script>

<svelte:head>
  <title>Posts ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Posts from Pierre Le Gall" />
</svelte:head>

<section id="post-here" class="space-y-7">
  <div class="flex flex-col items-start gap-y-4 sm:items-center sm:flex-row sm:gap-y-0 justify-between">
    <h1 class="page-title text-4xl">
      ~> ls posts
    </h1>
    <a href="/posts/feed.xml" target="_blank">-> feed</a>
  </div>

  <div id="posts" class="space-y-7">
    {#each data.posts as post}
      <div id="post">
        <a href={`posts/${post.slug}`}>
          <p class="text-2xl text-secondary">[{localeToLang(post.locale)}] {post.title}</p>
          <p class="text-white opacity-50">{formatDate(post.publish_date)}</p>
          {#if post.tags && post.tags.length > 0}
            <div class="flex gap-3 text-primary">
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
