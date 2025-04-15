<script setup lang="ts">
import { EButtons } from '~/components/constants';


type Props = {
  data: Subscription;
  isOwned?: boolean;
};

const {
  data,
  isOwned,
} = defineProps<Props>();


const $b = useBEM('EventSubscription');
</script>

<template lang="pug">
div(:class="$b({ owned: isOwned })")
  div(:class="$b('generalData')")
    h5
      | {{ data.name }}
    PriceTag(
      is-small
      :value="data.price"
    )
  div(:class="$b('description')")
    | {{ data.description }}
  div(
    v-if="!isOwned"
    :class="$b('buttonsContainer')"
  )
    RzdButton(:type="EButtons.BUY")
    RzdButton(:type="EButtons.GIFT_TO_FRIEND")
</template>

<style lang="scss">
.EventSubscription {
  @include flex-column((gap: vars.$gaps-g24));
  padding: var(--subscriptionPadding, 20px);
  background-color: var(--subscriptionBackgroundColor, #{vars.$colors-white});
  border-radius: vars.$br-s;
  max-width: 620px;
  flex-grow: 1;
  &--owned {
    --subscriptionBackgroundColor: #{vars.$colors-greyLight};
  }
  &__generalData {
    @include flex((align-items: center, justify-content: space-between));
  }
  &__description {
    font: var(--font-text-m);
    color: vars.$colors-black;
  }
  &__buttonsContainer {
    @include flex((
      justify-content: space-between,
      gap: vars.$gaps-g12,
    ));
    & button {
      width: calc((100% - #{vars.$gaps-g12}) / 2);
      height: 40px;
    }
  }
}

@include mobile {
  .Subscription {
    --subscriptionPadding: 12px;
  }
}
</style>
