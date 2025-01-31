<script setup lang="ts">
import { mockClans } from '~/assets/mocks';


const $b = useBEM('ClansList');

const clansData = mockClans(2, 20, false);

const { checkIsClanOwner } = useUserStore();
</script>

<template lang="pug">
div(:class="$b()")
  template(
    v-for="clanData of clansData"
    :key="clanData.id"
  )
    h3
      | {{ checkIsClanOwner(clanData.ownerId) ? 'Ваш клан' : 'Кланы' }}
    ClanView(:data="clanData")
</template>

<style lang="scss">
.ClansList {
  @include flexColumn((gap: vars.$gaps-g20));
}
</style>
