<script lang="ts">
  import * as config from "$lib/config"
</script>

<nav>
  <a href="/" class="title">
    <b>{config.title}</b>
  </a>

  <ul class="links">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/posts">Posts</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    padding-block: var(--size-5);

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    .links {
      margin-block: var(--size-5);

      @media (min-width: 768px) {
        display: flex;
        gap: var(--size-7);
        margin-block: 0;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
