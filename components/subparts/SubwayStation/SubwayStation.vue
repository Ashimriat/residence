<script setup lang="ts">
import { SUBWAY_BRANCHES_COLORS_DICT } from './constants';


type Branch = `standard${number}${string}` | 'mcc' | `mcd${number}${string}`;

export type Props = {
  branchType: Branch;
  stationName: string;
  id: string;
};

const { branchType, stationName } = defineProps<Props>();

const backgroundColor = computed<string>(
  () => SUBWAY_BRANCHES_COLORS_DICT[branchType],
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
  @include centered-flex((gap: 6px));

  &__marker {
    width: 10px;
    height: 10px;
    background-color: v-bind('backgroundColor');
    border-radius: 50%;
  }

  &__station {
    font: var(--font-text-m);
  }
}
</style>
