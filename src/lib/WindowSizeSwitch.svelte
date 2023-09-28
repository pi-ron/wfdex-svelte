<script lang="ts">
  import { createRadioGroup, melt } from '@melt-ui/svelte';
  import Icon from "@iconify/svelte";
  import { AllowedSizeValues } from './webflowConstants';
  import { windowSize, setWindowSize } from '../stores/extension';
  
  // Initializing the Melt Radio Group with default values and orientation
  const {
    elements: { root, item, hiddenInput },
    helpers: { isChecked },
    states: { value },
  } = createRadioGroup({
    defaultValue: 'default',
    orientation: 'horizontal'
  });
  
  // Array of available options for window size
  const optionsArr = Object.values(AllowedSizeValues);
  
  // Function to call the Webflow API to change the extension window size
  const changeSize = async (size: Parameters<typeof webflow.setExtensionSize>[0]) => {
    //Run store function
    setWindowSize(size)
  }
  //Subscribe to melt ui value state then run changeSize
  $: changeSize($value as Parameters<typeof webflow.setExtensionSize>[0]);
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
    font-size: 1rem;
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
      outline:1px solid theme("colors.blueBorder");
    }

    &.active {
      background:theme("colors.background3");
    }
  }

  .radio-item[data-disabled] {
    @apply cursor-not-allowed;
  }

  .radio-item[data-orientation="horizontal"] {
    @apply border;
    border-color:theme("colors.border1");

    &:first-child {
      @apply rounded-l-sm rounded-r-none border-r-0;
    }

    &:last-child {
      @apply rounded-r-sm rounded-l-none border-l-0;
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