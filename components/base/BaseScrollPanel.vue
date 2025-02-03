<script setup lang="ts">
type ByAxis<T> = {
  x: T;
  y: T;
}

export type Props = {
  itemsInRow?: number;
  gap?: number | Partial<ByAxis<number>>;
}

const {
  itemsInRow = 3,
  gap = 40,
} = defineProps<Props>();

const usedGap = computed<ByAxis<number>>(() => {
  if (typeof gap === 'number' || typeof gap === 'string') {
    return { x: gap, y: gap };
  }
  return {
    x: gap.x ?? 40,
    y: gap.y ?? 40,
  }
})

const sGap = computed<ByAxis<string>>(() => ({
  x: `${usedGap.value.x}px`,
  y: `${usedGap.value.y}px`,
}))

const gapsSpace = computed<string>(() => `${usedGap.value.x * (itemsInRow - 1)}px`);

const $b = useBEM('BaseScrollPanel');
</script>

<template lang="pug">
div(:class="$b()")
  PScrollPanel(
    :pt:root:class="$b('panel')"
    :pt:content:class="$b('content')"
    :pt:barY:class="$b('bar')"
  )
    slot
</template>

<style lang="scss">
$defaultItemBasis: calc((100% - v-bind(gapsSpace)) / v-bind(itemsInRow));

.BaseScrollPanel {
  @include fullsize;
  padding: var(--scrollPanelPadding, 6px);
  background-color: var(--scrollPanelBackgroundColor, #{vars.$colors-white});
  overflow: hidden;
  &__panel {
    @include fullsize;
    padding: var(--scrollPanelContentPadding, 0);
  }
  &__content {
    @include flex((
      column-gap: v-bind('sGap.x'),
      row-gap: v-bind('sGap.y'),
      flex-wrap: wrap,
    ));
    padding-block: var(--scrollPanelContentPaddingBlockTop, 0) calc(2* var(--p-scrollpanel-bar-size));
    background-color: var(--scrollPanelBackgroundColor, #{vars.$colors-white});
    & > * {
      width: var(--scrollPanelItemWidth, #{$defaultItemBasis});
    }
  }
  &__bar {
    --p-scrollpanel-bar-background: var(--scrollPanelBarBackgroundColor, #{vars.$colors-greyMuted});
    --p-scrollpanel-bar-size: 4px;
    opacity: 1;
  }
}
</style>
