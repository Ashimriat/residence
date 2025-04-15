<script setup lang="ts">
import { PToggleSwitch } from '#components';
import type { ToggleSwitchProps } from 'primevue';


type Props = ToggleSwitchProps & {
  label: string;
}

const props = defineProps<Props>();
const value = defineModel<boolean>({ required: true });

const $b = useBEM('RzdToggle');
</script>

<template lang="pug">
div(:class="$b()")
  label(:class="$b('label')")
    | {{ label }}
  PToggleSwitch(
    v-bind="props"
    v-model="value"
    :pt:root:class="$b('toggle')"
    :pt:slider:class="$b('slider')"
    :pt:handle:class="$b('handle')"
  )
</template>

<style lang="scss">
.RzdToggle {
  @include flex((
    align-items: center,
    gap: vars.$gaps-g12,
  ));
  &__label {
    font: vars.$fonts-textM;
    color: vars.$colors-black;
  }
  &__toggle {
    --p-toggleswitch-background: #{vars.$colors-beigeMuted};
    --p-toggleswitch-hover-background: #{vars.$colors-beigeMuted};
    --p-toggleswitch-checked-hover-background: #{vars.$colors-beige};
    --p-toggleswitch-checked-background: #{vars.$colors-beige};
  }
  &__slider {
    width: 40px;
    height: 24px;
  }
  &__handle {
    --p-toggleswitch-handle-size: 16px;
    --p-toggleswitch-handle-background: #{vars.$colors-white};
    --p-toggleswitch-handle-checked-background: #{vars.$colors-white};
  }
}
</style>
