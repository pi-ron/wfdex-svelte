<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('the component has moved tice');
	});
</script>

<button on:click={increment}>
  count is {count}
</button>
