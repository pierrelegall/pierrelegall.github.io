<script lang="ts">
  import config from "$lib/config"

  let { data } = $props()
</script>

<svelte:head>
  <title>About ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="About Pierre Le Gall" />
</svelte:head>

<section class="space-y-7">
  <h1 class="highlight text-4xl">
    <mark>About</mark>
  </h1>

  <div class="prose">
    <data.content />
  </div>
</section>
