<script lang="ts">
  let { data } = $props()
</script>

<section class="space-y-7">
  <h1 class="highlight text-4xl">
    <mark>About</mark>
  </h1>

  <div class="prose">
    <data.content />
  </div>
</section>
