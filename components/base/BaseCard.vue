<script setup lang="ts">
/** Local Types & Variables */
type Props = {
  type?: 'vertical' | 'horizontal'
};


/** Props & Emits */
const {
  type = 'vertical'
} = defineProps<Props>();


const $b = useBEM('Card');
</script>

<template lang="pug">
div(:class="$b([type])")
  slot(name="subContent")
    div
  div(:class="$b('content')")
    slot
</template>

<style lang="scss">
.Card {
  @include flex((justify-content: space-between));
  background-color: vars.$colors-grey;
  min-width: var(--cardMinWidth, none);
  width: var(--cardWidth);
  max-width: var(--cardMaxWidth, 876px);
  height: var(--cardHeight, 584px);
  padding: var(--cardPadding, 24px 12px 12px 12px);
  border-radius: var(--cardBorderRadius, #{vars.$br-l});
  box-shadow: var(--cardBoxShadow, #{vars.$shadows-popup});
  &--vertical {
    flex-direction: column;
  }
  &__content {
    width: fit-content;
    background-color: vars.$colors-white;
    border-radius: var(--cardContentBorderRadius, #{vars.$br-m});
  }
}

@include mobile {
  .Card {
    &,
    &__content {
      width: 100%;
    }
  }
}
</style>
