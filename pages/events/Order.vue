<script setup lang="ts">
import { GAMES_OPTIONS } from '../constants/events';


const option = ref<string>('');

const $b = useBEM('OrderPAge');
</script>

<template lang="pug">
div(:class="$b()")
  h1
    | Заказ игры
  BaseSelectButtons(
    is-inverted
    v-model="option"
    :options="GAMES_OPTIONS"
  )
</template>

<style lang="scss">
.OrderPage {
  
}
</style>
