<script setup lang="ts">
import { EButtons } from '~/components/base';



/** Local Types & Variables */
type Props = {
  
};


/** Props & Emits */
const props = defineProps<Props>();


/** State & Composables */
const $b = useBem();
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
    gap: 16px,
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
