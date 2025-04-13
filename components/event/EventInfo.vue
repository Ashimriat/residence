<script setup lang="ts">
type Props = {
  data: EventData;
  withAbon: boolean;
  isAccountMode: boolean;
};


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
  RzdChip(
    v-if="withAbon && isAbonWorks"
    label="Действует абонемент"
  )
  div(:class="$b('gameNamePriceBlock')")
    component(
      :is="isAccountMode ? 'h5' : 'h4'"
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
    :address="gameData.address"
    :subway="locationData.subway"
  )
  slot
</template>

<style lang="scss">
.EventInfo {
  @include flex-column((gap: var(--contentGap)));

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

  &__gameNamePriceBlock {
    @include centered-flex((justify-content: space-between));
  }

  &__gameTitle {
    color: var(--gameTitleColor);
  }
}
</style>
