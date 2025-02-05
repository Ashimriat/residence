<script setup lang="ts">
import { type CarouselProps } from 'primevue';
import BasePagination from './BasePagination.vue';

/** Local Types & Variables */
type Props = {
  items: CarouselProps['value'][] | CarouselProps['value'][][];
  visibleAmount?: CarouselProps['numVisible'];
};


/** Props & Emits */
const { items, visibleAmount = 1 } = defineProps<Props>();

const { isDesktop, isMobile } = useDevice();

const displayedItems = computed(() => {
  if (Array.isArray(items[0])) return items;
  const res: any[][] = [];
  for (let i = 0; i < items.length; i += visibleAmount) {
    res.push(items.slice(i, i + visibleAmount));
  }
  return res;
});

const indicatorListClass = computed<string>(
  () => isMobile ? $b('indicatorList') : $b('originalIndicatorList')
);

const { page, itemsAmount } = usePagination(displayedItems, 1);

const $b = useBEM('BaseCarousel');
</script>

<template lang="pug">
PCarousel(
  :value="displayedItems"
  :page="page"
  :num-visible="1"
  :num-scroll="1"
  :pt:root:class="$b()"
  :pt:content-container:class="$b('contentContainer')"  
  :pt:content:class="$b('content')"
  :pt:indicator-list:class="indicatorListClass"
  :pt:indicator-button:class="$b('indicatorButton')"
  :pt:pc-prev-button:root:class="$b('originalControlButton')"
  :pt:pc-next-button:root:class="$b('originalControlButton')"
)
  template(#item="{ data }")
    slot(:items-data="data")
  template(
    v-if="isDesktop"
    #footer
  )
    BasePagination(
      v-model:page="page"
      :amount-on-page="1"
      :items-amount="itemsAmount"
    )
      template(#pages="{ activePage, onPageClick }")
        ul.p-carousel-indicator-list(
          :class="$b('indicatorList')"
        )
          li.p-carousel-indicator(
            v-for="(_, pageNum) of displayedItems"
            :key="`dot-${pageNum}`"
            :class="{ 'p-carousel-indicator-active': pageNum === activePage }"
          )
            button.p-carousel-indicator-button(
              :class="$b('indicatorButton')"
              @click.prevent.stop="onPageClick(pageNum)"
            )
</template>

<style lang="scss">
.BaseCarousel {
  @include relative;
  max-width: var(--carouselMaxWidth);
  &__contentContainer {
    @include relative;
    gap: var(--carouselContentContainerGap, #{vars.$gaps-g28});
  }
  &__content {
    gap: vars.$gaps-g12;
  }
  &__originalIndicatorList {
    display: none;
  }
  &__originalControlButton {
    display: none;
  }
  &__indicatorList {
    flex-direction: row;
    padding: 4px;
    align-items: center;
  }
  &__indicatorButton {
    --p-carousel-indicator-background: #{vars.$colors-greyMuted};
    --p-carousel-indicator-active-background: #{vars.$colors-black};
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
}

@include mobile {
  .BaseCarousel {
    --carouselContentContainerGap: #{vars.$gaps-g16};
  }
}
</style>
