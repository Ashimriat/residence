<script setup lang="ts">
import DesktopHeader from '~/components/layouts/header/DesktopHeader.vue';
import MobileHeader from '~/components/layouts/header/MobileHeader.vue';

// const userStore = useUserStore();
// const { isLoggedIn, isCommonUser } = storeToRefs(userStore);
const { isMobile } = useDevice();
const { openSignIn } = useModalDialog();

const headerComponent = computed(() => (
  !isMobile ? DesktopHeader : MobileHeader
));

/** Methods */
function addEvent(): void {
  
}

const $b = useBem('DefaultLayout');
</script>

<template lang="pug">
header(:class="$b('header', { desktop: !isMobile, mobile: isMobile })")
  component(
    :is="headerComponent"
    @login="openSignIn"
    @add-event="addEvent"
  )
main(:class="$b('contentContainer')")
  slot
footer(:class="$b('footer')")
  FooterContent
</template>

<style lang="scss">
.DefaultLayout {
  &__header {
    @include sticky((z-index: 10, top: 0));
    &--desktop {
      @include flex((justify-content: center));
      padding: 24px 80px;
      height: vars.$rest-desktopHeaderHeight;
      box-shadow: vars.$rest-baseShadow;
    }
    &--mobile {
      @include fixed((top: 58px));
      @include centeredFlex;
      background-color: transparent;
    }
    & > div {
      max-width: 1440px;
      width: 100%;
    }
  }

  &__header,
  &__footer {
    width: 100%;
    background-color: vars.$colors-greyBackground;
  }

  &__contentContainer {
    @include flexColumn((align-items: center));
    background-color: vars.$colors-greyBackground;
    min-height: calc(
      100vh - var(--headerHeight, #{vars.$rest-desktopHeaderHeight}) - var(--footerHeight, vars.$rest-footerDesktopHeight)
    );
    & > div,
    & > section {
      width: 1440px;
      padding: var(--sectionPaddingTop, 60px) 0 var(--sectionPaddingBottom, 160px);
    }
  }
}

@include mobile {
  .DefaultLayout {
    &__contentContainer {
      padding-top: vars.$rest-mobileHeaderOffset;
      --headerHeight: 0px;
      --footerHeight: #{vars.$rest-footerMobileHeight};
      & > div {
        width: 100%;
        padding: 0 24px 40px !important;
      }
    }
  }
}

</style>
