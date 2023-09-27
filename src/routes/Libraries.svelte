<script lang="ts">
  import { onMount } from "svelte";
  import { setRouteInfo } from "../stores/extension";
  import Counter from "../lib/Counter.svelte";

  //Route name
  export let name: string;

  onMount(() => {
    setRouteInfo(name);
  });
</script>

<div class="my-0 mx-auto">
  <Counter />
</div>
