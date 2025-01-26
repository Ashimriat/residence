<script setup lang="ts">
import type { NuxtError } from '#app';

/** Local Types & Variables */
type Props = {
  error: NuxtError
};

type TextsDict = Record<NuxtError['statusCode'] | 'default', string>;
type ErrorTexts = {
  title: string;
  details: string;
}

const TITLES_DICT: TextsDict = {
  404: 'Упс, страница не найдена',
  default: 'Неизвестная ошибка',
} as const;

const DETAILS_DICT: TextsDict = {
  404: 'Страница, к которой вы обратились, удалена или перенесена. Перенаправляем на главную страницу.',
  default: 'Перенаправляем на главную страницу.',
} as const;


/** Props & Emits */
const { error } = defineProps<Props>();

const errorTexts = computed<ErrorTexts>(() => ({
  title: TITLES_DICT[error.statusCode] ?? TITLES_DICT.default,
  details: DETAILS_DICT[error.statusCode] ?? `${error.message}. ${DETAILS_DICT.default}`,
}));
const $b = useBEM('Error');

onMounted(() => {
  setTimeout(() => clearError({ redirect: '/' }), 5_000);
})
</script>

<template lang="pug">
div(:class="$b()")
  h2(:class="$b('title')")
    | {{ errorTexts.title }}
  div(:class="$b('trianglesContainer')")
    div(
      v-for="(symb, i) of String(error.statusCode)"
      :key="i"
      :class="$b('triangle', { empty: symb === '0' })"
    )
      div
        | {{ symb }}
  div(:class="$b('details')")
    | {{ errorTexts.details }}
</template>

<style lang="scss">
@mixin triangle($width, $height, $backgroundColor) {
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  width: $width;
  height: $height;
  background-color: $backgroundColor;
}

.Error {
  @include fullsize;
  @include centeredFlexColumn((gap: vars.$gaps-g24));
  background-color: vars.$colors-black;
  color: vars.$colors-white;
  &__title,
  &__details {
    color: vars.$colors-white;
  }
  &__trianglesContainer {
    @include flex((
      justify-content: space-between,
      gap: vars.$gaps-g24,
    ));
  }
  &__triangle {
    @include triangle(9rem, 7.5rem, vars.$colors-beige);
    @include relative;
    @include centeredFlex;
    & > div {
      @include relative((
        bottom: -10%,
        right: 4%,
      ));
      font-size: vars.$fs-x3l;
      color: vars.$colors-black;
      font-weight: vars.$fw-bold;
    }
    &--empty {
      & > div {
        @include triangle(6.5rem, 5.5rem, vars.$colors-black);
        @include absolute((
          right: 13.5%,
          bottom: 8%,
        ));
        font-size: 0;
      }
    }
  }
  &__details {
    font-size: vars.$fs-s;
    max-width: 500px;
    text-align: center;
    font-weight: vars.$fw-midHeavy;
  }
}
</style>
