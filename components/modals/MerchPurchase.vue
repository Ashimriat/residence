<script setup lang="ts">
import { EButtons } from '~/components/base';

/** State & Composables */
const $b = useBEM();
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('image')")
  div(:class="$b('text')")
    | Для оформления заказа - напишите нам в Телеграмм
  BaseButton(
    :type="EButtons.BUY_MERCH"
    :class="$b('button')"
  )
</template>

<style module lang="scss">
.MerchPurchase {
  @include flexColumn((
    align-items: center,
    gap: vars.$gaps-g16,
  ));
  &__image {
    width: 240px;
    height: 240px;
    background-color: vars.$colors-greyDark;
    border-radius: vars.$br-m;
  }
  &__button {
    width: 100%;
  }
}
</style>
