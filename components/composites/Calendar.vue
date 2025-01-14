<script setup lang="ts">
import { Temporal } from '@js-temporal/polyfill';
import { EIcons, EIconsSizes } from '../base';


type Date = {
  start: Temporal.PlainDate;
  end?: Temporal.PlainDate;
};

type CalendarDay = {
  day: number;
  isInactiveMonth?: boolean;
};

const DISPLAYED_DAYS_AMOUNT = 7 * 6;

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const WEEK_DAYS = [
  'ПН',
  'ВТ',
  'СР',
  'ЧТ',
  'ПТ',
  'СБ',
  'ВС',
];

const selectedDate = ref<Date | null>(null);

const selectedDateLabel = computed<string>(() => {
  if (!selectedDate.value) return '';
  const { start, end } = selectedDate.value;
  let res = `${dNumber(start.day)}.${dNumber(start.month)}`;
  if (end) {
    res += ` - ${dNumber(end.day)}.${dNumber(end.month)}`;
  }
  return res;
});

const processedDate = ref<Temporal.PlainDate>(
  Temporal.Now.instant().toZonedDateTimeISO(Temporal.Now.timeZoneId()).toPlainDate()
);

const days = computed<CalendarDay[]>(() => {
  const res: CalendarDay[] = [];
  // prvM = previousMonth
  const prvMLastDayDate = processedDate.value
    .subtract({ days: processedDate.value.day });
  // prM = processedMonth
  const prMFirstDayDate = prvMLastDayDate
    .add({ days: 1 })
  if (prMFirstDayDate.dayOfWeek !== 1) {
    let prvMDate = prvMLastDayDate;
    for (let i = prvMDate.dayOfWeek; i > 0; i--) {
      res[i - 1] = {
        day: prvMDate.day,
        isInactiveMonth: true,
      };
      prvMDate = prvMDate.subtract({ days: 1 });
    }
  }
  let prMDate = prMFirstDayDate;
  let daysAdded = 0;
  let weekMod = 0;
  do {
    res[prMDate.dayOfWeek - 1 + prMDate.daysInWeek * weekMod] = { day: prMDate.day };
    daysAdded += 1;
    prMDate = prMDate.add({ days: 1 });
    if (prMDate.dayOfWeek === 1) {
      weekMod += 1;
    }
  } while (daysAdded !== processedDate.value.daysInMonth);
  while (res.length < DISPLAYED_DAYS_AMOUNT) {
    res[prMDate.dayOfWeek - 1 + prMDate.daysInWeek * weekMod] = {
      day: prMDate.day,
      isInactiveMonth: true,
    };
    prMDate = prMDate.add({ days: 1 });
    if (prMDate.dayOfWeek === 1) {
      weekMod += 1;
    }
  }
  return res;
});

function resetSelectedDate(): void {
  selectedDate.value = null;
}

function changeMonth(mod: -1 | 1): void {
  processedDate.value = processedDate.value.add({ months: mod });
}
 
const isSelectedDate = ({ day, isInactiveMonth }: CalendarDay): boolean => {
  if (isInactiveMonth) return false;
  if (!selectedDate.value) return false;
  return selectedDate.value.start.day === day || selectedDate.value.end?.day === day;
};

const isInSelection = ({ day, isInactiveMonth }: CalendarDay): boolean => {
  if (isInactiveMonth) return false;
  if (!selectedDate.value || !selectedDate.value.end) return false;
  return day > selectedDate.value?.start?.day && day < selectedDate.value.end?.day;
};

function getDayClasses(cDay: CalendarDay): string {
  return $b('day', {
    inactive: cDay.isInactiveMonth,
    selected: isSelectedDate(cDay),
    selection: isInSelection(cDay),
  });
}

function setSelectedDate(day: number): void {
  const daysAddedDate = processedDate.value.add({ days: day - processedDate.value.day });
  if (selectedDate.value?.start && selectedDate.value.end || !selectedDate.value) {
    selectedDate.value = { start: daysAddedDate };
  } else if (day === selectedDate.value.start.day) {
    selectedDate.value = null;
  } else {
    selectedDate.value.end = daysAddedDate;
  }
}

const $b = useBem();
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('header')")
    div(:class="$b('processedDate')")
      span
        | {{ MONTHS[processedDate.month - 1] }}
      span
        | {{ processedDate.year }}
      BaseIcon(
        is-clickable
        :type="EIcons.CALENDAR_PREV_MONTH"
        :size="EIconsSizes.S"
        @click="changeMonth(-1)"
      )
      BaseIcon(
        is-clickable
        :type="EIcons.CALENDAR_NEXT_MONTH"
        :size="EIconsSizes.S"
        @click="changeMonth(1)"
      )
    div(
      v-if="selectedDate"
      :class="$b('selectedDate')"
    )
      BaseIcon(
        is-clickable
        :type="EIcons.CROSS"
        :size="EIconsSizes.S"
        @click="resetSelectedDate"
      )
      span
        | {{ selectedDateLabel }}
  div(:class="$b('container')")
    div(
      v-for="day of WEEK_DAYS"
      :key="day"
      :class="$b('weekDay')"
    )
      | {{ day }}
    div(
      v-for="(cDay, i) of days"
      :key="`${cDay.day}-${i}`"
      :class="getDayClasses(cDay)"
      @click="setSelectedDate(cDay.day)"
    )
      | {{ cDay.day }}
</template>

<style lang="scss">
.Calendar {
  @include flexColumn((gap: 12px));
  background-color: vars.$colors-white;
  padding: 16px;
  width: 320px;
  border-radius: vars.$br-l;
  box-sizing: border-box;
  &__header {
    @include flex((
      justify-content: space-between,
      align-items: center,
    ));
    height: 24px;
  }
  &__processedDate {
    @include centeredFlex((gap: 4px));
    font-weight: vars.$fw-bold;
    font-size: 16px;
    & > span:last-of-type {
      color: vars.$colors-beige;
    }
  }
  &__selectedDate {
    @include centeredFlex((gap: 8px));
    border-radius: vars.$br-x2s;
    background-color: vars.$colors-greyDark;
    color: vars.$colors-white;
    font-size: 12px;
    height: 24px;
    padding: 4px 8px;
  }
  &__container {
    @include flex((flex-wrap: wrap));
  }
  &__weekDay,
  &__day {
    @include centeredFlex;
    width: 41px;
    height: 36px;
  }
  &__weekDay {
    color: vars.$colors-beigeMuted;
    font-size: 13px;
  }
  &__day {
    cursor: pointer;
    font-size: 12px;
    border-radius: vars.$br-xs;
    &:hover:not(&--selected) {
      background-color: vars.$colors-beige;
      opacity: 0.7;
      color: vars.$colors-white;
    }

    &--selected,
    &--selection {
      background-color: vars.$colors-beige;
      color: vars.$colors-white;
    }
    &--selection {
      opacity: 0.5;
    }
    &--inactive {
      background: none;
      color: vars.$colors-beigeMuted;
      cursor: default;
      pointer-events: none;
    }
  }
}
</style>
