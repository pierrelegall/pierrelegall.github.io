<script lang="ts">
  import config from "$lib/config"

  let { data } = $props()
</script>

<svelte:head>
  <title>About ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="About Pierre Le Gall" />
</svelte:head>

<data.content />
