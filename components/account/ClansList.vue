<script setup lang="ts">
import { mockClans } from '~/assets/mocks';


const $b = useBEM('ClansList');

const clansData = mockClans(4, 20, false);
</script>

<template lang="pug">
div(:class="$b()")
  h3
    | Ваш клан
  ClanView(:data="clansData[0]")
  h3
    | Кланы
  BaseCarousel(:items="clansData.slice(0)")
    template(#default="{ itemsData }")
      ClanView(:data="itemsData[0]")
</template>

<style lang="scss">
.ClansList {
  @include flexColumn((gap: vars.$gaps-g20));
}
</style>
