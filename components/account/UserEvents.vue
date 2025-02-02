<script setup lang="ts">
import { mockAchievementsList, mockEventsData, mockEventsBigData, mockSubscriptions } from '~assets/mocks';


const { isMobile } = useDevice();

const eventsMock = isMobile
  ? mockEventsBigData(6, 2)
  : mockEventsData(12)
console.log("OLD", mockEventsBigData(3, 4));
const achievementsMock = mockAchievementsList(isMobile ? 2 : 6)

const $b = useBEM('UserEvents');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('contentSection', ['events'])")
    h5
      | Предстоящие события
    BaseCarousel(
      :items="eventsMock"
      :visible-amount="4"
    )
      template(#default="{ itemsData }")
        div(:class="$b('eventsPageContainer')")
          EventInfo(
            v-for="(eventData, i) of itemsData"
            :key="`eventCard_${i}`"
            is-account-mode
            :data="eventData"
            :with-abon="false"
            :class="$b('eventData')"
          )
  div(:class="$b('contentSection')")
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
      Subscription(
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
$carouselMaxWidth: 800px;


.UserEvents {
  @include flex((justify-content: space-between, flex-wrap: wrap, gap: 1rem));
  &__contentSection {
    @include flexColumn((gap: 1.4rem));
    padding: 20px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;
    flex-grow: 1;
    &--events {
      max-width: var(--eventsMaxWidth, 840px);
    }
  }
  &__eventsPageContainer {
    @include flex((gap: vars.$gaps-g16, flex-wrap: wrap));
    max-width: $carouselMaxWidth;
  }
  &__eventData {
    flex-basis: calc((100% - 16px) / 2);
    gap: vars.$gaps-g8;
    flex-grow: 1;
  }
  &__subscriptionsContainer {
    @include flex((flex-wrap: wrap, gap: 0.8rem));
    & > div {
      flex-basis: calc(50% - 0.4rem);
    }
  }
  &__subscription {
    @include flexColumn((gap: 1rem));
    background-color: vars.$colors-greyLight;
    border-radius: vars.$br-s;
    padding: 20px;
    & > div:first-child {
      @include flex((justify-content: space-between));
    }
    & > div:last-child {
      font-size: vars.$fs-s;
    }
  }
}

@include mobile {
  .UserEvents {
    --eventsMaxWidth: 100%;
  }
}
</style>
