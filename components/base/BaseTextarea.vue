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

const value = defineModel<string>({ required: true });

const passedProps = computed<TextareaProps>(() => {
  if (maxLength === 0) return {};
  return { maxlength: maxLength };
});

const $b = useBem('BaseTextarea');
</script>

<template lang="pug">
div(:class="$b()")
  PTextarea(
    v-bind="passedProps"
    v-model="value"
    fluid
    :placeholder="placeholder"
    :maxlength="maxLength"
  )
  span(v-if="maxLength")
    | {{ `${value.length}/${maxLength}` }}
</template>

<style lang="scss">
.BaseTextarea {
  @include relative;
  width: 100%;
  & textarea {
    box-sizing: border-box;
    min-height: 115px;
    height: 100%;
    resize: none;
    padding: 6px 8px;
  }
  & span {
    @include absolute((bottom: 10px, right: 12px));
    font-size: vars.$fs-xs;
  }
}

@include mobile {

}
</style>
