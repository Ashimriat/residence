<script setup lang="ts">
import type { CSSProperties } from 'vue';


type Branch = `standard${number}` | 'mcc' | `mcd${number}`;


/** Local Types & Variables */
/** @todo: использовать SubwayData */
type Props = {
  branchType: Branch;
  station: string;
};


/** Props & Emits */
const { branchType, station } = defineProps<Props>();

const styles = computed<CSSProperties>(() => ({
  '--backgroundColor': '#805441',
}));


const $b = useBEM();
</script>

<template lang="pug">
div(:class="$b()")
  span(:style="styles")
  span
    | {{ station }}
</template>

<style lang="scss">
.SubwayStation {
  @include centeredFlex((gap: 6px));
  & > span:first-of-type {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--backgroundColor);
  }
  & > span:last-of-type {
    font-size: vars.$fs-m;
    font-weight: vars.$fw-midHeavy;
    line-height: 140%; /* 28px */
  }
}
</style>
