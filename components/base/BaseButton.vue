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
  omitIconInMobile,
  isText,
} = useButtonData(type);


const withIcon = computed<boolean>(() => {
  if (!icon) return false;
  if (omitIcon) return false;
  if (isMobile) return !omitIconInMobile;
  return true;
});

const $b = useBEM('BaseButton');
</script>

<template lang="pug">
PButton(
  :label="label"
  :severity="variant"
  :text="isText"
  :class="$b([withIcon && `icon_${iconPos}`], { text: isText }, { iconless: !withIcon })"
  :pt:root:type="isSubmit ? 'submit' : 'button'"
)
  template(
    v-if="icon && withIcon"
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
  --p-button-gap: var(--buttonGap, #{vars.$gaps-g8});
  & svg {
    order: var(--iconOrder, 1);
  }
  & span {
    order: var(--labelOrder, 2);
  }
  &--text {
    --p-button-padding-x: 0;
    --p-button-padding-y: 0;
    --buttonLabelFontWeight: #{vars.$fw-midHeavy};
  }
  &--iconless {
    padding: 0;
    justify-content: center;
    & span {
      width: 100%;
    }
  }
  &--iconRight{
    --iconOrder: 2;
    --labelOrder: 1;
  }
}
</style>
