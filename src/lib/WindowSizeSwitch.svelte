<script lang="ts">
  import { createRadioGroup, melt } from '@melt-ui/svelte';
  import Icon from "@iconify/svelte";
  
  let currentSize = "";

  // Melt Radio Group setup
  const {
    elements: { root, item, hiddenInput },
    helpers: { isChecked },
    states: { value },
  } = createRadioGroup({
    defaultValue: 'default',
    orientation: 'horizontal'
  });

  const optionsArr = ['default',  'comfortable', 'large'];

  value.subscribe((data) => currentSize = data)

  $: $value, run();

  const run = function async () {
    console.log(currentSize)
    changeSize(currentSize)
  }

  // Call Webflow API with typed parameter
  const changeSize = async (size) => {
  // Directly pass the size string to the setExtensionSize method
  await webflow.setExtensionSize(size);
}

</script>
 
<div
  use:melt={$root}
  class="flex flex-col data-[orientation=horizontal]:flex-row items-center"
  aria-label="View density"
>
  {#each optionsArr as option}
   
      <button
        use:melt={$item(option)}
        class="radio-item"
        class:active={$isChecked(option)}
        id={option}
        aria-label="{option}"
      >
        {#if option == 'default'}
          <Icon icon="heroicons:device-phone-mobile" class="" />
        {:else if option == 'comfortable'}
          <Icon icon="heroicons:device-tablet" class="" />
        {:else if option == 'large'}
          <Icon icon="heroicons:computer-desktop" class="" />
        {/if}
      </button>
    
  {/each}
</div>

<style lang="postcss">
  .radio-item {
    display: grid;
    place-items: center;
    align-items: center;

    background-color: theme("colors.actionSecondaryBackground");
    color: theme("colors.actionSecondaryText");
    font-size: 0.825rem;
    line-height: theme("lineHeight.4");
    outline: none;

    height: theme("height.7");
    width: theme("width.7");

    &:hover {
      background-color: theme("colors.actionSecondaryBackgroundHover");
      color: theme("colors.actionSecondaryTextHover");
    }

    &:focus {
      z-index: 10;
    }

    &.active {
      background:theme("colors.background4");
    }
  }

  .radio-item[data-disabled] {
    @apply cursor-not-allowed;
  }

  .radio-item[data-orientation="horizontal"] {
    @apply border;
    border-color:theme("colors.border1");

    &:first-child {
      @apply rounded-l-md rounded-r-none border-r-0;
    }

    &:last-child {
      @apply rounded-r-md rounded-l-none border-l-0;
    }
  }

  .radio-item[data-orientation="horizontal"]:dir(rtl) {
    @apply border-x;

    &:first-child {
      @apply rounded-r-md;
    }

    &:last-child {
      @apply rounded-l-md;
    }
  }

  .radio-item[data-orientation="vertical"] {
    @apply border-y;

    &:first-child {
      @apply rounded-t-md;
    }

    &:last-child {
      @apply rounded-b-md ;
    }
  }

  .radio-item[data-state="on"] {
    color: theme("colors.actionSecondaryTextHover");
    background: theme("colors.backgroundInactive");
  }
</style>