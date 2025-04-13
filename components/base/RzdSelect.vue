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
  :pt:label:class="$b('label')"
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
  &__label {
    @include flex((align-items: center));
  }
}
</style>
