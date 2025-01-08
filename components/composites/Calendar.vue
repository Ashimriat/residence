<script setup lang="ts">
const $b = useBem();
</script>

<template lang="pug">
div(:class="$b()")
  | Календарь
</template>

<style lang="scss">
.Calendar {
  width: 320px;
  height: 284px;
  border: 2px solid vars.$colors-black;
  border-radius: vars.$br-l;
  box-sizing: border-box;
}
</style>
