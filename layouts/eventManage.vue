<script setup lang="ts">
const $b = useBEM('EventManageLayout');
</script>

<template lang="pug">
NuxtLayout(name="default")
  div(:class="$b('')")
    slot
</template>

<style lang="scss">
.EventManageLayout {
  max-width: 1160px;
  & > * {
    @include flexColumn((gap: vars.$gaps-g32));
    width: 100%;
  }
}
</style>
