<script setup lang="ts">
import { EIcons } from '~/constants/components';

type Props = {
  withBg?: boolean;
};
/** State & Composables */
const { withBg } = defineProps<Props>();
const userStore = useUserStore();
const { providedData } = storeToRefs(userStore);

/** Computeds */


/** Methods */


/** Watchers */


/** Lifecycle Hooks */
const $b = useBEM('Notifications');
</script>

<template lang="pug">
NuxtLink(
  v-if="false"
  :class="$b({ colored: withBg })"
  to="/account/notifications"
)
  RzdIcon(
    v-if="!providedData.notifications.length"
    :type="EIcons.BELL"
  )
  POverlayBadge(
    v-else
    :value="providedData.notifications.length"
  )
    RzdIcon(:type="EIcons.BELL")
</template>

<style lang="scss">
.Notifications {
  padding: 6px;
  border-radius: vars.$br-xs;
  &--colored {
    background-color: vars.$colors-white;
  }
}

@include mobile {
  .Notifications {
    --badgeTranslateX: 2px;
    --badgeTranslateY: -4px;
  }
}
</style>
