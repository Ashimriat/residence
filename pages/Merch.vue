<script setup lang="ts">
import { mockMerchData } from '~assets/mocks';


const { seeMerch } = useModalDialog();
const $b = useBem('MerchPage');
</script>

<template lang="pug">
section(:class="$b()")
  h2
    | Мерч Резиденции
  div(:class="$b('container')")
    div(
      v-for="(val, i) in mockMerchData(6)"
      :key="`merch_${i}`"
      :class="$b('merchItem')"
      @click="seeMerch(val)"
    )
      div(:class="$b('merchDataContainer')")
        h5
          | {{ val.title }}
        PriceTag(:value="val.price")
</template>

<style lang="scss">
.MerchPage {
  @include flexColumn((gap: 1.5rem));
  &__container {
    @include flex((
      gap: 2rem,
      flex-wrap: wrap,
    ));
  }
  &__merchItem {
    @include flex((align-items: flex-end));
    padding: 12px;
    background-color: vars.$colors-greyLight;
    flex-basis: 100%;
    height: 400px;
    max-width: 400px;
    border-radius: vars.$br-l;
    cursor: pointer;
  }
  &__merchDataContainer {
    @include flex((
      justify-content: space-between,
      align-items: center,
    ));
    flex-basis: 100%;
    background-color: vars.$colors-white;
    height: 53px;
    padding: 12px;
    border-radius: vars.$br-s;
  }
}
</style>
