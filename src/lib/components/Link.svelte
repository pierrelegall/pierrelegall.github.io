<script lang="ts">
  import type { Snippet } from "svelte"

  type Props = {
    href: string
    title?: string
    children: Snippet
  }

  let { href, title, children }: Props = $props()

  const isExternal = $derived(href.startsWith("http://") || href.startsWith("https://"))
</script>

{#if isExternal}
  <a {href} {title} target="_blank" rel="noopener noreferrer">
    {@render children()}
  </a>
{:else}
  <a {href} {title}>
    {@render children()}
  </a>
{/if}
