<script lang="ts">
  import PostSEOTags from "$lib/components/post-seo-tags.svelte"
  import Giscus from "@giscus/svelte"

  import { formatDate } from "$lib/utils"

  let { data } = $props()
</script>

<svelte:head>
  <PostSEOTags {data} />
</svelte:head>

<article>
  <hgroup class="space">
    <h1 class="highlight text-4xl"><mark>{data.meta.title}</mark></h1>
    <p>
      {formatDate(data.meta.publish_date)}
      {#if data.meta.last_edit_date && data.meta.last_edit_date !== data.meta.publish_date}
        <span class="opacity-70">| last edit the {formatDate(data.meta.last_edit_date)}</span>
      {/if}
    </p>
  </hgroup>

  {#if data.meta.tags && data.meta.tags.length > 0}
    <div class="tags">
      {#each data.meta.tags as tag}
        <span>&num;{tag}</span>
      {/each}
    </div>
  {/if}

  <div class="prose">
    <data.content />
  </div>

  <div class="comments">
    <Giscus
      repo="pierrelegall/pierrelegall.github.io"
      repoId="R_kgDONxDnrw"
      category="Blog posts"
      categoryId="DIC_kwDONxDnr84CwlZ3"
      mapping="og:title"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="catppuccin_mocha"
      lang="en"
    />
  </div>
</article>

<style>
  article {
    margin-inline: auto;

    h1 + p {
      margin-top: var(--size-2);
      color: var(--text-2);
    }

    .tags {
      color: var(--primary-color);
      display: flex;
      gap: var(--size-3);
    }

    .comments {
      margin-top: var(--size-8);
    }
  }
</style>
