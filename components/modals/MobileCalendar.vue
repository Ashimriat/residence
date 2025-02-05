<script setup lang="ts">
import { EButtons } from '~/constants/components';
import { type CalendarDate, type Time } from '~/components/DateTimeCalendar.vue';


export type MobileCalendarModalData = {
  withTimeSelect?: boolean;
  onSelect: (date: NonNullable<CalendarDate>, time: Time) => void;
}

const { selectedDate, selectedTime } = useCalendar();

const { getModalData } = useModalDialog<MobileCalendarModalData>();
const { onSelect, withTimeSelect } = getModalData();

const confirm = () => onSelect(
  selectedDate.value as NonNullable<CalendarDate>,
  selectedTime.value,
);

const $b = useBEM('MobileCalendar');
</script>

<template lang="pug">
div(:class="$b()")
  DateTimeCalendar(
    as-desktop
    :with-time="withTimeSelect"
    v-model:date="selectedDate"
    v-model:time="selectedTime"
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
    gap: vars.$gaps-g24,
  ));
  & button {
    width: 50%;
  }
}
</style>
