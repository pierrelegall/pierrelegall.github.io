<script lang="ts">
  let { data } = $props()
</script>

<section class="space-y-7">
  <h1 class="highlight text-4xl">
    <mark>Resume</mark>
  </h1>

  <!--
  <p>This is an English version. Maybe you will prefer a <a href="/resume-fr">French version</a>?<p>
  -->

  <div class="prose resume">
    <data.content />
  </div>
</section>
