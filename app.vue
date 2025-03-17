<script setup lang="ts">
const { isMobile } = useDevice();

onBeforeMount(() => {
  if (!isMobile) {
    // window.Telegram?.WebApp?.expand();
  } else {
    document.documentElement.style.setProperty('--docFontSize', '10px');
  }
});
</script>

<template lang="pug">
NuxtRouteAnnouncer
NuxtLayout
  NuxtPage 
PDynamicDialog
</template>

<style lang="scss">
@use 'primeicons/primeicons.css';
@use '~scss/fonts';

:root {
  --staticFontSize-M-S: #{vars.$fs-static-m};
  --staticFontSize-S-XS: #{vars.$fs-static-s};
}

html {
  font-size: var(--docFontSize, 20px);
}

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
h5,
h6 {
  margin: 0;
  color: vars.$colors-black;
  font-weight: vars.$fw-extraBold;
}

h1 {
  font-size: vars.$fs-header-x2l;
}

h2 {
  font-size: vars.$fs-header-xl;
}

h3 {
  font-size: vars.$fs-header-l;
}

h4 {
  font-size: vars.$fs-header-m;
}

h5 {
  font-size: vars.$fs-header-s;
}

h6 {
  font-size: vars.$fs-header-xs;
}

p {
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--linkColor, vars.$colors-black);
}

@include mobile {
  :root {
    --staticFontSize-M-S: #{vars.$fs-static-s};
    --staticFontSize-S-XS: #{vars.$fs-static-xs};
  }
}
</style>