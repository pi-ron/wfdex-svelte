<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import webflowLogo from './assets/webflow-icon.svg'
  import Counter from './lib/Counter.svelte'
  import TailwindCss from './lib/TailwindCSS.svelte';
</script>
<main>
  <div class="flex flex-col items-center justify-center h-screen">
  <div class="flex">
    <a href="https://webflow.com" target="_blank" rel="noreferrer">
      <img src={webflowLogo} class="logo webflow" alt="Webflow Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1 class="p-12">Webflow + Svelte</h1>
  <p><strong>Todo:</strong> Add Webflow style variables</p>
  <div>
    <Counter />
  </div>
</div>
</main>

<TailwindCss/>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

</style>
