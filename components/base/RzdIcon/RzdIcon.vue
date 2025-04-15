<script setup lang="ts">
import type { EIcons } from './constants';
import { EIconsSizes } from './constants';
import useIconData from './composable';


type Props = {
  type: EIcons;
  size?: EIconsSizes;
  isClickable?: boolean;
  isAdaptive?: boolean;
};

const {
  type,
  /** optional */
  size = EIconsSizes.M,
  isClickable,
  isAdaptive
} = defineProps<Props>();

const {
  image,
  finalSize,
} = useIconData(type, size, isAdaptive);

const $b = useBEM('RzdIcon');
</script>

<template lang="pug">
component(
  :is="image"
  :class="$b({ clickable: isClickable })"
)
</template>

<style lang="scss">
.RzdIcon {
  min-width: v-bind('finalSize');
  min-height: v-bind('finalSize');
  width: v-bind('finalSize');
  height: v-bind('finalSize');
  stroke: var(--rzd-icon-color);
  &--clickable {
    cursor: pointer;
  }
}
</style>
