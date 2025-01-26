<script setup lang="ts">
type Props = {
  orientation: 'row' | 'column';
};


/** Props & Emits */
const {
  orientation,
} = defineProps<Props>();

const $b = useBEM('BaseCard');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('subcontent')")
    slot(name="subContent")
  div(:class="$b('content')")
    slot(name="content")
</template>

<style lang="scss">
.BaseCard {
  @include flex((
    flex-direction: v-bind(orientation),
  ));
  background-color: var(--cardBackgroundColor, #{vars.$colors-grey});
  min-width: var(--cardMinWidth, none);
  width: var(--cardWidth);
  max-width: var(--cardMaxWidth, 876px);
  height: var(--cardHeight, 584px);
  padding: var(--cardPadding, 12px);
  border-radius: var(--cardBorderRadius, #{vars.$br-l});
  box-shadow: var(--cardBoxShadow, #{vars.$shadows-popup});
  &__subcontent {
    flex-basis: 40%;
  }
  &__content {
    width: var(--cardContentWidth, fit-content);
    background-color: vars.$colors-white;
    border-radius: var(--cardContentBorderRadius, #{vars.$br-m});
    overflow: hidden;
  }
}

@include mobile {
  .Card {
    --cardWidth: 100%;
    --cardContentWidth: 100%;
  }
}
</style>
