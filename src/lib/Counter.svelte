<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
	import { onMount } from 'svelte';
</script>

<button class="btn btn-ghost" on:click={increment}>
  count is {count}
</button>
