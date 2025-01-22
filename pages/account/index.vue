<script setup lang="ts">
import {
  EButtons,
  EIcons,
  EIconsSizes,
} from '~/components/base';
import { TABS, GAMES_ICONS } from '../constants/account';

const activeTab = ref<string>(TABS[0].id);

const route = useRoute();
const router = useRouter();

function setActiveTab(tab: string): void {
  activeTab.value = tab;
}


const $b = useBEM('AccountPage');

onMounted(async () => {
  let { tab } = route.query;
  if (!tab) {
    tab = TABS[0].id;
    router.push({ path: route.path, query: { tab }});
  }
  activeTab.value = tab as string;
})
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section', ['user'])")
    div(:class="$b('subsection', ['data'])")
      div(:class="$b('userDataWrapper')")
        PAvatar(
          label="UI"
          :class="$b('avatar')"
        )
        div(:class="$b('userData')")
          div(:class="$b('dataContainer')")
            | Никита
            span(:class="$b('userTitle')")
              | Постоялец
          div(:class="$b('dataContainer')")
            BaseIcon(
              :type="EIcons.GIFT"
              :size="EIconsSizes.S"
            )
            span
              | 11.01.2000
          div(:class="$b('dataContainer')")
            span
              | Топ #1
            span
              | Рейтинг 24600
            span
              | 300 баллов
      NuxtLink(to="/account/settings")
        BaseButton(
          :type="EButtons.USER_SETTINGS"
          :icon-size="EIconsSizes.S"
          :class="$b('settingsButton')"
        )
    div(:class="$b('subsection', ['rating'])")
      TitleWithLink(
        title="Рейтинг"
        link="/account/rating"
      )
        div(:class="$b('commonRatingContainer')")
          div(:class="$b('userRating')")
            | {{ 'Ваш рейтинг - ' }}
            span
              | 24600
      div(:class="$b('gamesRatingContainer')")
        div(
          v-for="(icon, i) of GAMES_ICONS"
          :key="`gameIcon_${i}`"
          :class="$b('gameRating')"
        )
          component(:is="icon")
          span
            | 6150
  section(:class="$b('section', ['content'])")
    div(:class="$b('tabsContainer')")
      div(
        v-for="({ id, label, icon }) of TABS"
        :key="id"
        :class="$b('tab', { active: id === activeTab })"
        @click="setActiveTab(id)"
      )
        BaseIcon(:type="icon")
        span
          | {{ label }}
    UserEvents(v-if="activeTab === 'events'")
    ClansList(v-else-if="activeTab === 'clans'")
</template>

<style lang="scss">
.AccountPage {
  @include flexColumn((gap: 2.5rem));
  padding-left: 80px !important;
  padding-right: 80px !important;
  &__section {
    @include flex((gap: 1rem));
    &--user {
      justify-content: space-between;
    }
    &--content {
      flex-direction: column;
    }
  }
  &__subsection {
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;
    padding: 20px 28px;
    & * {
      font-weight: vars.$fw-bold;
    }
    &--data {
      @include flex((justify-content: space-between, align-items: center));
      flex-basis: 66%;
    }
    &--rating {
      @include flexColumn((gap: 20px));
      flex-basis: 32%;
    }
  }
  &__avatar {
    width: 5rem;
    height: 5rem;
    border-radius: vars.$br-l;
  }
  &__userDataWrapper {
    @include flex((align-items: center, gap: 16px));
  }
  &__userData {
    @include flexColumn((justify-content: space-between));
    height: 70px;
  }
  &__dataContainer {
    @include flex((align-items: center, gap: 4px));
    &:first-of-type {
      gap: 8px;
    }
    &:nth-of-type {
      font-size: vars.$fs-s;
    }
    &:last-of-type {
      font-size: vars.$fs-static-x2s;
      gap: 14px;
      & span {
        @include relative;
        &:first-of-type,
        &:nth-of-type(2) {
          @include withPseudoAfter((
            border-radius: 50%,
            background-color: vars.$colors-black,
            width: 4px,
            height: 4px,
            top: 2.5px,
            right: -9px,
          ));
        }
        &:last-of-type {
          color: vars.$colors-beige;
        }
      }
    }
  }
  &__userName {
    font-size: vars.$fs-s;
    font-weight: vars.$fw-bold;
  }
  &__userTitle {
    font-size: vars.$fs-static-x2s;
    font-weight: vars.$fw-bold;
    width: 53px;
    height: 14px;
    padding: 2px 4px;
    border-radius: vars.$br-x2s;
    color: vars.$colors-white;
    background-color: vars.$colors-black;
  }
  &__settingsButton {
    --p-button-gap: 0px;
    --buttonLabelFontSize: #{vars.$fs-static-xs};
    width: 112px;
    height: 24px;
    border-radius: vars.$br-x2s;
    border-width: 1px;
    & span {
      margin-left: 4px;
    }
  }

  &__commonRatingContainer {
    @include flex((justify-content: space-between, align-items: center));
  }
  &__userRating {
    font-size: vars.$fs-m;
    & span {
      color: vars.$colors-beige;
    }
  }
  &__ratingLink {
    @include titleWithLink;
  }
  &__gamesRatingContainer {
    @include flex((justify-content: space-between));
  }
  &__gameRating {
    @include flexColumn((align-items: center, gap: 4px));
    & svg {
      width: 32px;
      height: 32px;
    }
    & span {
      font-size: vars.$fs-xs;
    }
  }
  &__tabsContainer {
    @include flex((justify-content: center, gap: 24px));
  }
  &__tab {
    @include flex((align-items: center, gap: 8px));
    border-bottom: 2px solid transparent;
    cursor: pointer;
    font-weight: vars.$fw-midHeavy;
    font-size: vars.$fs-s;
    padding-bottom: 10px;
    --stroke: #{vars.$colors-black};
    &--active {
      border-color: vars.$colors-beige;
    }
  }
}
</style>
