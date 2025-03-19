<script setup lang="ts">
import { EIcons, EButtons } from '~/components/constants';
import Logo from '~/assets/images/logo/small.svg';


const userStore = useUserStore();
const { isLoggedIn, isCommonUser } = storeToRefs(userStore);
const { openSignIn } = useModalDialog();

function addEvent(): void {
  
}

const $b = useBEM('DesktopHeader');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('subBlock')")
    div(:class="$b('logoContainer')")
      NuxtLink(to="/")
        Logo(:class="$b('logo')")
    div(
      v-if="false"
      :class="$b('locationBlock')"
    )
      RzdIcon(:type="EIcons.LOCATION")
      span
        | Москва
  NavigationMenu
  div(:class="$b('userBlock')")
    RzdButton(
      v-if="!isLoggedIn"
      :type="EButtons.SIGN_IN"
      :class="$b('userButton')"
      @click="openSignIn"
    )
    template(v-else)
      NuxtLink(
        v-if="false && !isCommonUser"
        to="/events/create"
      )
        RzdButton(
          :type="EButtons.ADD_EVENT"
          :class="$b('userButton')"
          @click="addEvent"
        )
      Notifications
      NuxtLink(to="/account")
        PAvatar(label="UI")
</template>

<style lang="scss">
.DesktopHeader {
  @include flex((justify-content: space-between));
  &__subBlock {
    @include flex((gap: vars.$gaps-g16));
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
  &__userBlock {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g16,
    ));
  }
  &__userButton {
    & > span {
      font-size: vars.$fs-s;
    }
  }
}
</style>
