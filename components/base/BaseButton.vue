<script setup lang="ts">
import { type ClassesDict } from '~/composables/useBEM';
import { type EButtons } from './constants/button';
import useButtonData from './composables/useButton';

type Props = {
  type: EButtons;
};

const { type } = defineProps<Props>();

const {
  label,
  iconType,
  iconPos,
  iconSize,
  variant,
  isVariantInverted,
  isTextButton,
  htmlType,
} = useButtonData(type);

const $b = useBEM('BaseButton');

const classes = computed<ClassesDict>(() => ({
  [`variant_${variant}_inverted`]: !!isVariantInverted,
  [`icon_${iconPos}`]: !!iconType,
  text: !!isTextButton,
  iconless: !iconType
}))
</script>

<template lang="pug">
PButton(
  :label="label"
  :severity="variant"
  :text="isTextButton"
  :class="$b(classes)"
  :pt:root:type="htmlType"
)
  template(
    v-if="iconType"
    #icon
  )
    BaseIcon(
      :type="iconType"
      :size="iconSize"
    )
</template>

<style lang="scss">
.BaseButton {
  max-width: var(--buttonMaxWidth);
  --p-button-gap: var(--buttonGap, #{vars.$gaps-g8});
  & svg {
    order: var(--iconOrder);
  }
  & span {
    order: var(--labelOrder);
  }

  &--text {
    --p-button-padding-x: 0;
    --p-button-padding-y: 0;
    --buttonLabelFontWeight: #{vars.$fw-midHeavy};
  }

  &--iconless {
    // padding: 0;
    justify-content: center;
    & span {
      width: 100%;
    }
  }

  &--icon {
    &_left {
      --iconOrder: 1;
      --labelOrder: 2;
    }
    &_right {
      --iconOrder: 2;
      --labelOrder: 1;
    }
  }

  &--variant {
    &_contrast_inverted {
      --iconStroke: #{vars.$colors-white};
      --p-button-contrast-background: #{vars.$colors-black};
      --p-button-contrast-hover-background: #{vars.$colors-black};
      --p-button-contrast-active-background: #{vars.$colors-black};
      --p-button-contrast-border-color: #{vars.$colors-white};
      --p-button-contrast-hover-border-color: #{vars.$colors-white};
      --p-button-contrast-active-border-color: #{vars.$colors-white};
      --p-button-contrast-color: #{vars.$colors-white};
      --p-button-contrast-hover-color: #{vars.$colors-white};
      --p-button-contrast-active-color: #{vars.$colors-white};
    }
  }
}
</style>
