<script setup lang="ts">
import type { SubwayData } from '~/types/data/subway';
import type { Time } from '../DateTimeCalendar.vue';
import { EIcons } from '~/constants/components';


type Props = {
  date: string;
  time: Time;
  subway: SubwayData;
};


/** Props & Emits */
const {
  date,
  time,
  subway,
} = defineProps<Props>();


const $b = useBEM('EventDatePlace');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('dateTimeBlock')")
    span
      | {{ date }}
    PDivider(
      layout="horizontal"
      :class="$b('divider')"
    )
    BaseIcon(:type="EIcons.CLOCK")
    div
      | {{ time }}
  div(:class="$b('locationBlock')")
    span
      | Адрес
    SubwayStation(v-bind="subway")
</template>

<style lang="scss">
.EventDatePlace {
  @include flexColumn((gap: vars.$gaps-g12));

  --iconStroke: #{vars.$colors-white};

  width: 100%;
  font-size: vars.$fs-static-s;
  color: vars.$colors-white;

  &__dateTimeBlock {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g12,
    ));

    & > span {
      font-weight: vars.$fw-midHeavy;
      white-space: nowrap;
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
      line-height: 140%;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
