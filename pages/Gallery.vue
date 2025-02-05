<script setup lang="ts">
const $b = useBEM('Gallery');
</script>

<template lang="pug">
div(:class="$b()")
  | Галлерея
</template>

<style lang="scss">
.GalleryPage {
}
</style>
