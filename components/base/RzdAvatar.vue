<script setup lang="ts">
import type { AvatarProps } from 'primevue';


const props = defineProps<AvatarProps>();

const $b = useBEM('RzdAvatar');
</script>

<template lang="pug">
PAvatar(
  v-bind="props"
  :pt:root:class="$b()"
  :pt:label:class="$b('label')"
)
  template(#icon)
    slot(name="icon")
</template>

<style lang="scss">
.RzdAvatar {
  min-width: var(--rzd-avatar-size, 48px);
  min-height: var(--rzd-avatar-size, 48px);
  width: var(--rzd-avatar-size, 48px);
  height: var(--rzd-avatar-size, 48px);
  --p-avatar-background: var(--avatarBackground, #{vars.$colors-black});
  --p-avatar-lg-width: 180px;
  --p-avatar-xl-width: 240px;
  --p-avatar-color: #{vars.$colors-white};
  --p-avatar-border-radius: #{vars.$br-m};
  &__label {
    font: vars.$fonts-textBoldL;
    font-size: var(--rzd-avatar-label-fontsize, 20px);
  }
}
</style>
