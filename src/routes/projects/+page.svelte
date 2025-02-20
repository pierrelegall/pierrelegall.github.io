<script lang="ts">
  import config from "$lib/config"

  let { data } = $props()
</script>

<svelte:head>
  <title>Projects ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Projects of Pierre Le Gall" />
</svelte:head>

<section class="space-y-7">
  <h1 class="highlight text-4xl">
    <mark>Projects</mark>
  </h1>

  <div class="prose resume">
    <data.content />
  </div>
</section>
