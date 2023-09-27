<script lang="ts">
  import { onMount } from "svelte";
  import { routeInfo, setRouteInfo } from "../stores/extension";
  import { Router, Link, Route } from "svelte-routing";
  import svelteLogo from "../assets/svelte.svg";
  import webflowLogo from "../assets/webflow-icon.svg";
  import Counter from "../lib/Counter.svelte";
  // import MeltToggle from './lib/MeltToggle.svelte'
  import WindowSizeSwitch from "../lib/WindowSizeSwitch.svelte";
  import DividerHorizontal from "../lib/DividerHorizontal.svelte";
  import Button from "../lib/components/Button.svelte";
  import Icon from "@iconify/svelte";

  //Route name
  export let name: string;

  onMount(() => {
    setRouteInfo(name);
  });
</script>

<div class="flex flex-col mt-4 items-start gap-2">
  <div class="flex items-center gap-1">
    <a href="https://webflow.com" target="_blank" rel="noreferrer">
      <img src={webflowLogo} class="logo webflow" alt="Webflow Logo" />
    </a>
    <p class="text-xl">+</p>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-2">
      <h2>Designer Extension Starter Kit</h2>
      <p>Webflow + Svelte + Daisy UI + Melt UI.</p>
    </div>
  </div>
</div>

<style>
  .logo {
    height: 2rem;
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
