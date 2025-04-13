<script setup lang="ts">
import type { ChipProps } from 'primevue';


const props = defineProps<ChipProps>();

const $b = useBEM('RzdChip');
</script>

<template lang="pug">
PChip(
  v-bind="props"
  :pt:root:class="$b()"
  :pt:label:class="$b('label')"
)
</template>

<style lang="scss">
.RzdChip{
  max-width: 195px;
  width: fit-content;
  height: 28px;
  padding: 4px 8px;
  border-radius: vars.$br-x2s;
  background-color: vars.$colors-beige;
  &__label {
    color: vars.$colors-white;
    font: vars.$fonts-textBoldS;
  }
}
</style>
