<script>
  import SocialLinks from "$lib/components/social-links.svelte"
</script>

<div class="space-y-8 flex flex-col justify-center min-h-full">
  <img class="w-44 h-44 rounded-full mx-auto" src="/assets/main/avatar.avif" alt="Me" />

  <div class="text-center">
    <div>Hello there!</div>
    <br />
    <div>I'm Pierre Le Gall, welcome to my homepage.</div>
  </div>

  <div style="w-full">
    <SocialLinks
      github="https://github.com/pierrelegall"
      soundcloud="https://soundcloud.com/dwellearth"
    />
  </div>
</div>
