<script setup lang="ts">
import { EIcons } from '~/constants/components';


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
  div(:class="$b('gameDataBlock')")
    div(:class="$b('dateTimeBlock')")
      span
        | {{ gameData.date }}
      PDivider(
        layout="horizontal"
        :class="$b('divider')"
      )
      BaseIcon(:type="EIcons.CLOCK")
      span
        | {{ gameData.time }}
    div(:class="$b('locationBlock')")
      span
        | Адрес
      SubwayStation(v-bind="locationData.subway")
  slot
</template>

<style lang="scss">
.EventInfo {
  @include flexColumn((gap: var(--contentGap)));
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  background-color: var(--contentBackgroundColor);
  border-radius: vars.$br-m;
  --contentBackgroundColor: #{vars.$colors-white};
  --contentGap: #{vars.$gaps-g24};
  --contentFontSize: #{vars.$fs-s};
  --contentColor: #{vars.$colors-black};
  --gameColor: #{vars.$colors-black};
  --gameTitleColor: #{vars.$colors-black};
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
  &__gameDataBlock {
    @include flexColumn((gap: vars.$gaps-g12));
  }
  &__dateTimeBlock {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g12,
    ));
    & span {
      font-weight: vars.$fw-midHeavy;
    }
    & svg {
      // fill: var(--contentColor);
    }
  }
  &__divider {
    flex-shrink: 10;
  }
  &__locationBlock {
    @include flex((
      justify-content: space-between,
      align-items: center,
    ));
    & > span {
      text-decoration: underline;
      line-height: 140%;
      cursor: pointer;
    }
  }
}
</style>
