<script lang="ts">
  import { getHighlighter } from "$lib/shiki"

  type Props = {
    content: string
    language?: string
  }

  let { content, language = "text" }: Props = $props()

  const highlightedCode = $derived.by(async () => {
    const highlighter = await getHighlighter()
    return highlighter.codeToHtml(content, { lang: language, theme: "laserwave" })
  })
</script>

{#await highlightedCode}
  <pre><code>{content}</code></pre>
{:then html}
  {@html html}
{/await}
