<script setup lang="ts">
import type { TextareaProps } from 'primevue';


type Props = {
  placeholder?: string;
  maxLength?: number;
};

const {
  placeholder = '',
  maxLength = 0
} = defineProps<Props>();

const text = defineModel<string>({ required: true });

const passedProps = computed<TextareaProps>(() => {
  if (maxLength === 0) return {};
  return { maxlength: maxLength };
});

const $b = useBEM('BaseTextarea');
</script>

<template lang="pug">
div(:class="$b()")
  PTextarea(
    v-bind="passedProps"
    v-model="text"
    fluid
    :pt:root:class="$b('text')"
    :placeholder="placeholder"
  )
  span(
    v-if="maxLength"
    :class="$b('symbolsAmount')"
  )
    | {{ `${text.length}/${maxLength}` }}
</template>

<style lang="scss">
.BaseTextarea {
  @include relative;
  width: 100%;
  &__text {
    --p-textarea-focus-border-color: none;
    box-sizing: border-box;
    min-height: 115px;
    height: 100%;
    resize: none;
    padding: 16px;
    background-color: vars.$colors-white;
    &,
    &::placeholder {
      font-size: var(--textAreaFontSize, #{vars.$fs-static-s});
    }
    &::placeholder {
      opacity: 0.5;
    }
  }
  &__symbolsAmount {
    @include absolute((bottom: 10px, right: 12px));
    font-size: vars.$fs-xs;
  }
}
</style>
