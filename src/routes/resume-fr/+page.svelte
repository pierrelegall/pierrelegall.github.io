<script lang="ts">
  import config from "$lib/config"

  let { data } = $props()
</script>

<svelte:head>
  <title>Resume ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Resume of Pierre Le Gall" />
</svelte:head>

<section class="space-y-7">
  <h1 class="highlight text-4xl">
    <mark>Resume</mark>
  </h1>

  <!--
  <p>This is a French version. Maybe you will prefer an <a href="/resume">English version</a>?<p>
  -->

  <div class="prose resume">
    <data.content />
  </div>
</section>
