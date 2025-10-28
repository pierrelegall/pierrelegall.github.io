<script>
  export let text = "SYSTEM ONLINE";
  export let speed = 30; // milliseconds per character
  export let accentColor = "#7c3aed"; // modern purple

  let displayedText = "";
  let i = 0;
  let isTyping = true;

  function typeWriter() {
    if (i < text.length && isTyping) {
      displayedText += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  import { onMount } from 'svelte';
  onMount(() => {
    typeWriter();
  });
</script>

<style>
  .modern-cyber {
    font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
    font-size: 1.4rem;
    font-weight: 600;
    color: #e5e7eb;
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    padding: 1.2rem 1.6rem;
    border: 1px solid rgba(124, 58, 237, 0.3);
    display: inline-block;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(124, 58, 237, 0.1);
    position: relative;
    overflow: hidden;
    max-width: fit-content;
  }

  .modern-cyber::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #7c3aed, transparent);
    animation: shine 3s infinite;
  }

  .text {
    background: linear-gradient(90deg, #e5e7eb, #7c3aed);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradient 4s ease infinite;
  }

  .blink-cursor {
    animation: blink 1s step-end infinite;
    color: #7c3aed;
    font-weight: bold;
  }

  @keyframes gradient {
    0% { background-position: 200% center; }
    50% { background-position: 0% center; }
    100% { background-position: -200% center; }
  }

  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
</style>

<div class="modern-cyber">
  <span class="text">{displayedText}</span><span class="blink-cursor">|</span>
</div>
