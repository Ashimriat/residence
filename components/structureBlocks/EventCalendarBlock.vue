<script setup lang="ts">
import { type CalendarDate, type Time } from '../DateTimeCalendar.vue';


type Props = {
  dataSectionTitle: string;
  isCalendarDisabled?: boolean;
};


/** Props & Emits */
const {
  dataSectionTitle,
  isCalendarDisabled,
} = defineProps<Props>();

const { isDesktop } = useDevice();

const selectedDate = defineModel<CalendarDate>('date', { required: true });
const selectedTime = defineModel<Time>('time', { required: true });

const $b = useBEM('EventCalendarBlock');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('contentSection', ['data'])")
    h3
      | {{ dataSectionTitle }}
    slot
  section(:class="$b('contentSection', ['calendar'])")
    h3(v-if="isDesktop")
      | Дата и время
    DateTimeCalendar(
      v-model:date="selectedDate"
      v-model:time="selectedTime"
      :is-disabled="isCalendarDisabled"
    )
       
</template>

<style lang="scss">
.EventCalendarBlock {
  @include flex((
    flex-direction: var(--contentFlexDirection, row),
    justify-content: space-between,
    gap: vars.$gaps-g16,
  ));

  width: 100%;

  &__contentSection {
    @include flexColumn((gap: vars.$gaps-g12));

    &--data {
      order: var(--dataSectionOrder, 1);
      width: 100%;
      max-width: 640px;
    }

    &--calendar {
      order: var(--calendarSectionOrder, 2);
    }
  }
}

@include mobile {
  .EventCalendarBlock {
    --contentFlexDirection: column;
    --dataSectionOrder: 2;
    --calendarSectionOrder: 1;
  }
}
</style>
