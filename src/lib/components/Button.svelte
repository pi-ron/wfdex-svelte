<!-- Button.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from "@iconify/svelte";
  
  export let variant: 'primary' | 'secondary' | 'error' | 'outline' | 'ghost' | '' = '';
  export let disabled: boolean = false;
  export let square: boolean = false;
  export let leadingIcon: string | null = null;
  export let trailingIcon: string | null = null;
  export let label: string | null = null;
  export let id: string | null = null;
  
  const dispatch = createEventDispatcher();
  
  function handleClick() {
    if (!disabled) {
      dispatch('click');
    }
  }
</script>

<button
  class="btn {variant ? `btn-${variant}` : ''} {square ? 'btn-square' : ''} {disabled ? 'btn-disabled' : ''}"
  on:click={handleClick}
  disabled={disabled}
  id={id}
>
  {#if leadingIcon}
    <Icon icon={leadingIcon} class="leading-icon" />
  {/if}
  {#if label}
    {label}
  {/if}
  {#if trailingIcon}
    <Icon icon={trailingIcon} class="trailing-icon" />
  {/if}
</button>

<style>
  .leading-icon, .trailing-icon {
    margin: 0 0.5rem;
  }
</style>
