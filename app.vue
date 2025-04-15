<script setup lang="ts">
import { init, expandViewport, isTMA } from '@telegram-apps/sdk-vue';

const { isMobile } = useDevice();

onBeforeMount(() => {
  if (!isTMA()) return;
  init();
  if (!isMobile) {
    expandViewport();
  }
});
</script>

<template lang="pug">
NuxtRouteAnnouncer
NuxtLayout
  NuxtPage
RzdModals
</template>

<style lang="scss">
@use 'primeicons/primeicons.css';
@use '~scss/fonts';
@use '~scss/main';
@use '~scss/root';
</style>