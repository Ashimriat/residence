<script setup lang="ts">
import { EIcons, EIconsSizes } from '~/components/base';
import NavigationMenu from './NavigationMenu';

const $b = useBEM();
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('topContainer')")
    div(:class="$b('companyDataBlock')")
      img(src="~assets/images/logo/logo.png")
      div(:class="$b('companyContactsBlock')")
        BaseIcon(
          :type="EIcons.TELEGRAM"
          :size="EIconsSizes.XL"
        )
        BaseIcon(
          :type="EIcons.INSTAGRAM"
          :size="EIconsSizes.XL"
        )
    NavigationMenu(is-footer-menu)
  div(:class="$b('copyright')")
    | © Все права защищены
</template>

<style lang="scss">
.FooterContent {
  @include flexColumn((gap: 20px));
  color: vars.$colors-white;
  padding: 24px 80px;
  background-color: vars.$colors-black;
  border-radius: vars.$br-x2l vars.$br-x2l 0 0;
  height: var(--footerHeight);
  &__topContainer {
    @include flex((justify-content: space-between));
    height: 190px;
  }
  &__companyDataBlock {
    @include flexColumn((justify-content: space-between));
  }
  &__companyContactsBlock {
    @include flex((gap: 12px));
  }
  &__copyright {
    @include flex((align-items: flex-end));
    min-width: 100%;
    max-height: 18px;
    color: vars.$colors-greyMuted;
  }
}

@include mobile {
  .FooterContent {
    padding: 24px;
    gap: 40px;
    &__topContainer {
      flex-direction: column;
      height: unset;
      gap: 40px;
    }
    &__companyDataBlock {
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
