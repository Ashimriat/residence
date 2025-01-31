<script setup lang="ts">
import DesktopHeader from './parts/header/DesktopHeader.vue';
import MobileHeader from './parts/header/MobileHeader.vue';
import FooterContent from './parts/FooterContent.vue';


const { isMobile } = useDevice();
const { openSignIn } = useModalDialog();

const headerComponent = computed(() => (
  !isMobile ? DesktopHeader : MobileHeader
));

/** Methods */
function addEvent(): void {
  
}

const $b = useBEM('DefaultLayout');
</script>

<template lang="pug">
div(:class="$b()")
  header(:class="$b('header', { desktop: !isMobile, mobile: isMobile })")
    component(
      :is="headerComponent"
      :class="$b('headerContent')"
      @login="openSignIn"
      @add-event="addEvent"
    )
  main(:class="$b('content')")
    slot
  footer(:class="$b('footer')")
    FooterContent
</template>

<style lang="scss">
.DefaultLayout {
  @include flexColumn;
  --headerHeight: 100px;
  --footerHeight: 276px;
  --mobileHeaderOffset: 0;
  --headerBackgroundColor: #{vars.$colors-bg};
  --mainContentWidth: 1440px;
  --mainContentPadding: 60px 80px 160px;
  &__header {
    @include sticky((z-index: 10, top: 0));
    background-color: var(--headerBackgroundColor);
    &--desktop {
      @include flex((justify-content: center));
      padding: 24px 80px;
      height: vars.$rest-desktopHeaderHeight;
      box-shadow: vars.$shadows-base;
    }
    &--mobile {
      @include fixed((top: 58px));
      @include centeredFlex;
      background-color: transparent;
      padding: 0 24px;
    }
  }
  &__header,
  &__headerContent,
  &__footer {
    width: 100%;
  }

  &__headerContent {
    max-width: 1280px;
  }

  &__footer {
    background-color: vars.$colors-bg;
  }

  &__content {
    @include flexColumn((align-items: center));
    background-color: vars.$colors-bg;
    min-height: calc(
      100vh - var(--headerHeight) - var(--footerHeight)
    );
    padding-top: var(--mobileHeaderOffset);
    & > div {
      width: var(--mainContentWidth);
      padding: var(--mainContentPadding);
    }
  }
}

@include mobile {
  .DefaultLayout {
    --headerHeight: 0px;
    --footerHeight: 386px;
    --mobileHeaderOffset: 160px;
    --headerBackgroundColor: transparent;
    --mainContentWidth: 100%;
    --mainContentPadding: 0 24px 40px;
  }
}

</style>
