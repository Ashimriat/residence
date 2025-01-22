<script setup lang="ts">
const $b = useBEM();
</script>

<template lang="pug">
div(:class="$b()")
  | Галлерея
</template>

<style lang="scss">
.GalleryPage {
}
</style>
