<script setup lang="ts">
import { EIcons } from '../base';


/** State & Composables */
const userStore = useUserStore();
const { providedData  } = storeToRefs(userStore);

/** Computeds */


/** Methods */


/** Watchers */


/** Lifecycle Hooks */
const $b = useBem();
</script>

<template lang="pug">
div(:class="$b()")
  BaseIcon(:type="EIcons.BELL")
  span
    | {{ providedData.notifications?.length }}
</template>

<style module lang="scss">
.Notifications {
  @include relative;
  @include centeredFlex;
  min-width: 38px;
  height: 38px;
  cursor: pointer;
  & > div {
    width: unset;
    height: unset;
  }
  & > span {
    @include absolute((
      top: 0,
      right: 2px,
    ));
    @include centeredFlex;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: vars.$colors-beige;
    color: vars.$colors-white;
    font-size: 8px;
    font-weight: vars.$fw-midHeavy;
  }
}
</style>
