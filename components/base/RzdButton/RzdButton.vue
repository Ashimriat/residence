<script setup lang="ts">
import { EButtons } from './constants';
import useButtonData from './composable';


type Props = {
  type: EButtons;
};

const { type } = defineProps<Props>();

const {
  label,
  size,
  iconType,
  iconPos,
  iconSize,
  variant,
  isVariantInverted,
  isTextButton,
  htmlType,
} = useButtonData(type);

const $b = useBEM('RzdButton');

const classes = computed<ClassesDict>(() => {
  let variantClass = `variant_${variant}`;
  if (isVariantInverted) {
    variantClass += '_inverted';
  }
  return {
    [`size_${size}`]: true,
    [variantClass]: true,
    [`icon_${iconPos}`]: !!iconType,
    text: isTextButton,
    iconless: !isTextButton && !iconType,
  }
});
</script>

<template lang="pug">
PButton(
  :label="label"
  :severity="variant"
  :text="isTextButton"
  :pt:root:type="htmlType"
  :pt:root:class="$b(classes)"
  :pt:label:class="$b('label')"
)
  template(
    v-if="iconType"
    #icon
  )
    RzdIcon(
      :type="iconType"
      :size="iconSize"
    )
</template>

<style lang="scss">
.RzdButton {
  --p-button-gap: #{vars.$gaps-g8};
  --p-button-padding-x: 12px;
  --p-button-padding-y: 12px;
  --p-button-border-radius: var(--scoped-border-radius);

  height: var(--scoped-button-height);
  border-width: 2px;
  box-sizing: border-box;

  &--variant {
    &_primary {
      --rzd-icon-color: #{vars.$colors-white};
      --p-button-primary-background: #{vars.$colors-beige};
      --p-button-primary-hover-background: #{vars.$colors-beige};
      --p-button-primary-active-background: #{vars.$colors-beige};
      --p-button-primary-border-color: #{vars.$colors-beige};
      --p-button-primary-hover-border-color: #{vars.$colors-beige};
      --p-button-primary-active-border-color: #{vars.$colors-beige};
      --p-button-primary-color: #{vars.$colors-white};
      --p-button-primary-hover-color: #{vars.$colors-white};
      --p-button-primary-active-color: #{vars.$colors-white};
      --p-button-text-primary-hover-background: transparent;
      --p-button-text-primary-active-background: transparent;
      --p-button-text-primary-color: #{vars.$colors-beige};
    }
    
    &_secondary {
      --rzd-icon-color: #{vars.$colors-beige};
      --p-button-secondary-background: #{vars.$colors-white};
      --p-button-secondary-hover-background: #{vars.$colors-white};
      --p-button-secondary-active-background: #{vars.$colors-white};
      --p-button-secondary-border-color: #{vars.$colors-beige};
      --p-button-secondary-hover-border-color: #{vars.$colors-beige};
      --p-button-secondary-active-border-color: #{vars.$colors-beige};
      --p-button-secondary-color: #{vars.$colors-beige};
      --p-button-secondary-hover-color: #{vars.$colors-beige};
      --p-button-secondary-active-color: #{vars.$colors-beige};
      --p-button-text-secondary-hover-background: transparent;
      --p-button-text-secondary-active-background: transparent;
    }

    &_contrast {
      --rzd-icon-color: #{vars.$colors-black};
      --p-button-contrast-background: #{vars.$colors-white};
      --p-button-contrast-hover-background: #{vars.$colors-white};
      --p-button-contrast-active-background: #{vars.$colors-white};
      --p-button-contrast-border-color: #{vars.$colors-black};
      --p-button-contrast-hover-border-color: #{vars.$colors-black};
      --p-button-contrast-active-border-color: #{vars.$colors-black};
      --p-button-contrast-color: #{vars.$colors-black};
      --p-button-contrast-hover-color: #{vars.$colors-black};
      --p-button-contrast-active-color: #{vars.$colors-black};
    }

    &_contrast_inverted {
      --rzd-icon-color: #{vars.$colors-white};
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

    &_danger {
      --rzd-icon-color: #{vars.$colors-white};
      --p-button-danger-background: #{vars.$colors-red};
      --p-button-danger-border-color: #{vars.$colors-red};

      /*
      --p-button-error-hover-background: #{vars.$colors-beige};
      --p-button-error-active-background: #{vars.$colors-beige};
      --p-button-error-border-color: #{vars.$colors-beige};
      --p-button-error-hover-border-color: #{vars.$colors-beige};
      --p-button-error-active-border-color: #{vars.$colors-beige};
      --p-button-error-color: #{vars.$colors-white};
      --p-button-error-hover-color: #{vars.$colors-white};
      --p-button-error-active-color: #{vars.$colors-white};
      */
    }
  }

  &--size {
    &_s {
      --scoped-label-font: #{vars.$fonts-buttonS};
      --scoped-border-radius: #{vars.$br-x2s};
      --scoped-button-height: 28px;
    }
    &_m {
      --scoped-label-font: #{vars.$fonts-buttonM};
      --scoped-border-radius: #{vars.$br-xs};
      --scoped-button-height: 40px;
    }
    &_l {
      --scoped-label-font: #{vars.$fonts-buttonL};
      --scoped-border-radius: #{vars.$br-s};
      --scoped-button-height: 48px;
    }
  }

  &--text {
    @include centered-flex;

    --p-button-padding-x: 0;
    --p-button-padding-y: 0;

    height: 28px;
    pointer-events: none;
    cursor: default;

    & span {
      pointer-events: all;
      cursor: pointer;
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

  &--iconless {
    justify-content: center;
  }

  & svg {
    order: var(--iconOrder);
  }

  &__label {
    font: var(--scoped-label-font);
    order: var(--labelOrder);
  }
}

@include mobile {
  .RzdButton {
    &--variant {
      &_secondary {
        --p-button-secondary-background: transparent;
        --p-button-secondary-hover-background: transparent;
        --p-button-secondary-active-background: transparent;
        --p-button-secondary-border-color: #{vars.$colors-beige};
        --p-button-secondary-hover-border-color: #{vars.$colors-beige};
        --p-button-secondary-active-border-color: #{vars.$colors-beige};
        --p-button-secondary-color: #{vars.$colors-beige};
        --p-button-secondary-hover-color: #{vars.$colors-beige};
        --p-button-secondary-active-color: #{vars.$colors-beige};
        --p-button-text-secondary-hover-background: transparent;
        --p-button-text-secondary-active-background: transparent;
      }
    }
  }
}
</style>
