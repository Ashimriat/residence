<script setup lang="ts">
import { EButtons } from '~/components/base';

const { closeModal } = useModalDialog();

const $b = useBEM('ClanApplication');
</script>

<template lang="pug">
BaseButton(
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
