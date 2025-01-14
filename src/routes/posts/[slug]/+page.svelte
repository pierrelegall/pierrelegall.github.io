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
    <h1 class="text-5xl">{data.meta.title}</h1>
    <p>{formatDate(data.meta.date)}</p>
  </hgroup>

  <div class="tags">
    {#each data.meta.categories as category}
      <span class="surface-4">&num;{category}</span>
    {/each}
  </div>

  <div class="prose text-justify">
    <data.content />
  </div>
</article>

<style>
  article {
    margin-inline: auto;

    h1 {
      color: var(--brand);
      text-decoration-color: var(--brand);
    }

    h1 + p {
      margin-top: var(--size-2);
      color: var(--text-2);
    }

    .tags {
      display: flex;
      gap: var(--size-2);
      margin-top: var(--size-2);
      margin-bottom: var(--size-7);

      > * {
        padding: var(--size-2) var(--size-3);
      }
    }
  }
</style>
