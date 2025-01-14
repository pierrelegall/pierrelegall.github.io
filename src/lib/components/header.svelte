<script lang="ts">
  import { title } from "$lib/config"
</script>

<nav class="py-4 flex flex-col align-center justify-between space-y-4 sm:flex-row sm:space-y-0">
  <a class="title my-auto text-white text-2xl" href="/">
    <b>{title}</b>
  </a>

  <div class="flex flex-row space-x-4 [&>*]:my-auto">
    <span>
      <a class="text-white" href="/">Home</a>
    </span>
    <span>
      <a class="text-white" href="/posts">Posts</a>
    </span>
    <span>
      <a class="text-white" href="/contact">Contact</a>
    </span>
  </div>
</nav>

<style>
  .title::after {
    animation: blinker 1s step-end infinite;
    content: "|";
    margin-left: -0.15em;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
</style>
