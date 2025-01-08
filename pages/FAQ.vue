<script setup lang="ts">
import Logo from '~assets/images/logo/light.svg';
import {
  EIcons,
  EButtons,
} from '~/components/base';
import { SECTIONS } from './constants/faq';


const openingStatuses = ref<Record<string, boolean>>(
  SECTIONS.reduce((acc, { type, contents }) => {
    acc[type] = false;
    for (let i = 0; i < contents.length; i += 1) {
      acc[`${type}_${i}`] = false;
    }
    return acc;
  }, <Record<string, boolean>>{})
);
const sectionsHeights = ref<Record<string, { full: string, partial: string }>>({});
const sectionsRefs: Record<string, HTMLElement> = {};


function handleFormSubmit(): void {

}

function handleSectionRef(type: string, elem: any): void {
  if (sectionsRefs[type]) return;
  sectionsRefs[type] = elem;
}

function toggleSection(type: string): void {
  openingStatuses.value[type] = !openingStatuses.value[type];
}

onMounted(() => {
  getKeys(sectionsRefs).forEach((key) => {
    const elem = sectionsRefs[key];
    const fullHeight = getComputedStyle(elem).height;
    const firstChildHeight = getComputedStyle(elem.childNodes[0] as HTMLElement).height;
    sectionsHeights.value[key] = {
      full: fullHeight,
      partial: firstChildHeight,
    };
  });
});

const $b = useBem('PageFAQ');
</script>

<template lang="pug">
div(:class="$b()")
  section(
    v-for="({ type, title, contents }, i) in SECTIONS"
    :key="`faqSection_${i}`"
    :ref="(elem) => handleSectionRef(type, elem)"
    :class="$b('section', { open: openingStatuses[type] })"
    :style="{\
      '--fullHeight': sectionsHeights[type]?.full,\
      '--partialHeight': sectionsHeights[type]?.partial,\
    }"
  )
    div(
      :class="$b('upperContainer')"
      @click="toggleSection(type)"
    )
      h3(:class="$b('title')")
        | {{ title }}
      BaseIcon(
        :type="EIcons.CHEVRON"
        :class="$b('sectionArrow', { facingUp: openingStatuses[type] })"
      )
    div(
      :class="$b('questionsWrapper')"
      @click.stop
    )
      div(
        v-for="({ question, answer }, j) of contents"
        :key="`faqSection_${i}_question_${j}`"
        :ref="(elem) => handleSectionRef(`${type}_${j}`, elem)"
        :class="$b('questionContent', { open: openingStatuses[`${type}_${j}`] })"
        :style="{\
          '--fullHeight': sectionsHeights[`${type}_${j}`]?.full,\
          '--partialHeight': sectionsHeights[`${type}_${j}`]?.partial,\
        }"
      )
        div(
          :class="$b('questionContainer')"
          @click="toggleSection(`${type}_${j}`)"
        )
          div(:class="$b('question')")
            span
              | {{ question }}
            BaseIcon(
              v-if="openingStatuses[`${type}_${j}`]"
              :type="EIcons.MINUS"
              :class="$b('questionIcon')"
            )
            BaseIcon(
              v-else
              :type="EIcons.PLUS"
              :class="$b('questionIcon')"
            )
          PAvatar(
            shape="circle"
            label="UI"
            :class="$b('avatar')"
          )
        div(:class="$b('answerContainer')")
          div(:class="$b('logoContainer')")
            Logo(v-show="false")
          div(:class="$b('answer')")
            | {{ answer }}
  RequestForm(
    title="Не нашли, что искали?"
    subtext="Если все еще остались вопросы, оставьте заявку – мы напишем!"
    request-text-placeholder="Кратко опишите вопрос"
    :button-type="EButtons.ASK_QUESTION"
    @submit="handleFormSubmit"
  )
</template>

<style lang="scss">
.PageFAQ {
  @include flexColumn((gap: 4rem));
  &__section,
  &__questionContent {
    @include transition(max-height);
    max-height: var(--partialHeight);
    overflow: hidden;
    &--open {
      max-height: var(--fullHeight);
    }
  }
  &__section {
    @include flexColumn((align-items: center));
    background-color: vars.$colors-white;
    border-radius: vars.$br-xl;
  }
  &__upperContainer {
    @include flex((
      justify-content: space-between,
      align-items: center,
    ));
    width: 100%;
    cursor: pointer;
    padding: 20px;
  }
  &__sectionArrow {
    @include transition(transform);
    transform: rotate(180deg);
    min-width: 48px;
    min-height: 48px;
    &--facingUp {
      transform: rotate(0deg);
    }
  }
  &__questionsWrapper {
    @include flexColumn((
      justify-content: center,
      gap: 1.4rem,
    ));
    max-width: 54%;
    padding: 32px 0;
  }
  &__questionContent {
    @include flexColumn((gap: 1rem));
  }
  &__questionContainer {
    @include flex((
      justify-content: space-between,
      align-items: center,
      gap: 0.8rem,
    ));
    cursor: pointer;
  }
  &__questionIcon {
    min-width: 24px;
    & path {
      stroke: vars.$colors-black;
    }
  }
  &__answerContainer {
    @include flex((gap: 0.8rem));
  }
  &__avatar,
  &__logoContainer {
    min-width: 64px;
    min-height: 64px;
  }
  &__logoContainer {
    border-radius: 50%;
    background-color: vars.$colors-black;
  }
  &__question,
  &__answer {
    @include flex((align-items: center));
    background-color: var(--backgroundColor);
    flex-basis: 100%;
    min-height: 56px;
    border-radius: vars.$br-l;
    padding: 16px 24px;
    font-weight: vars.$fw-bold;
    user-select: none;
  }
  &__question {
    justify-content: space-between;
    --backgroundColor: #{vars.$colors-greyBackground};
  }
  &__answer {
    --backgroundColor: #{vars.$colors-black};
    color: vars.$colors-white;
  }
}

@include mobile {
  .PageFAQ {
    &__title {
      font-size: vars.$fs-xl;
    }
    &__questionsWrapper {
      max-width: unset;
    }
    &__sectionArrow {
      min-width: 24px;
      min-height: 24px;
    }
    &__avatar,
    &__logoContainer {
      min-width: 48px;
      min-height: 48px;
      width: 48px;
      height: 48px;
    }
    &__question,
    &__answer {
      padding: 12px;
      min-height: 40px;
      border-radius: vars.$br-s;
    }
    &__upperContainer,
    &__questionsWrapper {
      padding: 14px 12px;
    }
  }
}
</style>
