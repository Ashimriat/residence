<script setup lang="ts">
import type { SubwayData } from '~/types/data/subway';
import { SUBWAY_BRANCHES_COLORS_DICT } from '~/constants/components';


const { branchType, stationName } = defineProps<SubwayData>();

const backgroundColor = computed<string>(
  () => SUBWAY_BRANCHES_COLORS_DICT[branchType]
);

const $b = useBEM('SubwayStation');
</script>

<template lang="pug">
div(:class="$b()")
  span(:class="$b('marker')")
  span(:class="$b('station')")
    | {{ stationName }}
</template>

<style lang="scss">
.SubwayStation {
  @include centeredFlex((gap: 6px));

  &__marker {
    width: 10px;
    height: 10px;
    background-color: v-bind('backgroundColor');
    border-radius: 50%;
  }

  &__station {
    font-weight: vars.$fw-midHeavy;
    line-height: 140%;
  }
}
</style>
