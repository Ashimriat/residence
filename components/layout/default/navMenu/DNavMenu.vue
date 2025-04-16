<script setup lang="ts">
import type { NavMenuItem } from './constants'
import { MENU_STRUCTURE } from './constants';


type Props = {
  withSubsections?: boolean;
};

const { withSubsections } = defineProps<Props>();
defineSlots<{
  default(props: { items: NavMenuItem[], sectionIndex: number }): unknown
}>()

const route = useRoute();
const $b = useBEM('DNavMenu');
</script>

<template lang="pug">
div(:class="$b()")
  template(
    v-for="({ section, items }, i) of MENU_STRUCTURE"
    :key="`section__${i}`"
  )
    div(
      v-if="!section.isHeaderOnly || !withSubsections"
      :class="$b('section')"
    )
      NuxtLink(
        :class="$b('sectionTitle', { active: section.url === route.path && !withSubsections })"
        :to="section.url"
      )
        | {{ section.label }}
      slot(
        v-if="!!items"
        :items
        :section-index="i"
      )
</template>

<style lang="scss">
.DNavMenu {
  --titleFont: #{vars.$fonts-textBoldM};
  --gap: #{vars.$gaps-g24};
  --sectionJustify: center;
  --linkColor: #{vars.$colors-black};
  --sectionTitleBorderHoverColor: #{vars.$colors-greyMuted};
  --sectionTitleBorderActiveColor: #{vars.$colors-beige};

  @include flex((gap: var(--gap)));
  
  &__section {
    @include flex-column((
      gap: 8px,
      justify-content: var(--sectionJustify),
    ));
    & > span:first-of-type {
      margin-top: 6px;
    }
  }
  &__sectionTitle {
    font: var(--titleFont);
    font-weight: vars.$fw-bold;
    border-bottom: 2px solid var(--borderColor, transparent);
    cursor: pointer;

    
    & {
      @include hover-supported {
        --borderColor: var(--sectionTitleBorderHoverColor);
      }
    }

    &--active {
      @include hover-supported {
        --borderColor: var(--sectionTitleBorderActiveColor);
      }
      & {
        --borderColor: var(--sectionTitleBorderActiveColor);
      }
    }
  }
}
</style>
