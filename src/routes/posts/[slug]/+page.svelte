<script lang="ts">
  import { formatDate } from "$lib/utils"

  let { data } = $props()
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <hgroup>
    <h1 class="highlight text-4xl"><mark>{data.meta.title}</mark></h1>
    <p>{formatDate(data.meta.date)}</p>
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
</article>

<style>
  article {
    margin-inline: auto;

    h1 + p {
      margin-top: var(--size-2);
      color: var(--text-2);
    }

    .tags {
      color: var(--secondary-color);
      display: flex;
      gap: var(--size-3);
    }
  }
</style>
