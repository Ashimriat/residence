<script setup lang="ts">
import {
  EIcons, EIconsSizes, EButtons,
} from '~/components/base';
import {
  mockText, mockEventsBigData, mockGalleryImages, mockReviews,
} from '~/assets/mocks';
import { GAMES_OPTIONS } from './constants/events';


const aboutRef = useTemplateRef<HTMLDivElement>('about');



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

const tabsList: TabData[] = [
  { label: 'Игры', id: 'games'},
  { label: 'Поездки', id: 'trips' },
  { label: 'Встречи', id: 'meets' },
  { label: 'Kids', id: 'kids' },
  { label: 'Women', id: 'women' },
];

const { isMobile } = useDevice();

function goToDetails(): void {
  aboutRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
}

const $b = useBEM('MainPage');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section', ['general'])")
    BaseCard(:type="isMobile ? 'vertical' : 'horizontal'")
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
          BaseButton(
            :type="EButtons.WELCOME_BEGINNING"
            @click="goToDetails"
          )
  section(
    ref="about"
    :class="$b('section', ['founder'])"
  )
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
          :size="isMobile ? EIconsSizes.L : EIconsSizes.XL"
          :type="EIcons.TELEGRAM"
        )
        BaseIcon(
          :size="isMobile ? EIconsSizes.L : EIconsSizes.XL"
          :type="EIcons.INSTAGRAM"
        )
  section(:class="$b('section', ['gallery'])")
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
  section(:class="$b('section', ['events'])")
    h2
      | Ближайшие ивенты
    EventsList(
      :tabs-list="tabsList"
      :events-data="mockEventsBigData(5, 6)"
      :events-on-page-amount="6"
    )
    BaseButton(
      :type="EButtons.EVENTS_CALENDAR"
      @click="openEventsCalendar"
    )
  section(:class="$b('section', ['reviews'])")
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

  --generalCardHeight: 720px;


  &__section {
    width: 100%;
    max-width: 1280px;
    &--reviews,
    &--gallery,
    &--events {
      @include flexColumn((gap: 26px));
    }
    &--general {
      --cardMinWidth: 100%;
      --cardHeight: var(--generalCardHeight);
      --cardPadding: 12px;
      --cardBorderRadius: #{vars.$br-x2l};
      --cardContentBorderRadius: #{vars.$br-xl};
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
    height: 100%;
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
      width: 100%;
    }
  }
  &__founderAvatar {
    border: 6px solid vars.$colors-beige;
    --avatarSize: 12rem;
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
      @include flex((gap: #{vars.$gaps-adaptive-s}));
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
  .MainPage {
    --generalCardHeight: 470px;

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
