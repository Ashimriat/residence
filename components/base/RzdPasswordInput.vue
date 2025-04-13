<script setup lang="ts">
import type { PasswordProps } from 'primevue';


const props = defineProps<PasswordProps>()
const value = defineModel<string>({ required: true })



const $b = useBEM('RzdPasswordInput');
</script>

<template lang="pug">
PPassword(
  v-bind="props"
  v-model="value"
  :pt:root:class="$b()"
  :pt:pc-input-text:root:class="$b('input')"
  toggle-mask
  :feedback="false"
)
</template>

<style lang="scss">
.RzdPasswordInput {
  &__input {
    @include fullsize;
    @include component-input;
  }
}

@include mobile {
  .RzdPasswordInput {
    &__input {
      @include component-mobile-input;
    }
  }
}
</style>
