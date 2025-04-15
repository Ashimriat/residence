<script setup lang="ts">
type Props = {
  value: number;
  oldValue?: number;
  isSmall?: boolean;
};


const { isMobile } = useDevice();

const { value, oldValue, isSmall } = defineProps<Props>();

const $b = useBEM('PriceTag');
</script>

<template lang="pug">
div(:class="$b({ small: isSmall && isMobile })")
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

  --scoped-font-price: #{vars.$fonts-textExtraBoldXL};
  --scoped-font-oldprice: #{vars.$fonts-textExtraBoldL};
  
  &__value {
    color: vars.$colors-beige;
    font: var(--scoped-font-price);
    order: 1;
  }
  &__oldValue {
    font: var(--scoped-font-oldprice);
    color: vars.$colors-beigeMuted;
    text-decoration: line-through;
    order: 2;
  }
}

@include mobile {
  .PriceTag {
    --scoped-font-price: #{vars.$fonts-textBoldL};
    --scoped-font-oldprice: #{vars.$fonts-textBoldM};

    &--small {
      --scoped-font-price: #{vars.$fonts-textBoldM};
    }
  }
}
</style>
