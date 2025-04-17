<script setup lang="ts">
import { deepmerge } from 'deepmerge-ts'
import { mockAchievementsList, mockEventsData,  mockSubscriptions } from '~/__mocks__';


const { isMobile } = usePlatform();
const { providedData } = storeToRefs(useUserStore())

const eventsMock = mockEventsData(12)
const achievementsMock = mockAchievementsList(isMobile ? 2 : 6)

const eventsData = computed<{ events: EventData[], title: string }[]>(() => [
  {
    events: mockEventsData(12),
    title: 'Предстоящие события',
  },
  {
    events: mockEventsData(12).map((ev) => deepmerge(ev, { gameData: { master: { id: providedData.value.id } } })),
    title: 'События, которые вы ведете'
  }
])

const $b = useBEM('UserEvents');
</script>

<template lang="pug">
div(:class="$b()")
  div(
    v-for="({ events, title }, i) of eventsData"
    :key="i"
    :class="$b('contentSection', ['events'])"
  )
    h5
      | {{ title }}
    RzdCarousel(
      v-slot="{ itemsData }"
      :items="events"
      :visible-amount="{ desktop: 4, mobile: 2 }"
      :class="$b('eventsCarousel')"
    )
      div(:class="$b('eventsContainer')")
        EventCard(
          v-for="(eventData, i) of itemsData"
          :key="`eventCard_${i}`"
          mode="light"
          coloring="grey"
          hide-label
          :event-data="eventData"
          :class="$b('eventData')"
        )
  div(
    v-if="false"
    :class="$b('contentSection')"
  )
    TitleWithLink(
      title="Все достижения"
      link="/account/achievements"
    )
      h5
        | Достижения
    AchievementsList(:list="achievementsMock")
  div(:class="$b('contentSection')")
    h5
      | Абонементы
    div(:class="$b('subscriptionsContainer')")
      EventSubscription(
        v-for="(data, i) of mockSubscriptions(2)"
        :key="`sub_${i}`"
        is-owned
        :data="data"
        :class="$b('subscription')"
      )
</template>

<style lang="scss">
@use 'sass:math';

$dotsGap: 4px;
$dotSize: 8px;
$dotsContainerSize: $dotSize * 3 + $dotsGap * 2;

.UserEvents {
  @include flex((justify-content: space-between, flex-wrap: wrap, gap: vars.$gaps-g16));

  --event-card-flex-basis: calc((100% - 16px) / 2);

  &__contentSection {
    @include flex-column((gap: 22px));
    padding: 20px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;
    flex-grow: 1;
    &--events {
      max-width: 100%;
    }
  }
  &__eventsCarousel {
    max-width: var(--eventsMaxWidth, 840px);
    align-self: center;
  }
  &__eventsContainer {
    @include flex((gap: vars.$gaps-g16, flex-wrap: wrap));
  }
  &__eventData {
    flex-basis: var(--event-card-flex-basis);
  }
  &__subscriptionsContainer {
    @include flex((flex-wrap: wrap, gap: vars.$gaps-g12));
    & > div {
      flex-basis: calc(50% - 6px);
    }
  }
  &__subscription {
    @include flex-column((gap: 16px));
    background-color: vars.$colors-greyLight;
    border-radius: vars.$br-s;
    padding: 20px;
    & > div:first-child {
      @include flex((justify-content: space-between));
    }
  }
}

@include mobile {
  .UserEvents {
    gap: vars.$gaps-g24;
    --event-card-flex-basis: 100%;
    --eventsMaxWidth: 100%;
  }
}
</style>
