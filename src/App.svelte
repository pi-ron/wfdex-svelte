<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import webflowLogo from './assets/webflow-icon.svg'
  import Counter from './lib/Counter.svelte'
  // import MeltToggle from './lib/MeltToggle.svelte'
  import WindowSizeSwitch from './lib/WindowSizeSwitch.svelte'
  import DividerHorizontal from './lib/DividerHorizontal.svelte'
  import TailwindCss from './lib/TailwindCSS.svelte';
</script>

<main>
  <div class="flex flex-col items-center justify-start h-screen px-3">
    <div class="app-bar flex items-center self-stretch justify-between py-1">
      <div class="text-xl font-medium">Starterkit</div>
      <WindowSizeSwitch />
    </div>
    <DividerHorizontal />
  <div class="flex flex-col items-center">
    <div class="flex items-center">
      <a href="https://webflow.com" target="_blank" rel="noreferrer">
        <img src={webflowLogo} class="logo webflow" alt="Webflow Logo" />
      </a>
      <p class="text-xl">+</p>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
    <div class="text-center">
      <h1>Webflow + Svelte</h1>
      <p>Type styling app is underway.</p>
    </div>
    <div class="my-0 mx-auto">
      <Counter />
    </div>
  </div>
</div>
</main>



<style>
  html, body {
    font-size:16px;
  }
  main {
    background:theme("colors.background1");
    font-size:theme("fontSize.base");
  }
  .logo {
    height: 4rem;
    padding: 1em;
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
