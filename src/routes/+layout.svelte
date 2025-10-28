<script lang="ts">
  import Footer from "$lib/components/footer.svelte"
  import Header from "$lib/components/header.svelte"
  import PageTransition from "./transition.svelte"

  import "../app.css"

  let { children, data } = $props()
</script>

<div class="layout max-w-3xl">
  <Header />

  <main class="mx-auto w-full min-w-0 py-4">
    <PageTransition url={data.url}>
      {@render children?.()}
    </PageTransition>
  </main>

  <Footer />
</div>

<style>
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
