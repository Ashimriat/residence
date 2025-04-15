<script setup lang="ts">
import type { OverlayBadgeProps } from 'primevue';


const props = defineProps<OverlayBadgeProps>();

const $b = useBEM('RzdOverlayBadge');
</script>

<template lang="pug">
POverlayBadge(
  v-bind="props"
  :pt:root:class="$b([`type_${props.severity}`])"
)
  slot
</template>

<style lang="scss" scoped>
.RzdOverlayBadge {
  --scoped-font: #{vars.$fonts-textXS};
  &--type {
    &_contrast {
      --scoped-font: #{vars.$fonts-textBoldXS};
    }
  }
}
</style>

<style lang="scss">
.RzdOverlayBadge {
  --p-overlaybadge-outline-width: 0;
  --p-badge-primary-background: #{vars.$colors-beige};
  --p-badge-primary-color: #{vars.$colors-white};
  --p-badge-contrast-background: #{vars.$colors-greyDark};
  --p-badge-contrast-color: #{vars.$colors-white};
  --p-badge-height: 14px;
  --p-badge-padding: 2px 4px;
  --p-badge-min-width: 54px;

  & > span:last-child {
    font: var(--scoped-font);
    transform: translate(var(--rzd-badge-translateX, 50%), var(--rzd-badge-translateY, -50%));
  }
}
</style>
