<script setup lang="ts">
import { EButtons } from '~/components/base';


type Props = {
  data: Subscription;
  isOwned?: boolean;
};

const {
  data,
  isOwned
} = defineProps<Props>();


const $b = useBEM('Subscription');
</script>

<template lang="pug">
div(:class="$b({ owned: isOwned })")
  div(:class="$b('generalData')")
    h5
      | {{ data.name }}
    PriceTag(:value="data.price")
  div(:class="$b('description')")
    | {{ data.description }}
  div(
    v-if="!isOwned"
    :class="$b('buttonsContainer')"
  )
    BaseButton(:type="EButtons.BUY")
    BaseButton(:type="EButtons.GIFT_TO_FRIEND")
</template>

<style lang="scss">
.Subscription {
  @include flexColumn((gap: vars.$gaps-m));
  padding: var(--subscriptionPadding, 20px);
  background-color: var(--subscriptionBackgroundColor, #{vars.$colors-white});
  border-radius: vars.$br-s;
  max-width: 620px;
  &--owned {
    --subscriptionBackgroundColor: #{vars.$colors-greyLight};
  }
  &__generalData {
    @include flex((align-items: center, justify-content: space-between));
    & span {
      color: vars.$colors-beige;
      font-size: vars.$fs-l;
      font-weight: vars.$fw-bold;
    }
  }
  &__description {
    font-size: var(--descriptionFontSize, #{vars.$fs-static-s});
    color: vars.$colors-black;
  }
  &__buttonsContainer {
    @include flex((
      justify-content: space-between,
      gap: vars.$gaps-s,
    ));
    & button {
      width: calc((100% - #{vars.$gaps-s}) / 2);
      height: 40px;
    }
  }
}

@include mobile {
  .Subscription {
    --subscriptionPadding: 12px;
    --descriptionFontSize: #{vars.$fs-static-xs};
  }
}
</style>
