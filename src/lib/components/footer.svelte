<script lang="ts">
  import config from "$lib/config"
</script>

<footer>
  <span>CC BY 4.0 <span class="rotate-180">&copy;</span> {config.author}</span>
</footer>

<style>
  footer {
    margin-top: 1em;
    font-size: 0.8em;
    padding-block: 0.7em;
    border-top: 1px solid;
    border-color: var(--code-background-color);
    display: flex;
    justify-content: center;

    span {
      color: var(--tertiary-color);
      font-size: 0.875em;
    }

    .rotate-180 {
      display: inline-block;
      transform: rotate(180deg);
    }
  }
</style>
