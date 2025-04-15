<script setup lang="ts">
type Props = {
  eventsData: EventData[][];
  eventsOnPageAmount: number;
  withCalendar?: boolean;
  withPagination?: boolean;
};


const {
  eventsData,
  eventsOnPageAmount,
  withCalendar,
  withPagination,
} = defineProps<Props>();

const TABS_LIST: TabData[] = [
  { label: 'Мафия', id: 'mafia' },
  { label: 'Игротеки', id: 'tabletop' },
  { label: 'Dungeons & Dragons', id: 'dnd' },
  { label: 'Путешествия', id: 'travel' },
  { label: 'Women', id: 'womenEvents' },
  { label: 'Покер', id: 'poker' },
  { label: 'Активности', id: 'activity' },
  { label: 'Вечеринки', id: 'party' },
];
const activeTab = ref<string>(TABS_LIST[0].id);

const selectedDate = ref<CalendarDate>(null);

const activeEvents = computed<EventData[]>(() => {
  const activeTabIndex = TABS_LIST.findIndex(({ id }) => id === activeTab.value);
  return eventsData[activeTabIndex];
});

const { page, itemsAmount, displayedItems } = usePagination(activeEvents, eventsOnPageAmount);

const $b = useBEM('EventsList');

watch(activeTab, () => {
  page.value = 0;
});
</script>

<template lang="pug">
div(:class="$b({ calendar: withCalendar })")
  RzdTabs(
    v-model:tab="activeTab"
    :tabs="TABS_LIST"
  )
    template(#tabsCommon)
      DateTimeCalendar(
        v-if="withCalendar"
        v-model:date="selectedDate"
        :class="$b('calendar')"
      )
    template(#tab)
      div(:class="$b('eventsCardsContainer')")
        EventCard(
          v-for="(data, j) in displayedItems"
          :key="`eventData_${j}`"
          show-subscription
          coloring="light"
          mode="full"
          :label="data.isSubscriptionWorks ? 'Действует абонемент' : ''"
          :event-data="data"
        )
  RzdPagination(
    v-if="withPagination"
    v-model:page="page"
    :amount-on-page="eventsOnPageAmount"
    :items-amount="itemsAmount"
  )
</template>

<style lang="scss">
$paddingTop: 6px;

.EventsList {
  --cards-container-max-width: initial;
  --rzd-card-maxwidth: 400px;
  --rzd-card-height: 394px;
  &--calendar {
    --cards-container-max-width: 932px;
    --rzd-card-maxwidth: 446px;
  }
  &__eventsCardsContainer {
    @include flex((gap: 40px, flex-wrap: wrap));
    padding: $paddingTop 0 26px;
    min-height: 340px;
    max-width: var(--cards-container-max-width);
  }
  &__calendar {
    @include absolute((right: 0, top: calc(20px + #{$paddingTop})));
  }
}

@include mobile {
  .EventsList {
    --rzd-card-maxwidth: unset;
    &__filtersContainer {
      flex-direction: column;
      & > div {
        &:first-of-type {
          border-right: none;
          border-bottom: 1px solid vars.$colors-black;
        }
        &:last-of-type {
          border-left: none;
          border-top: 1px solid vars.$colors-black;
        }
      }
    }
    &__eventsCardsContainer {
      flex-direction: column;
      width: 100%;
    }
    &__calendar {
      margin-bottom: 14px;
      position: static;
    }
  }
}
</style>
