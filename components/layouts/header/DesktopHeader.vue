<script setup lang="ts">
import {
  EIcons,
  EButtons,
} from '~/components/base';
import { EComponentEvents } from '../constants/header';
import Logo from '~/assets/images/logo/small.svg';


type Emits = {
  (e: EComponentEvents.LOGIN): void;
  (e: EComponentEvents.ADD_EVENT): void;
};

const emit = defineEmits<Emits>();

const userStore = useUserStore();
const { isLoggedIn, isCommonUser } = storeToRefs(userStore);


const $b = useBem();
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('subBlock')")
    div(:class="$b('logoContainer')")
      Logo(
        :class="$b('logo')"
        width="125"
        height="52"
      )
    div(:class="$b('locationBlock')")
      BaseIcon(:type="EIcons.LOCATION")
      span
        | Москва
  NavigationMenu(:class="$b('menu')")
  div(:class="$b('userBlock')")
    BaseButton(
      v-if="!isLoggedIn"
      :type="EButtons.SIGN_IN"
      :class="$b('userButton')"
      @click="emit(EComponentEvents.LOGIN)"
    )
    template(v-else)
      BaseButton(
        v-if="!isCommonUser"
        :type="EButtons.ADD_EVENT"
        :class="$b('userButton')"
        @click="emit(EComponentEvents.ADD_EVENT)"
      )
      Notifications
      NuxtLink(to="/account")
        PAvatar(label="UI")
</template>

<style lang="scss">
.DesktopHeader {
  @include flex((justify-content: space-between));
  padding: 0 80px;
  &__subBlock {
    @include flex((gap: 16px));
  }
  &__logoContainer {
    @include relative;
    padding: 0 4px;
    background-color: vars.$colors-black;
    border-radius: vars.$br-s;
    width: 124px;
    height: 52px;
    overflow: hidden;
  }
  &__logo {
    @include absolute((left: 0));
  }
  &__locationBlock {
    @include centeredFlex((gap: 4px));
    & > div {
      width: 18px;
      height: 18px;
    }
  }
  &__menu {
    --titleFontSize: #{vars.$fs-s};
    --gap: 24px;
    --sectionJustify: center;
  }
  &__userBlock {
    @include flex((
      align-items: center,
      gap: 16px,
    ));
  }
  &__userButton {
    & > span {
      font-size: vars.$fs-s;
    }
  }
}
</style>
