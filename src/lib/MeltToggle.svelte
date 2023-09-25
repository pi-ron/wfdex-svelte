<script lang="ts">
  import { createToggleGroup, melt, type CreateToggleGroupProps } from "@melt-ui/svelte";
  import Icon from "@iconify/svelte";

  let currentSize = "";

  //Melt it
  const {
    elements: { root, item },
    states: { value },
  } = createToggleGroup({
    type: "single",
    defaultValue: 'small',
  });
  
  value.subscribe((data) => currentSize = data)

  $: $value, run();

  function run(){
    //do something here
    console.log(currentSize)
    
  }


</script>

<div
  use:melt={$root}
  class="flex items-center data-[orientation='vertical']:flex-col"
  aria-label="Text alignment"
>
  {currentSize}
  <button
    class="toggle-item"
    use:melt={$item("small")}
    on:m-click
    aria-label="Small"
  >
    <Icon icon="heroicons:device-phone-mobile" class="square-4" />
  </button>
  <button
    class="toggle-item"
    use:melt={$item("medium")}
    aria-label="Medium"
  >
    <Icon icon="heroicons:device-tablet" class="square-4" />

  </button>
  <button
    class="toggle-item"
    use:melt={$item("large")}
    aria-label="Large"
  >

    <Icon icon="heroicons:computer-desktop" class="square-4" />
  </button>
</div>

<style lang="postcss">
  .toggle-item {
    display: grid;
    place-items: center;
    align-items: center;

    background-color: theme("colors.actionSecondaryBackground");
    color: theme("colors.actionSecondaryText");
    font-size: theme("fontSize.base");
    line-height: theme("lineHeight.4");
    outline: none;

    height: theme("height.9");
    width: theme("width.9");

    &:hover {
      background-color: theme("colors.actionSecondaryBackgroundHover");
      color: theme("colors.actionSecondaryTextHover");
    }

    &:focus {
      z-index: 10;
    }
  }

  .toggle-item[data-disabled] {
    @apply cursor-not-allowed;
  }

  .toggle-item[data-orientation="horizontal"] {
    @apply border;
    border-color:theme("colors.border1");

    &:first-child {
      @apply rounded-l-md border-r-0;
    }

    &:last-child {
      @apply rounded-r-md border-l-0;
    }
  }

  .toggle-item[data-orientation="horizontal"]:dir(rtl) {
    @apply border-x;

    &:first-child {
      @apply rounded-r-md;
    }

    &:last-child {
      @apply rounded-l-md;
    }
  }

  .toggle-item[data-orientation="vertical"] {
    @apply border-y;

    &:first-child {
      @apply rounded-t-md;
    }

    &:last-child {
      @apply rounded-b-md ;
    }
  }

  .toggle-item[data-state="on"] {
    color: theme("colors.actionSecondaryTextHover");
    background: theme("colors.backgroundInactive");
  }
</style>
