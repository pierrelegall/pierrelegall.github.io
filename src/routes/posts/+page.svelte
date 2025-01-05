<script lang="ts">
  import { formatDate } from "$lib/utils"
  import * as config from "$lib/config"

  let { data } = $props()
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <ul class="posts">
    <div>
      <a href="/rss.xml" target="_blank">RSS feed</a>
    </div>
    {#each data.posts as post}
      <li class="post">
        <a href={`posts/${post.slug}`} class="title">{post.title}</a>
        <p class="date">{formatDate(post.date)}</p>
        {#if post.description}
          <p class="description">{post.description}</p>
        {/if}
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    inline-size: var(--size-content-3);
    margin-inline: auto;

    .posts {
      display: grid;
      gap: var(--size-5);

      .post {
        &:not(:last-child) {
          border-bottom: 1px dashed var(--border);
          padding-bottom: var(--size-7);
        }

        .title {
          font-size: var(--font-size-fluid-2);
          color: var(--brand);
          text-decoration-color: var(--brand);
        }

        .date {
          color: var(--text-2);
        }

        .description {
          margin-top: var(--size-2);
        }
      }
    }
  }
</style>
