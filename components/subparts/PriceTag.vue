<script setup lang="ts">
type Props = {
  value: number;
  oldValue?: number;
};


const { value, oldValue } = defineProps<Props>();

const $b = useBEM('PriceTag');
</script>

<template lang="pug">
div(:class="$b()")
  span(:class="$b(oldValue ? 'oldValue' : 'value')")
    | {{ `${oldValue ?? value}₽` }}
  span(
    v-if="oldValue"
    :class="$b('value')"
  )
    | {{ `${value}₽` }}
</template>

<style lang="scss">
.PriceTag {
  @include flex((
    align-items: flex-end,
    gap: 5px,
  ));
  &__value {
    color: vars.$colors-beige;
    font: vars.$fonts-textExtraBoldXL;
    order: 1;
  }
  &__oldValue {
    font: vars.$fonts-textExtraBoldL;
    color: vars.$colors-beigeMuted;
    text-decoration: line-through;
    order: 2;
  }
}

@include mobile {
  .PriceTag {
    &__value {
      font: vars.$fonts-textBoldL;
    }
    &__oldValue {
      font: vars.$fonts-textBoldM;
    }
  }
}
</style>
