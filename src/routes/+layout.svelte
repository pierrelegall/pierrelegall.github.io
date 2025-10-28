<script lang="ts">
  import Footer from "$lib/components/footer.svelte"
  import Header from "$lib/components/header.svelte"
  import PageTransition from "./transition.svelte"

  import "@fontsource/ibm-plex-mono"

  // TODO: should this imports be removed?
  import "open-props/style"
  import "open-props/buttons"

  import "../app.css"

  let { children, data } = $props()
</script>

<div class="layout max-w-3xl">
  <Header />

  <main class="mx-auto w-full min-w-0 max-w-3xl py-4">
    <PageTransition url={data.url}>
      {@render children?.()}
    </PageTransition>
  </main>

  <Footer />
</div>

<style>
  :global(body) {
    font-family: "IBM Plex Mono", monospace;
  }

  /* HACK: this one ack weirdly */
  :global(pre) {
    font-family: "IBM Plex Mono", monospace;
  }

  .layout {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin-inline: auto;
    padding-inline: var(--size-3);
    min-width: 0;
    min-height: 0;
  }
</style>
