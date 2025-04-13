<script setup lang="ts">
import type { DividerProps } from 'primevue';


const props = defineProps<DividerProps>();

const $b = useBEM('RzdDivider');
</script>

<template lang="pug">
PDivider(
  v-bind="props"
  :pt:root:class="$b()"
)
</template>

<style lang="scss">
.RzdDivider {
  --p-divider-horizontal-margin: 0.6rem 0;
  width: var(--width, 100%);
  height: 2px;
  background-color: var(--dividerBackgroundColor, #{vars.$colors-black});
}
</style>
