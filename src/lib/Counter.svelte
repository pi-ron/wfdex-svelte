<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
	import { onMount } from 'svelte';
</script>

<button class="px-4 py-2 mt-4 border rounded-lg " on:click={increment}>
  count is {count}
</button>
