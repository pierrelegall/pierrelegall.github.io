<script lang="ts">
  type Props = {
    src: string
    alt: string
  }

  let { src, alt }: Props = $props()

  // Glob import all post images with enhanced processing
  const imageModules = import.meta.glob(
    "/src/content/posts/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}",
    {
      eager: true,
      query: { enhanced: true }
    }
  ) as Record<string, { default: string }>

  // Extract filename from src path (e.g., "/assets/posts/image.avif" -> "image.avif")
  const filename = $derived(src.split("/").pop() ?? "")

  // Find matching image module
  const matchingPath = $derived(Object.keys(imageModules).find((path) => path.endsWith(filename)))
  const image = $derived(matchingPath ? imageModules[matchingPath].default : undefined)

  let wrapper: HTMLElement | undefined = $state()
  let loaded = $state(false)

  $effect(() => {
    if (!wrapper) return

    const img = wrapper.querySelector("img")

    if (!img) return

    const markLoaded = () => (loaded = true)

    if (img.complete && img.naturalHeight !== 0) {
      markLoaded()
    } else {
      img.addEventListener("load", markLoaded)
      return () => img.removeEventListener("load", markLoaded)
    }
  })
</script>

{#if image}
  <div class="image-wrapper" class:loaded bind:this={wrapper}>
    <enhanced:img src={image} {alt} style="opacity: {loaded ? 1 : 0}" />
  </div>
{:else}
  <img {src} {alt} />
{/if}

<style>
  .image-wrapper {
    width: fit-content;
    margin-inline: auto;
    background: center no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_P7sC%7Btransform-origin:center;animation:spinner_svv2 .75s infinite linear%7D@keyframes spinner_svv2%7B100%25%7Btransform:rotate(360deg)%7D%7D%3C/style%3E%3Cpath d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z' class='spinner_P7sC' fill='%23888'/%3E%3C/svg%3E");
  }

  .image-wrapper img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
    opacity: 0;
    transition: opacity 0.15s ease-in;
  }

  .image-wrapper.loaded img {
    opacity: 1;
  }
</style>
