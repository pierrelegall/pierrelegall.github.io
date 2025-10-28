<script lang="ts">
  import config from "$lib/config"
</script>

<nav class="align-center flex flex-col justify-between gap-y-1 py-4 sm:flex-row">
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
