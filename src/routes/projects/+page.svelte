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
  <h1 class="page-title text-4xl">
    Projects
  </h1>

  <div class="prose">
    <data.content />
  </div>
</section>
