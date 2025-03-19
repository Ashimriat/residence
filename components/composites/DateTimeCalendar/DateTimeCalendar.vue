<script setup lang="ts">
import { Temporal } from '@js-temporal/polyfill';
import { EIcons, EIconsSizes } from '~/components/constants';
import { DISPLAYED_DAYS_AMOUNT, MONTHS, WEEK_DAYS } from './constants';


type CalendarDay = {
  day: number;
  isInactiveMonth?: boolean;
};
export type CalendarDate = {
  start: Temporal.PlainDate;
  end?: Temporal.PlainDate;
} | null;
export type Time = string;

type Props = {
  asDesktop?: boolean;
  isDisabled?: boolean;
};


const { asDesktop, isDisabled } = defineProps<Props>();


const selectedDate = defineModel<CalendarDate>('date', { required: true });
const selectedTime = defineModel<string>('time', { default: null });

const { isMobile } = useDevice();
const { closeModal, showMobileCalendar } = useModalDialog();

const selectedDateTimeLabel = computed<string>(() => {
  if (!selectedDate.value) return `Выбрать дату${withTimeSelect.value ? ' и время' : ''}`;
  const { start, end } = selectedDate.value;
  let res = `${dNumber(start.day)}.${dNumber(start.month)}`;
  if (end) {
    res += ` - ${dNumber(end.day)}.${dNumber(end.month)}`;
  }
  if (selectedTime.value) {
    res += ` ${selectedTime.value}`;
  }
  return res;
});

function openOnMobile(): void {
  showMobileCalendar({
    withTimeSelect: withTimeSelect.value,
    onSelect: (date: NonNullable<CalendarDate>, time: Time) => {
      selectedDate.value = date;
      selectedTime.value = time;
      closeModal();
    },
  });
}

const processedDate = ref<Temporal.PlainDate>(
  Temporal.Now.instant().toZonedDateTimeISO(Temporal.Now.timeZoneId()).toPlainDate()
);

const withTimeSelect = computed<boolean>(() => selectedTime.value !== null);

const days = computed<CalendarDay[]>(() => {
  const res: CalendarDay[] = [];
  // prvM = previousMonth
  const prvMLastDayDate = processedDate.value
    .subtract({ days: processedDate.value.day });
  // prM = processedMonth
  const prMFirstDayDate = prvMLastDayDate.add({ days: 1 });
  if (prMFirstDayDate.dayOfWeek !== 1) {
    let prvMDate = prvMLastDayDate;
    for (let i = prvMDate.dayOfWeek; i > 0; i -= 1) {
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
  if (
    withTimeSelect.value
    || !selectedDate.value
    || selectedDate.value.end
  ) {
    selectedDate.value = { start: daysAddedDate };
  } else if (day === selectedDate.value.start.day) {
    selectedDate.value = null;
  } else {
    selectedDate.value.end = daysAddedDate;
  }
}

function setSelectedTime(time: string): void {
  selectedTime.value = time;
}

const TIME_SLOTS = Array.from(({ length: 23 }), (_, i) => `${i}:30`);
const $b = useBEM('DateTimeCalendar');
</script>

<template lang="pug">
div(
  v-if="isMobile && !asDesktop"
  :class="$b(['mobile'], { disabled: isDisabled })"
  @click="openOnMobile"
)
  | {{ selectedDateTimeLabel }}
  RzdIcon(:type="EIcons.CALENDAR")
div(
  v-else
  :class="$b(['desktop'], { disabled: isDisabled })"
)
  div(:class="$b('header')")
    div(:class="$b('processedDate')")
      span
        | {{ MONTHS[processedDate.month - 1] }}
      span
        | {{ processedDate.year }}
      RzdIcon(
        is-clickable
        :type="EIcons.CALENDAR_PREV_MONTH"
        :size="EIconsSizes.S"
        @click="changeMonth(-1)"
      )
      RzdIcon(
        is-clickable
        :type="EIcons.CALENDAR_NEXT_MONTH"
        :size="EIconsSizes.S"
        @click="changeMonth(1)"
      )
    div(
      v-if="selectedDate"
      :class="$b('selectedDate')"
    )
      RzdIcon(
        is-clickable
        :type="EIcons.CROSS"
        :size="EIconsSizes.S"
        @click="resetSelectedDate"
      )
      span
        | {{ selectedDateTimeLabel }}
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
  RzdScrollPanel(
    v-if="withTimeSelect && selectedDate"
    :gap="8"
    :items-in-row="3"
    :class="$b('timeSlotsList')"
  )
    div(
      v-for="(timeSlot, i) of TIME_SLOTS"
      :key="i"
      :class="$b('timeSlot', { selected: timeSlot === selectedTime })"
      @click="setSelectedTime(timeSlot)"
    )
      | {{ timeSlot }}
</template>

<style lang="scss">
.DateTimeCalendar {
  min-width: 320px;
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
  &--disabled {
    opacity: 0.5;
    pointer-events: none;
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
  &__timeSlotsList {
    --scrollPanelBackgroundColor: #{vars.$colors-black};
    --scrollPanelPadding: 16px 8px 16px 20px;
    height: 196px;
    border-radius: vars.$br-s;
    background-color: vars.$colors-black;
  }
  &__timeSlot {
    @include centeredFlex;
    border: 2px solid vars.$colors-white;
    border-radius: vars.$br-xs;
    font-size: vars.$fs-static-m;
    background-color: var(--timeSlotBackgroundColor, transparent);
    color: var(--timeSlotColor, #{vars.$colors-white});
    max-width: 77px;
    height: 40px;
    cursor: pointer;
    &:hover,
    &--selected {
      --timeSlotBackgroundColor: #{vars.$colors-white};
      --timeSlotColor: #{vars.$colors-black};
    }
    &--selected {
      cursor: default;
      pointer-events: none;
    }
  }
}
</style>
