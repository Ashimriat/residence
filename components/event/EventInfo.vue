<script setup lang="ts">
type Props = {
  data: EventData;
  withAbon: boolean;
  isAccountMode: boolean;
};


/** Props & Emits */
const { data, withAbon, isAccountMode } = defineProps<Props>();

const {
  gameData,
  locationData,
  isAbonWorks,
  price,
  oldPrice,
} = data;

const $b = useBEM('EventInfo');
</script>

<template lang="pug">
div(:class="$b({ account: isAccountMode })")
  PChip(
    v-if="withAbon"
    label="Действует абонемент"
  )
  div(:class="$b('gameNamePriceBlock')")
    component(
      :is="isAccountMode ? 'h6' : 'h4'"
      :class="$b('gameTitle')"
    )
      | {{ gameData.title }}
    PriceTag(
      v-if="!isAccountMode"
      :value="price"
      :old-value="oldPrice"
    )
  EventDatePlace(
    :date="gameData.date"
    :time="gameData.time"
    :subway="locationData.subway"
  )
  slot
</template>

<style lang="scss">
.EventInfo {
  @include flexColumn((gap: var(--contentGap)));

  --contentBackgroundColor: #{vars.$colors-white};
  --contentGap: #{vars.$gaps-g24};
  --contentFontSize: #{vars.$fs-s};
  --contentColor: #{vars.$colors-black};
  --gameColor: #{vars.$colors-black};
  --gameTitleColor: #{vars.$colors-black};

  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  background-color: var(--contentBackgroundColor);
  border-radius: vars.$br-m;

  &--account {
    --contentGap: 0;
    --contentBackgroundColor: #{vars.$colors-greyDark};
    --contentFontSize: #{vars.$fs-s};
    --contentColor: #{vars.$colors-white};
    --gameTitleColor: #{vars.$colors-beige};
  }

  & span {
    color: var(--contentColor);
    white-space: nowrap;
  }

  & svg {
    --stroke: var(--contentColor);
  }

  & > div {
    &:last-of-type * {
      font-size: var(--contentFontSize);
    }
  }

  &__gameNamePriceBlock {
    @include centeredFlex((justify-content: space-between));
  }

  &__gameTitle {
    color: var(--gameTitleColor);
  }
}
</style>
