<script setup lang="ts">
type Props = {
  tabsList: TabData[];
  eventsData: EventData[][];
  filters?: RadioOption[];
  eventsOnPageAmount: number;
  withCalendar?: boolean;
  withPagination?: boolean;
};


/** Props & Emits */
const {
  tabsList,
  eventsData,
  filters,
  eventsOnPageAmount,
  withCalendar,
  withPagination
} = defineProps<Props>();
const activeTab = ref<string>(tabsList[0].id);

const { selectedDate } = useCalendar();

const eventType = ref<'kid' | 'women' | ''>('');

const activeEvents = computed(() => {
  const activeTabIndex = tabsList.findIndex(({ id }) => id === activeTab.value);
  return eventsData[activeTabIndex];
});

const { page, itemsAmount, displayedItems } = usePagination(activeEvents, eventsOnPageAmount);

const $b = useBEM('EventsList');

watch(activeTab, () => {
  page.value = 1;
});
</script>

<template lang="pug">
div(:class="$b({ calendar: withCalendar })")
  BaseTabs(
    v-model:tab="activeTab"
    :tabs="tabsList"
  )
    template(#tabsCommon)
      BaseRadios(
        v-if="filters?.length"
        v-model="eventType"
        is-resettable
        :options="filters"
      )
      DateTimeCalendar(
        v-if="withCalendar"
        v-model:date="selectedDate"
        :class="$b('calendar')"
      )
    template(#commonTab)
      div(:class="$b('eventsCardsContainer', { calendar: withCalendar })")
        EventCard(
          v-for="(data, j) in displayedItems"
          :key="`eventData_${j}`"
          :event-data="data"
          :class="$b('eventCard', { calendar: withCalendar })"
        )
  BasePagination(
    v-if="withPagination"
    v-model:page="page"
    :amount-on-page="eventsOnPageAmount"
    :items-amount="itemsAmount"
  )
</template>

<style lang="scss">
$paddingTop: 28px;

.EventsList {
  --cardMaxWidth: 400px;
  &--calendar {
    --cardsContainerMaxWidth: 932px;
    --cardMaxWidth: 446px;
    --cardMaxHeight: 394px;
    --cardContainerPaddingTop: 28px;
  }
  &__eventsCardsContainer {
    @include flex((gap: 40px, flex-wrap: wrap));
    padding: var(--cardContainerPaddingTop, 0) 0 28px;
    min-height: 340px;
    max-width: var(--cardsContainerMaxWidth, initial);
  }
  &__calendar {
    @include absolute((right: 0, top: calc(20px + 49px + 28px)));
  }
}

@include mobile {
  .EventsList {
    --cardMaxWidth: unset;
    --cardContainerPaddingTop: 0;
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
      margin: 16px 0;
      position: static;
    }
  }
}
</style>
