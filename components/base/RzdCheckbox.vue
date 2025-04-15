<script setup lang="ts">
import type { CheckboxProps } from 'primevue';


type Props = CheckboxProps & {
  label: string;
}


const props = defineProps<Props>();
const value = defineModel<boolean>({ required: true });

const $b = useBEM('RzdCheckbox');
</script>

<template lang="pug">
div(:class="$b()")
  PCheckbox(
    v-bind="props"
    v-model="value"
    :pt:root:class="$b('checkbox')"
  )
  label(
    :for="props.inputId"
    :class="$b('label')"
  )
    | {{ props.label }}
div(:class="$b()")

</template>

<style lang="scss">
.RzdCheckbox {
  @include centered-flex((gap: vars.$gaps-g12));
  &__checkbox {
    --p-checkbox-checked-hover-background: #{vars.$colors-beige};
    --p-checkbox-checked-hover-border-color: #{vars.$colors-beige};
    --p-checkbox-checked-border-color: #{vars.$colors-beige};
    --p-checkbox-checked-background: #{vars.$colors-beige};
    --p-checkbox-background: #{vars.$colors-white};
  }
  &__label {
    font: vars.$fonts-textM;
    color: vars.$colors-black;
  }
}
</style>
