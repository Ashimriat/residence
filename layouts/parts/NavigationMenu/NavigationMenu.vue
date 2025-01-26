<script setup lang="ts">
import { EIconsSizes } from '~/components/base';
import { MENU_STRUCTURE } from './constants';


/** Local Types & Variables */
type Props = {
  isFooterMenu?: boolean;
};


/** Props & Emits */
const { isFooterMenu = false } = defineProps<Props>();

const route = useRoute();

const $b = useBEM('Menu');
</script>

<template lang="pug">
div(:class="$b({ footer: isFooterMenu })")
  template(
    v-for="({ section, items }, i) of MENU_STRUCTURE"
    :key="`section__${i}`"
  )
    div(
      v-if="!section.isHeaderOnly || !isFooterMenu"
      :class="$b('section')"
    )
      NuxtLink(
        :class="$b('sectionTitle', { active: section.url === route.path && !isFooterMenu })"
        :to="section.url"
      )
        | {{ section.title }}
      template(v-if="!!items && isFooterMenu")
        NuxtLink(
          v-for="({ title, url, icon }, j) in items"
          :key="`section_${i}__item__${j}`"
          :class="$b('sectionItem')"
          :to="url"
        )
          BaseIcon(
            v-if="icon"
            :type="icon"
            :size="EIconsSizes.L"
          )
          | {{ title }}
</template>

<style lang="scss">
.Menu {
  --titleFontSize: #{vars.$fs-s};
  --gap: #{vars.$gaps-g24};
  --sectionJustify: center;
  --linkColor: #{vars.$colors-black};
  --sectionTitleBorderHoverColor: #{vars.$colors-greyMuted};
  --sectionTitleBorderActiveColor: #{vars.$colors-beige};

  @include flex((gap: var(--gap)));

  &--footer {
    --titleFontSize: #{vars.$fs-m};
    --gap: #{vars.$gaps-g48};
    --sectionJustify: flex-start;
    --linkColor: #{vars.$colors-white};
    --sectionTitleBorderHoverColor: transparent;
    --sectionTitleBorderActiveColor: transparent;
  }
  
  &__section {
    @include flexColumn((
      gap: 8px,
      justify-content: var(--sectionJustify),
    ));
    & > span:first-of-type {
      margin-top: 6px;
    }
  }
  &__sectionTitle {
    font-size: var(--titleFontSize);
    font-weight: vars.$fw-bold;
    border-bottom: 2px solid var(--borderColor, transparent);
    cursor: pointer;
    &:hover {
      --borderColor: var(--sectionTitleBorderHoverColor);
    }
    &--active {
      &,
      &:hover {
        --borderColor: var(--sectionTitleBorderActiveColor);
      }
    }
  }
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
  .Menu {
    &--footer {
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        min-width: 26%;
      }
    }
  }
}
</style>
