<script setup lang="ts">
import { EButtons } from '~/components/base';
import { GAMES_RULES, EGameTypes } from '../../constants/events';


const userStore = useUserStore();
const { isAdmin } = storeToRefs(userStore);

const isEditMode = ref<boolean>(false);

const $b = useBem('RulesPage');
const route = useRoute();
const { params: { gameType } } = route;

const {
  icon,
  title,
  sections
} = GAMES_RULES[gameType as EGameTypes];

function turnEditModeOn(): void {
  isEditMode.value = true;
}
</script>

<template lang="pug">
div(:class="$b()")
  NuxtLink(
    to="/events"
    :class="$b('backButton')"
  )
    div
    span
      | Ивенты
  div(:class="$b('content')")
    div(:class="$b('topContainer')")
      div(:class="$b('gameTitle')")
        component(
          :is="icon"
          width="64"
          height="64"
          viewBox="-90 -40 300 300"
        )
        h1
          | {{ title }}
      BaseButton(
        v-if="isAdmin"
        :type="EButtons.EDIT_RULES"
        @click="turnEditModeOn"
      )
    section(
      v-for="({ title, content }, i) of sections"
      :key="`rules_${gameType}_section_${i}`"
      :class="$b('section')"
    )
      h4(
        v-if="title"
        v-html="title"
      )
      div(:class="$b('sectionContent')")
        template(v-for="(entry, j) in content")
          p(
            v-if="!Array.isArray(entry)"
            :key="`rules_${gameType}_section_${i}_${j}_text`"
            v-html="entry"
          )
          ul(
            v-else
            :key="`rules_${gameType}_section_${i}_${j}_list`"
            :class="$b('list')"
          )
            li(
              v-for="(text, k) in entry"
              :key="`rules_${gameType}_section_${i}_${j}_list_${k}`"
              v-html="text"
            )
</template>

<style lang="scss">
.RulesPage {
  @include flexColumn((gap: 22px));
  padding: 60px 80px;
  &__backButton {
    @include flex((align-items: center, gap: 12px));
    font-size: vars.$fs-m;
    font-weight: vars.$fw-heavy;
    cursor: pointer;
    & div {
      border-left: 2px solid vars.$colors-black;
      border-bottom: 2px solid vars.$colors-black;
      transform: rotate(45deg);
      width: 11px;
      height: 11px;
    }
    & span {
      display: block;
      border-bottom: 2px solid vars.$colors-black;
    }
  }
  &__content {
    @include flexColumn((gap: 28px));
    background-color: vars.$colors-white;
    padding: 40px 120px;
    border-radius: vars.$br-l;
  }
  &__topContainer {
    @include flex((justify-content: space-between));
    & > div {
      @include flex((gap: 6px));
    }
  }
  &__section {
    @include flexColumn((gap: 12px));
  }
  &__sectionContent {
    @include flexColumn((gap: 1rem));
  }
  &__list {
    @include flexColumn((gap: 4px));
    margin: 0;
    padding: 0 0 0 30px;
  }
}

@include mobile {
  .RulesPage {
    padding: 0 24px 40px;
    &__content {
      padding: 16px;
    }
    &__topContainer {
      flex-direction: column;
      align-items: center;
    }
    &__gameTitle {
      @include flex((align-items: center));
    }
  }
}
</style>
