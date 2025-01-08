<script setup lang="ts">
import type { EIconsSizes } from './constants/icon';
import type { EButtons } from './constants/button';
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
  :class="$b(bMod(`icon_${iconPos}`, { text: isText }))"
  :pt:root:type="isSubmit ? 'submit' : 'button'"
)
  template(
    v-if="icon && !omitIcon"
    #icon
  )
    BaseIcon(
      :type="icon"
      :size="iconSize"
    )
</template>

<style lang="scss">
.BaseButton {
  max-width: var(--buttonMaxWidth);
  &--text {
    --p-button-padding-x: 0;
    --p-button-padding-y: 0;
    --buttonLabelFontSize: #{vars.$fw-midHeavy};
  }
  &--icon{
    &_left {
      & div {
        order: 1;
      }
      & span {
        order: 2;
      }
    }
    &_right {
      & div {
        order: 2;
      }
      & span {
        order: 1;
      }
    }
  }
}
</style>
