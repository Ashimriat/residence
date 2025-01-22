<script setup lang="ts">
import { mockClans } from '~/assets/mocks';


const $b = useBEM();
</script>

<template lang="pug">
div(:class="$b()")
  template(
    v-for="(isClanOwner, i) of [true, false]"
    :key="`clan_${i}`"
  )
    h3
      | {{ isClanOwner ? 'Ваш клан' : 'Кланы' }}
    ClanView(
      :is-clan-owner="isClanOwner"
      :data="mockClans(1, 20, false)[0]"
    )
</template>

<style lang="scss">
@use 'sass:color';

.ClansList {
  @include flexColumn((gap: 0.8rem));
}
</style>
