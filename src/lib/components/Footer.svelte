<script lang="ts">
  import * as config from "$lib/config"
</script>

<footer>
  <span>{config.cc} &copy {new Date().getFullYear()}</span>
</footer>

<style>
  footer {
    padding-block: var(--size-2);
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: center;

    span {
      color: var(--text-2);
    }
  }
</style>
