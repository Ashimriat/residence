<script setup lang="ts">
import { mockRatingsTableData } from '~/assets/mocks/rating';
import { OPTIONS } from './constants/rating';


const { isMobile } = useDevice();


const $b = useBem('RatingPage');
</script>

<template lang="pug">
div(:class="$b()")
  h1
    | Рейтинг - Сезон 1
  BaseSelectButtons(
    is-inverted
    :options="OPTIONS"
  )
  PTreeTable(
    :value="mockRatingsTableData()"
  )
    PColumn(
      :field="''"
      header="#"
    )
    PColumn(
      :field="''"
      header="Имя"
    )
    PColumn(
      :field="''"
      header="Рейтинг"
    )
    PColumn(
      v-if="!isMobile"
      :field="''"
      header="Статистика (поб/пор)"
    )
</template>

<style lang="scss">
.RatingPage {
  
}
</style>
