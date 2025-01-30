<script lang="ts">
  import config from "$lib/config"
</script>

<nav class="py-6 flex flex-col align-center justify-between space-y-1 sm:flex-row sm:space-y-0">
  <a class="title text-primary my-auto text-white" href="/">
    {config.title}
  </a>

  <div class="flex flex-row space-x-4 [&>*]:my-auto">
    <span>
      <a href="/">about</a>
    </span>
    <span>
      <a href="/posts">posts</a>
    </span>
    <span>
      <a href="/resume">resume</a>
    </span>
  </div>
</nav>

<style>
  .title::after {
    color: var(--primary-color);
    animation: blinker 1s step-end infinite;
    content: " |";
    margin-left: -0.15em;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
</style>
