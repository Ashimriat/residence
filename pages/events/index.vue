<script setup lang="ts">
import { mockEventsBigData, mockSubscriptions } from '~assets/mocks';
import { EButtons } from '~/components/base';
import { GAMES_DESCRIPTIONS } from '../constants/events';


/** Props & Emits */
const userStore = useUserStore();
const { isAdmin } = storeToRefs(userStore);

const tabsList: TabData[] = [
  { label: 'Игры', id: 'games'},
  { label: 'Поездки', id: 'trips' },
  { label: 'Встречи', id: 'meets' },
  { label: 'Активности', id: 'activities' },
];
const filters: RadioOption[] = [
  { label: 'Детские ивенты', value: 'kids' },
  { label: 'Женские ивенты', value: 'women' },
];

/** State & Composables */
const $b = useBem('EventsPage');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section')")
    h2
      | Правила игр
    div(:class="$b('sectionContent')")
      NuxtLink(
        v-for="({ logo, name, description, gameType }) of GAMES_DESCRIPTIONS"
        :key="gameType"
        :class="$b('game')"
        :to="`events/rules/${gameType}`"
      )
        component(:is="logo")
        div
          h3
            | {{ name }}
          span
            | {{ description }}
    BaseButton(
      v-if="isAdmin"
      :type="EButtons.ADD_RULES"
    )
  section(:class="$b('section')")
    h2
      | Абонементы
    div(:class="$b('sectionContent')")
      div(
        v-for="({ name, description, price }) of mockSubscriptions(2)"
        :key="name"
        :class="$b('subscription')"
      )
        div
          h5
            | {{ name }}
          PriceTag(:value="price")
        div
          | {{ description }}
        div
          BaseButton(:type="EButtons.BUY")
          BaseButton(:type="EButtons.GIFT_TO_FRIEND")
    BaseButton(
      v-if="isAdmin"
      :type="EButtons.ADD_SUBSCRIPTION"
    )
  section(:class="$b('section')")
    h2
      | Календарь ивентов
    EventsList(
      with-calendar
      with-pagination
      :events-on-page-amount="6"
      :tabs-list="tabsList"
      :events-data="mockEventsBigData(4, 8)"
      :filters="filters"
    )
</template>

<style lang="scss">
.EventsPage {
  @include flexColumn((gap: 4rem));
  &__section {
    @include flexColumn((gap: 26px));
    & > button {
      max-width: 275px;
      justify-content: space-between;
      align-items: center;
      & * {
        font-size: 0.9rem;
      }
    }
  }
  &__sectionContent {
    @include flex((gap: 40px, flex-wrap: wrap));
  }
  &__game {
    @include flex((align-items: center, gap: 40px));
    width: 620px;
    height: 204px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;
    cursor: pointer;
    & svg {
      min-width: 174px;
      height: 174px;
    }
    & div {
      @include flexColumn((gap: 12px, justify-content: center));
    }
    & span {
      font-size: vars.$fs-m;
    }
  }
  &__subscription {
    @include flexColumn((gap: 20px));
    padding: 20px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-s;
    max-width: 620px;
    & div:first-child {
      @include flex((align-items: center, justify-content: space-between));
      & span {
        color: vars.$colors-beige;
        font-size: vars.$fs-l;
        font-weight: vars.$fw-bold;
      }
    }
    & div:last-child {
      @include flex((justify-content: space-between, gap: 16px));
      & button {
        width: 50%;
        height: 40px;
      }
    }
  }
}
</style>
