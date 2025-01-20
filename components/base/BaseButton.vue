<script setup lang="ts">
import { type EButtons } from './constants/button';
import { EIconsSizes } from './constants/icon';
import useButtonData from './composables/useButton';



type Props = {
  type: EButtons;
  isSubmit?: boolean;
  iconSize?: EIconsSizes;
  omitIcon?: boolean;
};

const {
  type,
  isSubmit,
  iconSize,
  omitIcon = false
} = defineProps<Props>();

const { isMobile } = useDevice();

const {
  label,
  icon,
  iconPos,
  variant,
  isText,
} = useButtonData(type);

const $b = useBem('BaseButton');
</script>

<template lang="pug">
PButton(
  :label="label"
  :severity="variant"
  :text="isText"
  :class="$b(bMod(`icon-${iconPos}`, { text: isText }))"
  :pt:root:type="isSubmit ? 'submit' : 'button'"
)
  template(
    v-if="icon && !omitIcon"
    #icon
  )
    BaseIcon(
      :type="icon"
      :size="isMobile ? EIconsSizes.S : iconSize"
    )
</template>

<style lang="scss">
.BaseButton {
  max-width: var(--buttonMaxWidth);
  &--text {
    --p-button-padding-x: 0;
    --p-button-padding-y: 0;
    --buttonLabelFontWeight: #{vars.$fw-midHeavy};
  }
  &--icon{
    &-left {
      & svg {
        order: 1;
      }
      & span {
        order: 2;
      }
    }
    &-right {
      & svg {
        order: 2;
      }
      & span {
        order: 1;
      }
    }
  }
}
</style>
