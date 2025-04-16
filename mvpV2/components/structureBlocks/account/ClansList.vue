<script setup lang="ts">
import { mockClans } from '~/__mocks__';


const $b = useBEM('ClansList');

const clansData = mockClans(4, 20, false);


function test() {
  console.log("TEST")
}
</script>

<template lang="pug">
div(:class="$b()")
  h4
    | Ваш клан
  ClanView(:data="clansData[0]")
  h4
    | Кланы
  RzdCarousel(
    v-slot="{ itemsData }"
    :items="clansData.slice(1)"
  )
    ClanView(:data="itemsData[0]")
</template>

<style lang="scss">
.ClansList {
  @include flex-column((gap: vars.$gaps-g20));
}
</style>
