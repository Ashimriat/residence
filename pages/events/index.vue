<script setup lang="ts">
import { mockEventsBigData, mockSubscriptions } from '~assets/mocks';
import { EButtons } from '~/constants/components';
import { EVENTS_GAMES_DESCRIPTIONS } from '~/constants/pages';


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

const { isMobile } = useDevice();

/** State & Composables */
const $b = useBEM('EventsPage');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section')")
    h2
      | Правила игр
    div(:class="$b('sectionContent')")
      NuxtLink(
        v-for="({ logo, name, description, gameType }) of EVENTS_GAMES_DESCRIPTIONS"
        :key="gameType"
        :class="$b('game')"
        :to="`events/rules/${gameType}`"
      )
        div(:class="$b('logoContainer')")
          component(:is="logo")
        div(:class="$b('gameData')")
          h3
            | {{ name }}
          span(v-if="!isMobile")
            | {{ description }}
    BaseButton(
      v-if="isAdmin"
      :type="EButtons.ADD_RULES"
    )
  section(:class="$b('section')")
    h2
      | Абонементы
    div(:class="$b('sectionContent')")
      Subscription(
        v-for="(data, i) of mockSubscriptions(2)"
        :key="i"
        :data="data"
      )
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
      :events-on-page-amount="4"
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
    @include flex((
      gap: var(--sectionContentGap, #{vars.$gaps-g40}),
      flex-wrap: wrap
    ));
  }
  &__game {
    @include flex((
      align-items: center,
      gap: var(--gameGap, #{vars.$gaps-g40}),
    ));
    max-width: calc((100% - var(--sectionContentGap, #{vars.$gaps-g40})) / 2);
    height: var(--gameHeight, 204px);
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;
    flex-grow: 1;
    cursor: pointer;
    overflow: hidden;
    & span {
      font-size: vars.$fs-m;
    }
  }
  &__logoContainer {
    @include fullsize;
    min-width: 115px;
    min-height: 125px;
    max-width: var(--logoMaxWidth, 173px);
    max-height: var(--logoMaxHeight, 200px);
    transform: translateX(var(--logoTranslateX, 5%));
    &,
    & svg {
      @include fullsize;
    }
  }
  &__gameData {
    @include flexColumn((gap: vars.$gaps-g12, justify-content: center));
    transform: translateX(var(--gameDataTranslateX, 0));
  }
}

@include mobile {
  .EventsPage {
    --sectionContentGap: #{vars.$gaps-g12};
    --gameGap: 0;
    --gameHeight: 154px;
    --logoTranslateX: -35%;
    --logoMaxWidth: 115px;
    --logoMaxHeight: 125px;
    --gameDataTranslateX: -55%;
  }
}
</style>
