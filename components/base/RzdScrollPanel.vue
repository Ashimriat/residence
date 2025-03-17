<script setup lang="ts">
type ByAxis<T> = {
  x: T;
  y: T;
};

type ByDevice = {
  desktop: number;
  mobile: number;
};

export type Props = {
  itemsInRow?: number | Partial<ByDevice>;
  gap?: number | Partial<ByAxis<number>>;
};

const {
  itemsInRow,
  gap = 40,
} = defineProps<Props>();

const { isDesktop } = useDevice();

const usedGap = computed<ByAxis<number>>(() => {
  if (typeof gap === 'number' || typeof gap === 'string') {
    return { x: gap, y: gap };
  }
  let x = gap.x ?? 40;
  let y = gap.y ?? 40;
  if (!isDesktop) {
    x /= 2;
    y /= 2;
  }
  return { x, y };
})


const fGap = computed<ByAxis<string>>(() => ({
  x: `${usedGap.value.x}px`,
  y: `${usedGap.value.y}px`,
}));

const fItemsInRow = computed<number>(() => {
  if (typeof itemsInRow === 'number') {
    return itemsInRow;
  }
  if (isDesktop) {
    return itemsInRow?.desktop ?? 3;
  }
  return itemsInRow?.mobile ?? 2;
});

const gapsSpace = computed<string>(() => `${usedGap.value.x * (fItemsInRow.value - 1)}px`);

const $b = useBEM('RzdScrollPanel');
</script>

<template lang="pug">
div(:class="$b()")
  PScrollPanel(
    :pt:root:class="$b('panel')"
    :pt:content:class="$b('content')"
    :pt:bar-y:class="$b('bar')"
  )
    slot
</template>

<style lang="scss">
$defaultItemBasis: calc((100% - v-bind('gapsSpace')) / v-bind('fItemsInRow'));

.RzdScrollPanel {
  @include fullsize;

  padding: var(--scrollPanelPadding, 6px);
  padding-right: 8px;
  overflow: hidden;
  background-color: var(--scrollPanelBackgroundColor, #{vars.$colors-white});

  &__panel {
    @include fullsize;

    padding: var(--scrollPanelContentContainerPadding, 0);
    padding-right: 15px;
  }

  &__content {
    @include flex((
      column-gap: v-bind('fGap.x'),
      row-gap: v-bind('fGap.y'),
      flex-wrap: wrap,
    ));

    padding-block-start: var(--scrollPanelContentPaddingBlockStart, 0);
    background-color: var(--scrollPanelBackgroundColor, #{vars.$colors-white});

    & > * {
      width: var(--scrollPanelItemWidth, #{$defaultItemBasis});
    }
  }

  &__bar {
    --p-scrollpanel-bar-background: var(--scrollPanelBarBackgroundColor, #{vars.$colors-greyMuted});
    --p-scrollpanel-bar-size: 6px;

    opacity: 1;
  }
}

@include mobile {
  .RzdScrollPanel {
    --p-scrollpanel-bar-size: 6px;
  }
}
</style>
