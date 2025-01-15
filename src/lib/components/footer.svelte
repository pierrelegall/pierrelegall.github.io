<script lang="ts">
  import * as config from "$lib/config"
</script>

<footer>
  <span><span class="copyleft" /> {config.cc}</span>
</footer>

<style>
  footer {
    font-size: 0.8em;
    padding-block: 0.7em;
    border-top: 1px solid;
    border-image: linear-gradient(to right, var(--primary-color) 0%, var(--secondary-color) 100%) 1;
    display: flex;
    justify-content: center;

    span {
      background: linear-gradient(to right, var(--primary-color) 0%, var(--secondary-color) 100%);
      background-clip: text;
      color: transparent;
      font-size: 0.875em;
    }

    .copyleft {
      display: inline-block;
      transform: rotate(180deg);
    }

    .copyleft::after {
      content: "\00a9";
    }
  }
</style>
