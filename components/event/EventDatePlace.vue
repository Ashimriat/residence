<script setup lang="ts">
import { EIcons } from '~/components/constants';


type Props = {
  date: string;
  time: Time;
  address: string;
  subway: SubwayStationProps;
};


/** Props & Emits */
const {
  date,
  time,
  address,
  subway,
} = defineProps<Props>();


const $b = useBEM('EventDatePlace');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('dateTimeBlock')")
    span
      | {{ date }}
    RzdDivider(
      layout="horizontal"
      :class="$b('divider')"
    )
    RzdIcon(:type="EIcons.CLOCK")
    span
      | {{ time }}
  div(:class="$b('locationBlock')")
    span(v-tooltip.top="address")
      | Адрес
    SubwayStation(v-bind="subway")
</template>

<style lang="scss">
.EventDatePlace {
  @include flex-column((gap: vars.$gaps-g12));

  width: 100%;
  font-size: vars.$fs-s;

  & span {
    font: vars.$fonts-textM;
    color: var(--contentColor);
    white-space: nowrap;
  }

  &__dateTimeBlock {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g12,
    ));
    color: vars.$colors-black;
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
      line-height: 140%;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
