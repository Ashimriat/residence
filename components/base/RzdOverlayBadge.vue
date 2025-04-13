<script setup lang="ts">
import type { OverlayBadgeProps } from 'primevue';


const props = defineProps<OverlayBadgeProps>();

const $b = useBEM('RzdOverlayBadge');
</script>

<template lang="pug">
POverlayBadge(
  v-bind="props"
  :pt:pc-badge:root:class="$b()"
)
  slot
</template>

<style lang="scss">
.RzdOverlayBadge {
  --p-overlaybadge-outline-width: 0;
  --p-badge-primary-background: #{vars.$colors-beige};
  --p-badge-height: var(--badgeHeight, 18px);
  --p-badge-min-width: var(--badgeMinWidth, 18px);
  --p-badge-font-size: var(--badgeFontSize, #{vars.$fs-xs});
  transform: translate(var(--badgeTranslateX, 50%), var(--badgeTranslateY, -50%));
}

@include mobile {
  .RzdOverlayBadge {
    --badgeHeight: 12px;
    --badgeFontSize: #{vars.$fs-x2s};
    --badgeMinWidth: 12px;
  }
}
</style>
