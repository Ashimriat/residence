<script setup lang="ts">
import Logo from '~assets/images/logo/light.svg';
import {
  EIcons,
  EButtonVariant,
  EButtons,
} from '~/components/base';
import { EComponentEvents } from '../constants/header';


/** Local Types & Variables */
type Emits = {
  (e: EComponentEvents.LOGIN): void;
  (e: EComponentEvents.ADD_EVENT): void;
};


/** Props & Emits */
const emit = defineEmits<Emits>();
const userStore = useUserStore();
const { isLoggedIn, isCommonUser } = storeToRefs(userStore);

/** State & Composables */
const isOpen = ref<boolean>(false);
const $b = useBem();


/** Computeds */


/** Methods */
function toggleMenu(): void {
  isOpen.value = !isOpen.value;
}

/** Watchers */


/** Lifecycle Hooks */

</script>

<template lang="pug">
div(:class="$b('content')")
  Logo(:class="$b('logo')")
  div(
    :class="$b('subcontainer')"
    @click="toggleMenu"
  )
    Notifications(v-if="isLoggedIn")
    BaseIcon(:type="EIcons.BURGER")
  div(
    v-if="isOpen"
    :class="$b('innerMenu')"
  )
    template(v-if="!isLoggedIn")
      BaseButton(
        :type="EButtons.SIGN_IN"
        @click="emit(EComponentEvents.LOGIN)"
      )
    template(v-else)
      BaseButton(
        :type="EButtons.ADD_EVENT"
        @click="emit(EComponentEvents.ADD_EVENT)"
      )
</template>

<style lang="scss">
.MobileHeader {
  &__content {
    @include centeredFlex((justify-content: space-between));
    height: 46px;
    width: 88%;
    padding: 4px 16px;
    border-radius: vars.$br-s;
    background-color: vars.$colors-white;
    box-shadow: vars.$rest-baseShadow;
    border-radius: vars.$br-s;
  }
  &__logo {
    border-radius: 50%;
  }
  &__subcontainer {
    @include flex((gap: 16px));
  }
  &__innerMenu {
    @include absolute((top: 54px, left: 0));
    @include flexColumn((gap: 12px));
    width: 100vw;
    height: 100vh;
    padding: 72px 20px;
    box-sizing: border-box;
    background-color: vars.$colors-menuBackgroundGrey;
  }
}
</style>
