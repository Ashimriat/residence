<script setup lang="ts">
import { mockEventsBigData, mockSubscriptions } from '~/__mocks__';
import { EButtons } from '~/components/constants';
import { GAMES_DESCRIPTIONS } from './constants';


/** Props & Emits */
const userStore = useUserStore();
const { isAdmin } = storeToRefs(userStore);
const { isMobile } = usePlatform();

/** State & Composables */
const $b = useBEM('EventsPage');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section')")
    h2
      | Правила игр
    div(:class="$b('sectionContent', ['games'])")
      NuxtLink(
        v-for="({ logo, name, description, gameType }) of GAMES_DESCRIPTIONS"
        :key="gameType"
        :class="$b('game')"
        :to="`events/rules/${gameType}`"
      )
        div(:class="$b('logoContainer')")
          component(:is="logo")
        div(:class="$b('gameData')")
          h3(:class="$b('gameName')")
            | {{ name }}
          span(
            v-if="!isMobile"
            :class="$b('description')"
          )
            | {{ description }}
    RzdButton(
      v-if="false && isAdmin"
      :type="EButtons.ADD_RULES"
    )
  section(:class="$b('section')")
    h2
      | Абонементы
    div(:class="$b('sectionContent', ['subscriptions'])")
      EventSubscription(
        v-for="(data, i) of mockSubscriptions(2)"
        :key="i"
        :data="data"
      )
    RzdButton(
      v-if="false && isAdmin"
      :type="EButtons.ADD_SUBSCRIPTION"
    )
  section(:class="$b('section')")
    h2
      | Календарь ивентов
    EventsList(
      with-calendar
      with-pagination
      :events-on-page-amount="4"
      :events-data="mockEventsBigData(4, 8)"
    )
</template>


<style lang="scss" scoped>
.EventsPage {
  --scoped-sectioncontent-gap: #{vars.$gaps-g40};
  --scoped-game-gap: #{vars.$gaps-g40};
  --scoped-game-height: 204px;
  --scoped-game-name-font: #{vars.$fonts-desktopH3};
  --scoped-logo-maxwidth: 173px;
  --scoped-logo-maxheight: 200px;
  --scoped-logo-translateX: 5%;
  --scoped-gamedata-translateX: 0; 
}

@include mobile {
  .EventsPage{
    --scoped-sectioncontent-gap: #{vars.$gaps-g12};
    --scoped-game-gap: 0;
    --scoped-game-height: 154px;
    --scoped-game-name-font: #{vars.$fonts-textBoldL};
    --scoped-logo-maxwidth: 115px;
    --scoped-logo-maxheight: 125px;
    --scoped-logo-translateX: -35%;
    --scoped-gamedata-translateX: -55%;
  }
}
</style>

<style lang="scss">
.EventsPage {
  @include flex-column((gap: vars.$gaps-g48));
  &__section {
    @include flex-column((gap: vars.$gaps-g24));
    & > button {
      max-width: 275px;
      justify-content: space-between;
      align-items: center;
      & * {
        font-size: 14px;
      }
    }
  }
  &__sectionContent {
    gap: var(--scoped-sectioncontent-gap);
    &--games {
      display: grid;
      grid-template-columns: repeat(2, calc((100% - var(--scoped-sectioncontent-gap, #{vars.$gaps-g40})) / 2));
      grid-template-rows: repeat(2, 1fr);
    }
    &--subscriptions {
      @include flex((
        flex-wrap: wrap,
        justify-content: center,
      ));
    }
  }
  &__game {
    @include flex((
      align-items: center,
      gap: var(--scoped-game-gap),
    ));
    height: var(--scoped-game-height, 204px);
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;
    flex-grow: 1;
    cursor: pointer;
    overflow: hidden;
  }
  &__gameName {
    font: var(--scoped-game-name-font);
  }
  &__description {
    font: vars.$fonts-textM;
  }
  &__logoContainer {
    @include fullsize;
    min-width: 115px;
    min-height: 125px;
    max-width: var(--scoped-logo-maxwidth, 173px);
    max-height: var(--scoped-logo-maxheight);
    transform: translateX(var(--scoped-logo-translateX));
    &,
    & svg {
      @include fullsize;
    }
  }
  &__gameData {
    @include flex-column((gap: vars.$gaps-g12, justify-content: center));
    transform: translateX(var(--scoped-gamedata-translateX));
  }
}
</style>
