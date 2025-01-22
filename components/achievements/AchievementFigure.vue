<script setup lang="ts">
const $b = useBEM('Achievement');
</script>

<template lang="pug">
div(:class="$b()")
</template>

<style lang="scss">
.Achievement {
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--backgroundColor);
  clip-path: vars.$figures-achievement;
  --backgroundColor: #{vars.$colors-grey};
}
</style>
