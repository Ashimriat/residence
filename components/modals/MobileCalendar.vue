<script setup lang="ts">
import { EButtons } from '~/components/base';
import type { CalendarDate } from '~/components/DatePickerCalendar.vue';


export type MobileCalendarModalOperators = {
  onSelect: (date: NonNullable<CalendarDate>) => void;
}

const selectedDate = useCalendar();

const { getModalData } = useModalDialog<MobileCalendarModalOperators>();
const { onSelect } = getModalData();

const confirm = () => onSelect(selectedDate.value as NonNullable<CalendarDate>);

const $b = useBEM('MobileCalendar');
</script>

<template lang="pug">
div(:class="$b()")
  DatePickerCalendar(
    as-desktop
    v-model="selectedDate"
  )
  BaseButton(
    :type="EButtons.CONFIRM"
    :disabled="!selectedDate"
    @click="confirm"
  )
</template>

<style lang="scss">
#modal_mobileCalendar {
  .p-dialog-header {
    padding: 0;
  }
  .p-dialog-content {
    padding: 32px 2rem;
  }
  .p-dialog-close-button {
    @include absolute((
      top: 4px,
      right: 1.6rem,
    ));
    padding: 0;
    width: fit-content;
    height: fit-content;
    &,
    & svg {
      width: 24px;
      height: 24px;
    }
  }
}
.MobileCalendar {
  @include flexColumn((
    align-items: center,
    gap: vars.$gaps-m,
  ));
  & button {
    width: 50%;
  }
}
</style>
