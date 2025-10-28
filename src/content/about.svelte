<script>
  import SocialLinks from "$lib/components/social-links.svelte"
</script>

<div class="space-y-8 flex flex-col justify-center min-h-full">
  <img
    class="max-w-48 rounded-full border-4 border-white/70 mx-auto opacity-90"
    src="/assets/main/me.avif"
    alt="Pierre"
    aria-label="Pierre"
    draggable="false"
  />

  <div class="text-center space-y-4">
    <p>~ Hello there ~</p>
    <p>My name is Pierre</p>
    <p>Welcome to my homepage</p>
  </div>

  <div style="w-full">
    <SocialLinks
      github="https://github.com/pierrelegall"
      soundcloud="https://soundcloud.com/dwellearth"
    />
  </div>
</div>
