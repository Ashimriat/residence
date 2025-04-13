<script setup lang="ts">
import { EIconsSizes } from '~/components/constants';


const $b = useBEM('FooterNavMenu');
</script>

<template lang="pug">
DNavMenu(
  v-slot="{ items, sectionIndex }"
  with-subsections
  :class="$b()"
)
  NuxtLink(
    v-for="({ label, url, icon }, j) in items"
    :key="`section_${sectionIndex}__item__${j}`"
    :class="$b('sectionItem')"
    :to="url"
  )
    RzdIcon(
      v-if="icon"
      :type="icon"
      :size="EIconsSizes.L"
    )
    | {{ label }}
</template>

<style lang="scss">
.FooterNavMenu {
  --titleFont: #{vars.$fonts-textBoldL};
  --gap: #{vars.$gaps-g48};
  --sectionJustify: flex-start;
  --linkColor: #{vars.$colors-white};
  --sectionTitleBorderHoverColor: transparent;
  --sectionTitleBorderActiveColor: transparent;
    
  &__sectionItem {
    @include flex((
      align-items: center,
      gap: 18px,
    ));
    color: vars.$colors-greyMuted;
    font-size: vars.$fs-s;
    font-weight: vars.$fw-bold;
  }
}

@include mobile {
  .FooterNavMenu {
    --titleFont: #{vars.$fonts-mobileTextBoldL};
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      min-width: 26%;
    }
  }
}
</style>
