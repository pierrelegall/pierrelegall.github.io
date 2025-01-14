<script lang="ts">
  import * as config from "$lib/config"
</script>

<footer>
  <span>{new Date().getFullYear()} © {config.cc}</span>
</footer>

<style>
  footer {
    padding-block: 0.7em;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: center;

    span {
      color: var(--text-2);
    }
  }
</style>
