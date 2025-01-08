<script setup lang="ts">
const $b = useBem();
</script>

<template lang="pug">
div(:class="$b()")
  | Галлерея
</template>

<style lang="scss">
.GalleryPage {
}
</style>
