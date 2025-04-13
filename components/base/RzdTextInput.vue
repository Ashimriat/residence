<script setup lang="ts">
import type { InputTextProps } from 'primevue';


type Props = InputTextProps & {
  size: 'm' | 'l'
}


const props = defineProps<Props>();
const value = defineModel<string>({ required: true })

const $b = useBEM('RzdTextInput');
</script>

<template lang="pug">
PInputText(
  v-bind="props"
  v-model="value"
  :pt:root:class="$b([`size_${props.size}`])"
)
</template>

<style lang="scss">
.RzdTextInput {
  @include component-input(var(--input-height));
  &--size {
    &_m {
      --input-height: 44px;
    }
    &_l {
      --input-height: 48px;
    }
  }
}

@include mobile {
  .RzdTextInput {
    @include component-mobile-input;
  }
}
</style>
