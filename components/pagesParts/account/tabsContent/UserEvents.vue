<script setup lang="ts">
import { mockAchievementsList, mockEventsData,  mockSubscriptions } from '~/__mocks__';


const { isMobile } = usePlatform();

const eventsMock = mockEventsData(12)
const achievementsMock = mockAchievementsList(isMobile ? 2 : 6)

const $b = useBEM('UserEvents');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('contentSection', ['events'])")
    h5
      | Предстоящие события
    RzdCarousel(
      v-slot="{ itemsData }"
      :items="eventsMock"
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
  @include flex((justify-content: space-between, flex-wrap: wrap, gap: 1rem));

  --event-card-flex-basis: calc((100% - 16px) / 2);

  &__contentSection {
    @include flex-column((gap: 1.4rem));
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
    @include flex((flex-wrap: wrap, gap: 0.8rem));
    & > div {
      flex-basis: calc(50% - 0.4rem);
    }
  }
  &__subscription {
    @include flex-column((gap: 1rem));
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
    --event-card-flex-basis: 100%;
    --eventsMaxWidth: 100%;
  }
}
</style>
