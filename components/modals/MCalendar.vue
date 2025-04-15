<script setup lang="ts">
import { EButtons } from '~/components/constants';


export type MobileCalendarModalData = {
  withTimeSelect?: boolean;
  activedDate: CalendarDate;
  activeTime: Time;
  onSelect: (date: NonNullable<CalendarDate>, time: Time) => void;
};

const { getModalData } = useModal<MobileCalendarModalData>();
const { onSelect, withTimeSelect, activeDate, activeTime } = getModalData();

const selectedDate = ref<CalendarDate>(activeDate)
const selectedTime = ref<Time>(activeTime)

const confirm = () => {
  onSelect(
    selectedDate.value,
    selectedTime.value,
  );
};

const $b = useBEM('MobileCalendar');
</script>

<template lang="pug">
div(:class="$b()")
  DateTimeCalendar(
    v-model:date="selectedDate"
    v-model:time="selectedTime"
    as-desktop
  )
  RzdButton(
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
  @include flex-column((
    align-items: center,
    gap: vars.$gaps-g24,
  ));
  & button {
    width: 50%;
  }
}
</style>
