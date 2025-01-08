<script setup lang="ts">
import { EIcons, EIconsSizes } from './constants/icon';
import useIcon from './composables/useIcon';


/** Local Types & Variables */
type Props = {
  type: EIcons;
  size?: EIconsSizes;
}; 


/** Props & Emits */
const {
  type,
  size = EIconsSizes.M
} = defineProps<Props>();

const {
  image,
  finalSize,
  isSocialIcon
} = useIcon(type, size);

const $b = useBem('BaseIcon');
</script>

<template lang="pug">
div(:class="$b({ 'social': isSocialIcon })")
  component(:is="image")
</template>

<style lang="scss">
.BaseIcon {
  @include centeredFlex;
  min-width: var(--iconSize, v-bind(finalSize));
  min-height: var(--iconSize, v-bind(finalSize));
  overflow: hidden;
  &--social {
    padding: 8px;
    border-radius: vars.$br_x2l;
    background: vars.$colors_greyDark;
  }
}
</style>
