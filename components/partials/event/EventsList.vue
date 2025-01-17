<script setup lang="ts">
import { EIcons } from '~/components/base';


/** Local Types & Variables */
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
const selectedDate = ref<any>('');

const eventType = ref<'kid' | 'women' | ''>('');

const activeEvents = computed(() => {
  const activeTabIndex = tabsList.findIndex(({ id }) => id === activeTab.value);
  return eventsData[activeTabIndex];
});
const { isMobile } = useDevice();

const { page, itemsAmount, displayedItems } = usePagination(activeEvents, eventsOnPageAmount);

const $b = useBem();

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
      div(
        v-if="withCalendar && isMobile"
        :class="$b('mobileCalendar')"
      )
        | Выбрать дату
        BaseIcon(:type="EIcons.CALENDAR")
      BaseRadios(
        v-if="filters?.length"
        v-model="eventType"
        is-resettable
        :options="filters"
      )
      Calendar(
        v-if="withCalendar && !isMobile"
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
  }
  &__eventsCardsContainer {
    @include flex((gap: 40px, flex-wrap: wrap));
    padding: 28px 0;
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
    &__mobileCalendar {
      @include flex((justify-content: space-between, align-items: center));
      height: 40xp;
      background-color: vars.$colors-white;
      font-size: 16px;
      font-weight: vars.$fw-bold;
      margin-bottom: 16px;
      padding: 10px 16px;
      border-radius: vars.$br-xs;
    }
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
  }
}
</style>
