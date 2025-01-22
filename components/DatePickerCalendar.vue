<script setup lang="ts">
import { Temporal } from '@js-temporal/polyfill';
import { EIcons, EIconsSizes } from '~/components/base';

type Props = {
  asDesktop?: boolean;
}

export type CalendarDate = {
  start: Temporal.PlainDate;
  end?: Temporal.PlainDate;
} | null;

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

const { asDesktop } = defineProps<Props>();
const selectedDate = defineModel<CalendarDate>({ required: true });

const { isMobile } = useDevice();
const { closeModal, showMobileCalendar } = useModalDialog();

const selectedDateLabel = computed<string>(() => {
    if (!selectedDate.value) return '';
    const { start, end } = selectedDate.value;
    let res = `${dNumber(start.day)}.${dNumber(start.month)}`;
    if (end) {
      res += ` - ${dNumber(end.day)}.${dNumber(end.month)}`;
    }
    return res;
  });

function openOnMobile(): void {
  showMobileCalendar({
    onSelect: (date: NonNullable<CalendarDate>) => {
      selectedDate.value = date;
      closeModal();
    },
  });
}

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
 
const isSelectedDate = ({ day, isInactiveMonth }: CalendarDay): { first: boolean, last: boolean } => {
  if (isInactiveMonth || !selectedDate.value) return { first: false, last: false };
  return {
    first: selectedDate.value.start?.day === day,
    last: selectedDate.value.end?.day === day,
  };
};

const isInSelection = ({ day, isInactiveMonth }: CalendarDay): boolean => {
  if (isInactiveMonth) return false;
  if (!selectedDate.value || !selectedDate.value.end) return false;
  return day > selectedDate.value?.start.day && day < selectedDate.value.end?.day;
};

function getDayClasses(cDay: CalendarDay): string {
  const { first, last } = isSelectedDate(cDay);
  const firstSelected = selectedDate.value?.end && first;
  const lastSelected = selectedDate.value?.end && last;
  const selected = !selectedDate.value?.end && first;
  const inactive = cDay.isInactiveMonth;
  const selection = isInSelection(cDay);
  const common = !firstSelected && !lastSelected && !selected && !inactive && !selection;
  return $b('day', {
    firstSelected,
    lastSelected,
    selected,
    inactive,
    selection,
    common,
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

const $b = useBEM('Calendar');
</script>

<template lang="pug">
div(
  v-if="isMobile && !asDesktop"
  :class="$b(['mobile'])"
  @click="openOnMobile"
)
  | {{ selectedDateLabel || 'Выбрать дату' }}
  BaseIcon(:type="EIcons.CALENDAR")
div(
  v-else
  :class="$b(['desktop'])"
)
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
      span(:class="$b('filler')")
      span(:class="$b('dayNum')")
        | {{ cDay.day }}
</template>

<style lang="scss">
.Calendar {
  &--desktop {
    @include flexColumn((gap: 12px));
    background-color: vars.$colors-white;
    padding: 16px;
    width: 320px;
    border-radius: vars.$br-l;
    box-sizing: border-box;
  }
  &--mobile {
    --iconStroke: #{vars.$colors-black};
    @include flex((justify-content: space-between, align-items: center));
    height: 40px;
    background-color: vars.$colors-white;
    font-size: 16px;
    font-weight: vars.$fw-bold;
    padding: 10px 16px;
    border-radius: vars.$br-xs;
    color: vars.$colors-black;
  }
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
    & span {
      height: 16px;
    }
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
    @include relative;
    cursor: pointer;
    font-size: 12px;
    border-radius: vars.$br-xs;
    overflow: hidden;

    --dayNumColor: #{vars.$colors-black};
    --dayOpacity: 1;
    --fillerWidth: 0;
    --fillerBackgroundColor: transparent;

    &--common,
    &--selection {
      &:hover {
        --dayNumColor: #{vars.$colors-white};
        --fillerWidth: 100%;
        --fillerBackgroundColor: #{vars.$colors-beige};
        --fillerBorderRadius: #{vars.$br-xs};
        --dayOpacity: 0.7;
      }  
    }
    &--selection {
      background-color: vars.$colors-greyLight;
      color: vars.$colors-black;
      border-radius: 0;
    }
    &--firstSelected,
    &--lastSelected,
    &--selected {
      @include relative;
      --dayNumColor: #{vars.$colors-white};
      pointer-events: none;
      /*&,
      &:hover {
        background-color: vars.$colors-beige;
        color: vars.$colors-white;
        opacity: 1;
      }*/
    }

    &--selected {
      background-color: vars.$colors-beige;
    }
    

    &--firstSelected {
      --fillerLeft: 0;
      border-radius: vars.$br-xs 0 0 vars.$br-xs;
      @include withPseudoAfter((
        transform: rotate(180deg),
        right: 0,
      ));
    }
    &--lastSelected {
      --fillerRight: 0;
      border-radius: 0 vars.$br-xs vars.$br-xs 0;
      @include withPseudoBefore((
        left: 0,
      ));
    }
    &--firstSelected,
    &--lastSelected {
      background-color: vars.$colors-greyLight;
      --fillerWidth: 31px;
      --fillerBackgroundColor: #{vars.$colors-beige};
      &::before,
      &::after {
        width: 12px;
        height: 36px;
        clip-path: vars.$figures-selectedDateArrow;
        background-color: vars.$colors-beige;
      }
    }
    &--inactive {
      --dayNumColor: #{vars.$colors-beigeMuted};
      background-color: transparent;
      cursor: default;
      pointer-events: none;
    }
  }
  &__filler {
    @include absolute((
      right: var(--fillerRight, unset),
      left: var(--fillerLeft, unset),
    ));
    height: 100%;
    display: block;
    width: var(--fillerWidth);
    background-color: var(--fillerBackgroundColor);
    border-radius: var(--fillerBorderRadius);
  }
  &__dayNum {
    @include fullsize;
    @include centeredFlex;
    color: var(--dayNumColor);
    z-index: 1;
  }
  &__filler,
  &__dayNum {
    opacity: var(--dayOpacity);
  }
}
</style>
