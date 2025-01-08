<script setup lang="ts">
import {
  EIcons, EIconsSizes, EButtons,
} from '~/components/base';
import {
  mockText, mockEventsBigData, mockGalleryImages, mockReviews,
} from '~/assets/mocks';
import { GAMES_OPTIONS } from './constants/events';


const activeIndex = ref(0);
const displayCustom = ref(false);
const responsiveOptions = ref([
  {
    breakpoint: '1500px',
    numVisible: 5,
  },
  {
    breakpoint: '1024px',
    numVisible: 3,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
  },
]);

const openEventsCalendar = () => {};

const handleEventRequestSubmit = () => {};

const $b = useBem('MainPage');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section', bMod('general'))")
    div(:class="$b('generalDataContainer')")
      div
        h1
          span
            | Что такое
          span
            | Резиденция?
        div
          | {{ mockText() }}
      div(:class="$b('topButtonsContainer')")
        BaseButton(:type="EButtons.WELCOME_BEGINNING")
        BaseButton(:type="EButtons.DETAILS")
  section(:class="$b('section', bMod('founder'))")
    PAvatar(
      size="xlarge"
      shape="circle"
      :class="$b('founderAvatar')"
    )
    div(:class="$b('founderData')")
      div
        h2
          | Никита Цуканов
        span
          | Основатель Резиденции
      div
        BaseIcon(
          :size="EIconsSizes.XL"
          :type="EIcons.TELEGRAM"
        )
        BaseIcon(
          :size="EIconsSizes.XL"
          :type="EIcons.INSTAGRAM"
        )
  section(:class="$b('section', bMod('gallery'))")
    h2
      | Посмотрите на наши ивенты!
    PGalleria(
      v-model:activeIndex="activeIndex"
      v-model:visible="displayCustom"
      :value="mockGalleryImages(10)"
      :responsive-options="responsiveOptions"
      :num-visible="7"
      container-style="max-width: 850px"
      :circular="true"
      :full-screen="true"
      :show-item-navigators="true"
      :show-thumbnails="false"
    )
      template(#item="slotProps")
        img(
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        )
      template(#thumbnail="slotProps")
        img(
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        )
        span
          | {{ slotProps }}
    PCarousel(
      :value="mockGalleryImages(10)"
      :num-visible="3"
      :num-scroll="3"
    )
      template(#item="slotProps")
        img(
          :src="slotProps.data.thumbnailImageSrc"
          :alt="slotProps.data.alt"
          style="cursor: pointer"
        )
  section(:class="$b('section', bMod('events'))")
    h2
      | Ближайшие ивенты
    EventsList(
      :tabs-list="['Игры', 'Поездки', 'Встречи', 'Kids', 'Women']"
      :events-data="mockEventsBigData(5, 6)"
      :events-on-page-amount="6"
    )
    BaseButton(
      :type="EButtons.EVENTS_CALENDAR"
      @click="openEventsCalendar"
    )
  section(:class="$b('section', bMod('reviews'))")
    h2
      | Отзывы
    div(:class="$b('reviewsContainer')")
      UserReview(
        v-for="(reviewData, i) of mockReviews(3)"
        :key="`review_${i}`"
        v-bind="reviewData"
      )
  RequestForm(
    title="Хотите заказать игру?"
    subtext="Оставьте заявку - мы напишем!"
    request-text-placeholder="Опишите пожелания на игру"
    :button-type="EButtons.REQUEST_EVENT"
    :select-options="GAMES_OPTIONS"
    @submit="handleEventRequestSubmit"
  )
</template>

<style lang="scss">
.MainPage {
  @include centeredFlexColumn((gap: 4rem));
  padding-left: 80px;
  padding-right: 80px;
  &__section {
    width: 100%;
    max-width: 1280px;
    &--reviews,
    &--gallery,
    &--events {
      @include flexColumn((gap: 26px));
    }
    &--general {
      @include flex((justify-content: flex-end));
      width: 100%;
      max-width: 1280px;
      height: 720px;
      padding: 12px;
      border-radius: 2rem;
      background-color: vars.$colors-greyLight;
      &_mobile {
        justify-content: center;
        align-items: flex-end;
        padding: 8px;
        height: 470px;
      }
    }
    &--founder {
      @include centeredFlex((gap: 1.5rem));
    }
    &--events {
      & button {
        max-width: 357px;
        align-self: center;
      }
    }
  }
  &__generalDataContainer {
    @include flexColumn((justify-content: space-between));
    width: 560px;
    padding: 54px 48px 60px 48px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-xl;
    & > div:first-child {
      @include flexColumn((gap: 1rem));
    }
    & h1 {
      @include flexColumn((gap: 4px));
      & > span:last-child  {
        color: vars.$colors-beige;
      }
    }
  }
  &__topButtonsContainer {
    @include centeredFlex((gap: 16px));
    & > button {
      width: 50%;
    }
  }
  &__founderAvatar {
    border: 6px solid vars.$colors-beige;
  }
  &__founderData {
    @include flexColumn((gap: 1.5rem));
    & > div:first-child {
      & > span {
        display: block;
        margin-top: 4px;
        font-size: vars.$fs-m;
        color: vars.$colors-greyMuted;
      }
    }
    & > div:last-child {
      @include flex((gap: 20px));
    }
  }
  &__galleryPreview {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
  &__eventsCardsContainer {
    @include flex((gap: 40px, flex-wrap: wrap));
  }
  &__reviewsContainer {
    @include flex((gap: 40px));
  }
}

@include mobile {
  .Main {
    &__section {
      &--general {
        justify-content: center;
        align-items: flex-end;
        padding: 8px;
        height: 470px;
        border-radius: vars.$br-l;
      }
    }
    &__generalDataContainer {
      flex-direction: column;
      gap: 16px;
      padding: 12px;
      width: 100%;
      border-radius: vars.$br-m;
    }
    &__eventsCardsContainer {
      flex-direction: column;
      width: 100%;
    }
    &__reviewsContainer {
      flex-direction: column;
    }
  }
}
</style>
