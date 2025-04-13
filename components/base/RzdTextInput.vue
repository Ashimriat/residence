<script setup lang="ts">
import type { InputTextProps } from 'primevue';


const props = defineProps<InputTextProps>();
const value = defineModel<string>({ required: true })

const $b = useBEM('RzdTextInput');
</script>

<template lang="pug">
PInputText(
  v-bind="props"
  v-model="value"
  :pt:root:class="$b()"
)
</template>

<style lang="scss">
.RzdTextInput {
  @include component-input;
}

@include mobile {
  .RzdTextInput {
    @include component-mobile-input;
  }
}
</style>
