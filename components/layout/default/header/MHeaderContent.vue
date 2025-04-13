<script setup lang="ts">
import Logo from '~assets/images/logo/light.svg';
import { EIcons } from '~/components/constants';


const route = useRoute();

const isNavMenuOpen = ref<boolean>(false);

function toggleMenu(): void {
  isNavMenuOpen.value = !isNavMenuOpen.value;
}
watch(() => route.path, () => {
  isNavMenuOpen.value = false;
});

const $b = useBEM('MHeader');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('mainView')")
    NuxtLink(
      to="/"
      :class="$b('logo')"
    )
      Logo
    div(
      :class="$b('subcontainer')"
      @click="toggleMenu"
    )
      //- Notifications(v-if="isLoggedIn")
      RzdIcon(:type="EIcons.BURGER")
  Transition
    MNavMenu(v-if="isNavMenuOpen")
</template>

<style lang="scss">
.MHeader {
  &__mainView {
    @include relative((z-index: 1));
    @include flex((
      align-items: center,
      justify-content: space-between
    ));
    height: 54px;
    padding: 4px 16px;
    background-color: vars.$colors-white;
    box-shadow: vars.$shadows-header;
    border-radius: vars.$br-s;
  }
  &__logo {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }
  &__subcontainer {
    @include flex((
      gap: vars.$gaps-g16,
      align-items: center,
    ));
  }
}
</style>
