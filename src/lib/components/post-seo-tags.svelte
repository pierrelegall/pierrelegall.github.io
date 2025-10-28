<script lang="ts">
  import config from "$lib/config"

  let { data } = $props()

  function getKeywords(post) {
    return [...post.meta.tags, ...post.meta.keywords]
  }

  function getKeywordsString(post) {
    return getKeywords(post).join(", ")
  }

  function hasKeywords(post) {
    return getKeywords(post).length > 0
  }
</script>

<title>{data.meta.title}</title>
{#if data.meta.description}
  <meta name="description" content={data.meta.description} />
{/if}
{#if hasKeywords(data)}
  <meta name="keywords" content={getKeywordsString(data)} />
{/if}
<meta name="author" content={config.author}>
<meta property="og:title" content={data.meta.title} />
{#if data.meta.description}
  <meta property="og:description" content={data.meta.description} />
{/if}
<meta property="og:url" content={`${config.url}${data.url}`} />
<meta property="og:locale" content={data.meta.locale || "en_US"} />
<meta property="og:site_name" content={config.title} />
<meta property="og:type" content="article" />
<meta property="og:article:published_time" content={data.meta.publish_date} />
<meta property="og:article:modified_time" content={data.meta.last_edit_date || data.meta.publish_date} />
<meta property="og:article:author" content={config.author} />
{#if data.meta.section}
  <meta property="og:article:section" content={data.meta.section} />
{/if}
{#each getKeywords as tag}
  <meta property="og:article:tag" content={tag} />
{/each}
