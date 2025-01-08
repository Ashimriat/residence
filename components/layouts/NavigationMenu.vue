<script setup lang="ts">
import { FOOTER_MENU_STRUCTURE, HEADER_MENU_STRUCTURE } from './constants/navMenu';


/** Local Types & Variables */
type Props = {
  isFooterMenu?: boolean;
};


/** Props & Emits */
const { isFooterMenu = false } = defineProps<Props>();

const route = useRoute();
const router = useRouter();

/** Computeds */
const menuStructure = computed<MenuStructure>(() => (
  isFooterMenu ? FOOTER_MENU_STRUCTURE : HEADER_MENU_STRUCTURE
));

/** Methods */
function navigateTo(url?: string): void {
  if (!url) return;
  router.push({ path: url });
}

const $b = useBem('Menu');
</script>

<template lang="pug">
div(:class="$b()")
  div(
    v-for="({ section, items }, i) in menuStructure"
    :key="`section__${i}`"
    :class="$b('section')"
  )
    NuxtLink(
      :class="$b('sectionTitle', { header: !isFooterMenu, active: section.url === route.path && !isFooterMenu })"
      :to="section.url"
    )
      | {{ section.title }}
    template(v-if="!!items && isFooterMenu")
      span(
        v-for="({ title, url, icon }, j) in items"
        :key="`section_${i}__item__${j}`"
        :class="$b('sectionItem')"
      )
        BaseIcon(
          v-if="icon"
          :type="icon"
        )
        | {{ title }}
</template>

<style lang="scss">
.Menu {
  @include flex((gap: var(--gap)));
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
    --linkColor: #{vars.$colors-white};
    &--header {
      cursor: pointer;
      --linkColor: #{vars.$colors-black};
    }
    &--active {
      --borderColor: #{vars.$colors-beige};
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
    & > div {
      --iconSize: 48px;
    }
  }
}
</style>
