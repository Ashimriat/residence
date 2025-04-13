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

body {
  margin: 0;
  & * {
    font-family: Inter;
    user-select: none;
  }
}

#__nuxt {
  @include relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  color: vars.$colors-black;
}

h1 {
  font: vars.$fonts-desktopH1;
}

h2 {
  font: vars.$fonts-desktopH2;
}

h3 {
  font: vars.$fonts-desktopH3;
}

h4 {
  font: vars.$fonts-desktopH4;
}

h5 {
  font: vars.$fonts-desktopH5;
}

p {
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--linkColor, vars.$colors-black);
}

@include mobile {
  h1 {
    font: vars.$fonts-mobileH1;
  }

  h2 {
    font: vars.$fonts-mobileH2;
  }

  h3 {
    font: vars.$fonts-mobileH3;
  }

  h4 {
    font: vars.$fonts-mobileH4;
  }

  h4 {
    font: vars.$fonts-mobileH5;
  }
}
</style>