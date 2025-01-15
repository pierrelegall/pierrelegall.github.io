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

  <div class="tags">
    {#each data.meta.categories as category}
      <span>&num;{category}</span>
    {/each}
  </div>

  <div class="prose text-justify">
    <data.content />
  </div>
</article>

<style>
  article {
    margin-inline: auto;

    .title {
      color: var(--primary-color);
      line-height: 0;
      background-color: black;
    }

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
