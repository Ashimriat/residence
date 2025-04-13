<script setup lang="ts">
import type { TextareaProps } from 'primevue';


type Props = {
  placeholder?: string;
  maxLength?: number;
};

const {
  placeholder = '',
  maxLength = 0,
} = defineProps<Props>();

const text = defineModel<string>({ required: true });

const passedProps = computed<TextareaProps>(() => {
  if (maxLength === 0) return {};
  return { maxlength: maxLength } as TextareaProps;
});

const $b = useBEM('RzdTextarea');
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
.RzdTextarea {
  @include relative;
  width: 100%;
  &__text {
    --p-textarea-focus-border-color: none;
    --p-textarea-padding-x: 16px 12px;
    --p-textarea-padding-y: 16px;
    --p-textarea-border-color: #{vars.$colors-greyMuted};

    box-sizing: border-box;
    min-height: 115px;
    height: 100%;
    resize: none;
    background-color: vars.$colors-white;
    color: vars.$colors-black;
    &,
    &::placeholder {
      font: vars.$fonts-textM;
    }
    &::placeholder {
      color: vars.$colors-greyMuted;
    }
  }
  &__symbolsAmount {
    @include absolute((bottom: 10px, right: 12px));
    font-size: vars.$fs-xs;
  }
}

@include mobile {
  .RzdTextarea {
    &__text {
      --p-textarea-padding-x: 12px;
      --p-textarea-padding-y: 8px;

      &,
      &::placeholder {
        font: vars.$fonts-textS;
      }
    }
  }
}
</style>
