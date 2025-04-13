<script setup lang="ts">
import { type NuxtError } from '#app';

/** Local Types & Variables */
type Props = {
  error: NuxtError
};

type TextsDict = Record<NuxtError['statusCode'] | 'default', string>;
type ErrorTexts = {
  title: string;
  details: string;
};

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
  // setTimeout(() => clearError({ redirect: '/' }), 5_000);
});
</script>

<template lang="pug">
div(:class="$b()")
  h2(:class="$b('title')")
    | {{ errorTexts.title }}
  div(:class="$b('trianglesContainer')")
    div(
      v-for="(symb, i) of String(error.statusCode)"
      :key="i"
      :class="$b('triangleContainer', { empty: symb === '0' })"
    )
      div(:class="$b('triangle')")
      span
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
  @include centered-flex-column((gap: vars.$gaps-g24));
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
  &__triangleContainer {
    @include centered-flex;
    @include relative;
    width: 150px;
    height: 150px;
    & > span {
      @include relative((
        bottom: -8%,
        right: 2%,
      ));
      font-size: 60px;
      color: vars.$colors-black;
      font-weight: vars.$fw-bold;
    }
    &--empty {
      & > span {
        @include triangle(104px, 88px, vars.$colors-black);
        @include absolute((
          right: 15.5%,
          bottom: 16%,
        ));
      }
    }
  }
  &__triangle {
    @include triangle(140px, 120px, vars.$colors-beige);
    @include absolute;
  }
  &__details {
    font: vars.$fonts-textM;
    max-width: 500px;
    text-align: center;
  }
}
</style>
