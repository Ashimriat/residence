<script setup lang="ts">
import { mockAchievementsList, mockEventsBigData, mockSubscriptions } from '~assets/mocks';

const $b = useBem();
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('contentSection')")
    h5
      | Предстоящие события
    PCarousel(
      :value="mockEventsBigData(3, 4)"
      :num-visible="1"
      :num-scroll="1"
      :class="$b('carousel')"
    )
      template(#item="{ data }")
        div(:class="$b('eventsPageContainer')")
          EventInfo(
            v-for="(eventData, i) of data"
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
    AchievementsList(:list="mockAchievementsList(6)")
  div(:class="$b('contentSection')")
    h5
      | Абонементы
    div(:class="$b('subscriptionsContainer')")
      div(
        v-for="({ name, price, description }, i) of mockSubscriptions(2)"
        :key="`sub_${i}`"
        :class="$b('subscription')"
      )
        div
          h5
            | {{ name }}
          PriceTag(:value="price")
        div
          | {{ description }}
</template>

<style lang="scss">
@use 'sass:math';

$dotsGap: 4px;
$dotSize: 8px;
$dotsContainerSize: $dotSize * 3 + $dotsGap * 2;
$pageButtonSize: 16px;
$pageButtonDotsGap: 18px;
$pageButtonOffset: $pageButtonSize + $pageButtonDotsGap;
$carouselMaxWidth: 800px;


.UserEvents {
  @include flex((justify-content: space-between, flex-wrap: wrap, gap: 1rem));
  &__contentSection {
    @include flexColumn((gap: 1.4rem));
    padding: 20px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;
  }
  &__carousel {
    @include relative;
    max-width: $carouselMaxWidth;
    & .p-carousel-content-container {
      @include relative;
      gap: 1.6rem;
    }
    & .p-carousel-indicator-list {
      flex-direction: row;
      height: 24px;
      align-items: center;
    }
    & .p-carousel-indicator-button {
      width: $dotSize;
      height: $dotSize;
      border-radius: 50%;
      --p-carousel-indicator-background: #{vars.$colors-greyMuted};
      --p-carousel-indicator-active-background: #{vars.$colors-black};
    }
    & .p-carousel-prev-button,
    & .p-carousel-next-button {
      @include absolute((bottom: math.div($pageButtonSize, 4)));
      padding: 0;
      width: $pageButtonSize;
      height: $pageButtonSize;
      border: none;
    }
    & .p-carousel-prev-button {
      left: calc(50% - #{$pageButtonOffset});
    }
    & .p-carousel-next-button {
      right: calc(50% - #{$pageButtonOffset} * 2);
    }
  }
  &__eventsPageContainer {
    @include flex((gap: 16px, flex-wrap: wrap));
    max-width: $carouselMaxWidth;
  }
  &__eventData {
    flex-basis: 49%;
    gap: vars.$gaps-xs;
  }
  &__subscriptionsContainer {
    @include flex((flex-wrap: wrap, gap: 0.8rem));
  }
  &__subscription {
    @include flexColumn((gap: 1rem));
    background-color: vars.$colors-greyLight;
    border-radius: vars.$br-s;
    padding: 20px;
    flex-basis: calc(50% - 0.4rem);
    & > div:first-child {
      @include flex((justify-content: space-between));
    }
    & > div:last-child {
      font-size: vars.$fs-s;
    }
  }
}
</style>
