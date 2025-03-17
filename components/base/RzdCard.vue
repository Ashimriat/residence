<script setup lang="ts">
type Props = {
  orientation?: 'row' | 'column';
  preserveSubcontent?: boolean;
};

const {
  orientation,
  preserveSubcontent = true,
} = defineProps<Props>();

const { isMobile } = useDevice();

const direction = computed<'row' | 'column'>(
  () => orientation ?? isMobile ? 'column' : 'row'
);

const slots = useSlots();

const $b = useBEM('RzdCard');
</script>

<template lang="pug">
div(:class="$b([orientation ?? 'row'])")
  div(
    v-if="preserveSubcontent || slots.subContent"
    :class="$b('subcontent')"
  )
    slot(name="subContent")
  div(
    v-if="slots.content"
    :class="$b('content')"
  )
    slot(name="content")
</template>

<style lang="scss">
.RzdCard {
  @include flex((
    flex-direction: v-bind(direction),
  ));
  background-color: var(--cardBackgroundColor, #{vars.$colors-grey});
  min-width: var(--cardMinWidth, none);
  width: var(--cardWidth);
  max-width: var(--cardMaxWidth, 876px);
  height: var(--cardHeight, 584px);
  padding: var(--cardPadding, 12px);
  border-radius: var(--cardBorderRadius, #{vars.$br-l});
  box-shadow: var(--cardBoxShadow, #{vars.$shadows-popup});
  &--column {
    --cardContentMinHeight: fit-content;
  }
  &__subcontent {
    flex-basis: var(--cardSubcontentFlexBasis, 56%);
  }
  &__content {
    width: var(--cardContentWidth, fit-content);
    background-color: vars.$colors-white;
    border-radius: var(--cardContentBorderRadius, #{vars.$br-m});
    overflow: hidden;
    min-height: var(--cardContentMinHeight, 220px);
  }
}

@include mobile {
  .RzdCard {
    --cardWidth: 100%;
    --cardContentWidth: 100%;
    --cardSubcontentFlexBasis: 45%;
  }
}
</style>
