<script setup lang="ts">
/** Local Types & Variables */
export type AccordionContent = {
  header: string;
  id: string;
}

type Props = {
  content: AccordionContent[];
};


/** Props & Emits */
const { content } = defineProps<Props>();

const $b = useBEM('BaseAccordion');
</script>

<template lang="pug">
PAccordion(
  :value="0"
  :pt:root:class="$b()"
  expandIcon="pi pi-angle-right"
  collapseIcon="pi pi-angle-down"
)
  PAccordionPanel(
    v-for="({ header, id }) of content"
    :key="id"
    :value="id"
    :pt:root:class="$b('panel')"
  )
    PAccordionHeader(:pt:root:class="$b('header')")
      | {{ header }}
    PAccordionContent(
      :pt:content:class="$b('section')"
    )
      slot(:name="id")
</template>

<style lang="scss">

.BaseAccordion {
  @include flexColumn((gap: 10px));
  --p-accordion-header-toggle-icon-active-color: var(--p-accordion-header-toggle-icon-color);
  &__panel {
    --p-accordion-panel-border-color: var(--p-slate-200);
  }
  &__header {
    --p-accordion-header-hover-color: var(--p-accordion-header-color);
    --p-accordion-header-toggle-icon-hover-color: var(--p-accordion-header-toggle-icon-color);
    --p-accordion-header-toggle-icon-active-hover-color: var(--p-accordion-header-toggle-icon-active-color);
    font-size: vars.$fs-static-s;
    font-weight: vars.$fw-bold;
    border-radius: vars.$br-x2s;
    padding: 10px 12px;
    background-color: vars.$colors-white;
    &[data-p-active="true"] {
      color: vars.$colors-greyMuted;
      border-end-start-radius: 0;
      border-end-end-radius: 0;
    }
  }
  &__section {
    @include flexColumn;
    --p-accordion-content-padding: 12px;
    border-radius: 0 0 vars.$br-xs vars.$br-xs;
    background-color: vars.$colors-white;
  }
  &__link {
    padding: 12px 0;
    font-size: vars.$fs-static-s;
    &:first-of-type {
      padding-top: 0;
    }
    &:not(&:last-of-type) {
      border-bottom: 2px solid vars.$colors-greyLight;
    }
    &:last-of-type {
      padding-bottom: 0;
    }
  }
}
</style>
