<script setup lang="ts">
import type { EIcons } from './constants';
import { EIconsSizes } from './constants';
import useIconData from './composable';


type Props = {
  type: EIcons;
  isClickable?: boolean;
  size?: EIconsSizes;
};

const {
  type,
  isClickable = false,
  size = EIconsSizes.M,
} = defineProps<Props>();

const {
  image,
  finalSize,
} = useIconData(type, size);

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
  min-width: v-bind(finalSize);
  min-height: v-bind(finalSize);
  width: v-bind(finalSize);
  height: v-bind(finalSize);
  &--clickable {
    cursor: pointer;
  }
}
</style>
