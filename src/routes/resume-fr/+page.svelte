<script lang="ts">
  let { data } = $props()
</script>

<section class="space-y-7">
  <h1 class="highlight text-4xl">
    <mark>Resume</mark>
  </h1>

  <!--
  <p>This is a French version. Maybe you will prefer an <a href="/resume">English version</a>?<p>
  -->

  <div class="prose resume">
    <data.content />
  </div>
</section>
