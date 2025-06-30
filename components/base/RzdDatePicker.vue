<script setup lang="ts">
import type { DatePickerProps } from 'primevue';

/** Local Types & Variables */

/** Props & Emits */
const props = defineProps<DatePickerProps>();

const value = defineModel<Date | undefined>({ required: true })

const $b = useBEM('RzdDatePicker');
</script>

<template lang="pug">
PDatePicker(
  v-model="value"
  :placeholder="props.placeholder"
  date-format="dd.mm.yy"
  :pt:root:class="$b()"
  :pt:day:class="$b('day')"
  :pt:month:class="$b('month')"
  :pt:year:class="$b('year')"
  :pt:pc-input-text:root:class="$b('input')"
)
</template>

<style lang="scss">
.RzdDatePicker {  
  &__input {
    --p-inputtext-focus-border-color: #{vars.$colors-greyLight};

    border: 1px solid #8A8A8A;
    border-radius: #{vars.$br-s};
  }

  &__day,
  &__month,
  &__year {
    --p-datepicker-date-selected-background: #{vars.$colors-beige};
  }
}
</style>
