<script setup lang="ts">
import type { InputTextProps, PasswordProps } from 'primevue';
import { PInputText, PPassword } from '#components';


type TextInputProps = InputTextProps & {
  type: 'text';
};
type PasswordInputProps = PasswordProps & {
  type: 'password';
}

type Props = {
  size?: 'm' | 'l';
} & (TextInputProps | PasswordInputProps);


const { isMobile } = useDevice();

const props = withDefaults(
  defineProps<Props>(),
  { type: 'text', size: 'l' }
);
const value = defineModel<string>({ required: true })

const usedSize = computed<Props['size']>(() => {
  if (!isMobile) return props.size;
  return props.size === 'l' ? 'm' : props.size;
})

const $b = useBEM('RzdInput');
const Wrapper = computed<Component>(() => props.type === 'text' ? PInputText : PPassword);
const passedProps = computed<InputTextProps | PasswordProps>(
  () => props.type === 'text'
    ? {
      pt: {
        root: $b('textInput')
      }
    } as InputTextProps
    : {
      toggleMask: true,
      feedback: false,
      pt: {
        pcInputText: {
          root: $b('passwordInput')
        }
      }
    } as PasswordProps
);
</script>

<template lang="pug">
Wrapper(
  v-bind="{ ...props, ...passedProps }"
  v-model="value"
  :class="$b([`size_${usedSize}`])"
)
</template>

<style lang="scss">
.RzdInput {
  &--size {
    &_m {
      --scoped-input-height: 44px;
    }
    &_l {
      --scoped-input-height: 48px;
    }
  }

  &__textInput,
  &__passwordInput {
    --p-inputtext-border-color: #{vars.$colors-greyLight};
    --p-inputtext-hover-border-color: #{vars.$colors-white};
    --p-inputtext-focus-border-color: #{vars.$colors-white};
    --p-inputtext-padding-x: 16px 24px;
    --p-inputtext-padding-y: 12px;
    --p-inputtext-background: #{vars.$colors-white};
    --p-inputtext-color: #{vars.$colors-black};
    
    height: var(--scoped-input-height);
    box-shadow: vars.$shadows-base;
    border: 1px solid vars.$colors-greyMuted;
    border-radius: #{vars.$br-s};
    
    &,
    &::placeholder {
      font: var(--font-text-m);
    }

    &::placeholder {
      color: vars.$colors-greyMuted;
    }
  }
}

@include mobile {
  .RzdInput {
    --p-inputtext-padding-x: 12px;
    --p-inputtext-padding-y: 8px;
  }
}
</style>
