<script setup lang="ts">
import {
  EIcons, EIconsSizes, EButtons,
} from '~/components/constants';
import {
  mockText, mockEventsBigData, mockGalleryImages, mockReviews,
} from '~/__mocks__';
import { LESSER_GAMES_OPTIONS } from '~/constants/events';


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


const openEventsCalendar = () => {
  navigateTo('/events');  
};

const handleEventRequestSubmit = () => {};

const { isMobile } = useDevice();

function goToDetails(): void {
  aboutRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
}

const $b = useBEM('MainPage');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section', ['general'])")
    RzdCard
      template(#content)
        div(:class="$b('generalDataContainer')")
          div(:class="$b('textContainer')")
            h1
              span
                | Что такое
              span
                | Резиденция?
            div(:class="$b('descriptionText')")
              | {{ mockText() }}
          div(:class="$b('topButtonsContainer')")
            RzdButton(
              :type="EButtons.WELCOME_BEGINNING"
              @click="goToDetails"
            )
  section(
    ref="about"
    :class="$b('section', ['founder'])"
  )
    RzdAvatar(
      size="xlarge"
      shape="circle"
      :class="$b('founderAvatar')"
    )
    div(:class="$b('founderDataContainer')")
      div(:class="$b('founderData')")
        h2
          | Никита Цуканов
        span
          | Основатель Резиденции
      div(:class="$b('founderContacts')")
        RzdIcon(
          is-adaptive
          :size="EIconsSizes.XL"
          :type="EIcons.TELEGRAM"
        )
        RzdIcon(
          is-adaptive
          :size="EIconsSizes.XL"
          :type="EIcons.INSTAGRAM"
        )
  section(:class="$b('section', ['gallery'])")
    h2
      | Посмотрите на наши ивенты!
    PGalleria(
      v-model:active-index="activeIndex"
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
      template(#item="{ data }")
        img(
          :src="data.thumbnailImageSrc"
          :alt="data.alt"
          style="cursor: pointer"
        )
  section(:class="$b('section', ['events'])")
    h2
      | Ближайшие ивенты
    EventsList(
      :events-data="mockEventsBigData(5, 6)"
      :events-on-page-amount="6"
    )
    RzdButton(
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
    :select-options="LESSER_GAMES_OPTIONS"
    @submit="handleEventRequestSubmit"
  )
</template>

<style lang="scss">
.MainPage {
  @include centered-flex-column((gap: vars.$gaps-adaptive-l));

  --generalCardHeight: 720px;


  &__section {
    width: 100%;
    max-width: 1280px;
    &--reviews,
    &--gallery,
    &--events {
      @include flex-column((gap: vars.$gaps-g24));
    }
    &--general {
      --rzd-card-minwidth: 100%;
      --rzd-card-height: var(--generalCardHeight);
      --rzd-card-border-radius: #{vars.$br-xl};
      --rzd-card-content-border-radius: #{vars.$br-xl};
    }
    &--founder {
      @include centered-flex((gap: vars.$gaps-adaptive-m));
    }
    &--events {
      & button {
        align-self: center;
      }
    }
  }
  &__generalDataContainer {
    @include flex-column((justify-content: space-between));
    width: 560px;
    padding: 54px 48px 60px 48px;
    height: 100%;
  }
  &__textContainer {
    @include flex-column((gap: 1rem));
    & > h1 {
      @include flex-column((gap: 4px));
      & > span:last-child  {
        color: vars.$colors-beige;
      }
    }
  }
  &__descriptionText {
    color: vars.$colors-black;
    font: vars.$fonts-textM;
  }
  &__topButtonsContainer {
    @include centered-flex((gap: vars.$gaps-g16));
    & > button {
      width: 50%;
    }
  }
  &__founderAvatar {
    border: 6px solid vars.$colors-beige;
    --rzd-avatar-size: 240px;
  }
  &__founderDataContainer {
    @include flex-column((gap: vars.$gaps-g28));
  }
  &__founderData {
    @include flex-column((gap: vars.$gaps-g8));
    & > span {
      display: block;
      margin-top: 4px;
      color: vars.$colors-greyMuted;
      font: var(--font-text-bold-l);
    }
  }
  &__founderContacts {
    @include flex((gap: #{vars.$gaps-adaptive-s}));
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
        height: 470px;
        --rzd-card-border-radius: #{vars.$br-l};
      }
    }
    &__generalDataContainer {
      flex-direction: column;
      gap: vars.$gaps-g16;
      padding: 12px;
      width: 100%;
      border-radius: vars.$br-m;
    }

    &__textContainer {
      text-align: center;
      & > h1 > span:first-child {
        @include relative((left: -5px));
      }
    }

    &__descriptionText {
      font: vars.$fonts-textS;
    }

    &__founderAvatar {
      --rzd-avatar-size: 120px;
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
