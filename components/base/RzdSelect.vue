<script setup lang="ts">
import type { SelectProps } from 'primevue';


const props = defineProps<SelectProps>();
const value = defineModel<string>({ required: true });

const $b = useBEM('RzdSelect');
</script>

<template lang="pug">
PSelect(
  v-bind="props"
  v-model="value"
  :pt:root:class="$b()"
  :pt:overlay:class="$b('overlay')"
  :pt:label:class="$b('label')"
  :pt:option:class="$b('option')"
  :pt:option-label:class="$b('optionLabel')"
)
  template(#option="{ option }")
    slot(
      name="option"
      :option
    )
</template>

<style lang="scss">
.RzdSelect {
  --p-select-focus-border-color: var(--p-select-hover-border-color);
  --p-select-border-color: #{vars.$colors-greyMuted};
  --p-select-background: #{vars.$colors-white};
  &__overlay {
    --p-select-overlay-background: #{vars.$colors-white};
    --p-select-overlay-color: #{vars.$colors-black};
  }
  &__option {
    color: vars.$colors-black;
    &[data-p-selected="true"] {
      color: vars.$colors-white;
      background-color: vars.$colors-greyMuted;
    }
  }
  &__optionLabel,
  &__label {
    font: var(--font-button-m);
  }
  &__label {
    @include flex((align-items: center));
    color: vars.$colors-black;
  }
  &__optionLabel {
    color: currentColor;
  }
}
</style>
