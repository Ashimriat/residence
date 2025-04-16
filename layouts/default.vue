<script setup lang="ts">
const { platform, isMobile } = usePlatform();

const $b = useBEM('DefaultLayout');
</script>

<template lang="pug">
div(:class="$b()")
  header(:class="$b('header', [platform])")
    MHeaderContent(v-if="isMobile")
    DHeaderContent(v-else)
  main(:class="$b('content')")
    slot
  footer(:class="$b('footer')")
    FooterContent
</template>

<style lang="scss">
.DefaultLayout {
  @include flex-column;
  --headerHeight: 100px;
  --footerHeight: 276px;
  --layout-mobile-content-offset: 0;
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
      @include fixed((top: var(--layout-mobile-header-offset)));
      @include centered-flex;
      background-color: transparent;
      padding: 0 20px;
    }
  }
  &__header,
  &__footer {
    width: 100%;
  }

  &__header > * {
    width: 100%;
    max-width: 1280px;
  }

  &__footer {
    background-color: vars.$colors-bg;
  }

  &__content {
    @include flex-column((align-items: center));
    background-color: vars.$colors-bg;
    min-height: calc(
      100vh - var(--headerHeight) - var(--footerHeight)
    );
    padding-top: var(--layout-mobile-content-offset);
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
    --layout-mobile-header-offset: 33px;
    --layout-mobile-content-offset: 120px;
    --headerBackgroundColor: transparent;
    --mainContentWidth: 100%;
    --mainContentPadding: 0 24px 40px;
  }
}

</style>
