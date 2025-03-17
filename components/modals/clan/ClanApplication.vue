<script setup lang="ts">
import { EButtons } from '~/constants/components';

const { closeModal } = useModalDialog();

const $b = useBEM('ClanApplication');
</script>

<template lang="pug">
RzdButton(
  :class="$b()"
  :type="EButtons.CLAN_APPLICATION_CONFIRM"
  @click="closeModal"
)
</template>

<style lang="scss">
.ClanApplication {
  width: 100%;
}
</style>
