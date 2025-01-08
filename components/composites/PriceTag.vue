<script setup lang="ts">
/** Local Types & Variables */
type Props = {
  value: number;
  oldValue?: number;
  isLargeFont?: boolean;
};

/** Props & Emits */
const { value, oldValue, isLargeFont } = defineProps<Props>();


const $b = useBem();
</script>

<template lang="pug">
div(:class="$b({ large: isLargeFont })")
  span(:class="$b(oldValue ? 'oldValue' : 'value')")
    | {{ `${oldValue ?? value}₽` }}
  span(
    v-if="oldValue"
    :class="$b('value')"
  )
    | {{ `${value}₽` }}
</template>

<style lang="scss" scoped>
.PriceTag {
  @include flex((
    align-items: flex-end,
    gap: 5px,
  ));
  --priceFontSize: #{vars.$fs-l};
  --oldPriceFontSize: #{vars.$fs-m};
  &--large {
    --priceFontSize: #{vars.$fs-xl};
    --oldPriceFontSize: #{vars.$fs-l};
  }
  &__value {
    color: vars.$colors-beige;
    font-size: var(--priceFontSize);
    font-weight: vars.$fw-bold;
    order: 1;
  }
  &__oldValue {
    color: vars.$colors-beigeMuted;
    font-size: var(--oldPriceFontSize);
    font-weight: vars.$fw-bold;
    text-decoration: line-through;
    order: 2;
  }
}
</style>
