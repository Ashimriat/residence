<script setup lang="ts">
import {
  EIcons, EIconsSizes, EButtons,
} from '~/components/constants';
import {
  mockText, mockEventsBigData, mockGalleryImages, mockReviews,
} from '~/__mocks__';
import { LESSER_GAMES_OPTIONS } from '~/constants/events';


const aboutRef = useTemplateRef<HTMLDivElement>('about');

const { platform, isDesktop } = usePlatform()

const galleryConfig = {
  height: isDesktop ? 280 : 152,
  itemsToShow: 'auto',
  gap: isDesktop ? 20 : 10,
  preventExcessiveDragging: true,
  wrapAround: true,
  pauseAutoplayOnHover: true,
}

const imagesMock = mockGalleryImages(6);
const galleriesImages = [imagesMock, imagesMock];
const $b = useBEM('MainPage');


function handleEventRequestSubmit() {
  console.log('Event Request submit');
}

function isSmallGalleryImage(galleryIndex: number, slideIndex: number): boolean {
  const lastGalleryCondition = slideIndex === 1 || (slideIndex !== 0 && slideIndex % 2 === 0);
  return {
    desktop: [
      slideIndex > 0 && slideIndex % (galleriesImages[0].length - 1) === 0,
      lastGalleryCondition,
    ],
    mobile: [
      slideIndex % 3 === 0,
      lastGalleryCondition,
    ]
  }[platform][galleryIndex];
}

function goToDetails(): void {
  aboutRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
}
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
    //- @TODO: возможно, стоит вынести как отдельный компонент
    div(:class="$b('galleriesContainer')")
      RzdGalleryCarousel(
        v-for="(images, i) of galleriesImages"
        :key="`gallery-${i}`"
        v-bind="galleryConfig"
        :autoplay="i === 0 ? 3_000 : 5_000"
      )
        RzdGallerySlide(
          v-for="({ id, image, alt }, j) of images"
          :key="id"
          :class="$b('gallerySlide')"
          :data-index="j"
        )
          div(:class="$b('galleryImageContainer', { small: isSmallGalleryImage(i, j) })")
            img(
              :src="image"
              :alt
              :class="$b('galleryImage')"
            )
  section(:class="$b('section', ['events'])")
    h2
      | Ближайшие ивенты
    EventsList(
      :events-data="mockEventsBigData(5, 6)"
      :events-on-page-amount="6"
    )
    RzdLinkButton(
      :type="EButtons.EVENTS_CALENDAR"
      link="/events"
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

  --gallery-section-overflow-clip-margin: 10vw;
  --gallery-image-big: 480px;
  --gallery-image-small: 280px;
  --general-section-card-height: 720px;


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
      --rzd-card-height: var(--general-section-card-height);
      --rzd-card-border-radius: #{vars.$br-xl};
      --rzd-card-content-border-radius: #{vars.$br-xl};
    }
    &--founder {
      @include centered-flex((gap: vars.$gaps-adaptive-m));
    }
    &--gallery {
      align-items: center;
      overflow: clip;
      overflow-clip-margin: var(--gallery-section-overflow-clip-margin);
      & > h2 {
        width: 100%;
        text-align: left;
      }
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
    @include flex-column((gap: vars.$gaps-g16));
    & > h1 {
      @include flex-column((gap: vars.$gaps-g4));
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
    @include flex-column((gap: vars.$gaps-g12));
    & > span {
      display: block;
      color: vars.$colors-greyMuted;
      font: var(--font-text-bold-l);
    }
  }
  &__founderContacts {
    @include flex((gap: #{vars.$gaps-adaptive-s}));
  }
  &__galleriesContainer {
    @include flex-column((
      justify-content: center,
      gap: vars.$gaps-g20,
    ));
    width: 100vw;
  }
  &__galleryImageContainer {
    height: 100%;
    width: var(--gallery-image-big);
    &--small {
      width: var(--gallery-image-small);
    }
  }
  &__galleryImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    --general-section-card-height: 470px;
    --gallery-section-overflow-clip-margin: 24px;
    --gallery-image-big: 268px;
    --gallery-image-small: 152px;

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
      align-items: center;
    }
  }
}
</style>
