<script setup lang="ts">
import type { CarouselProps } from 'primevue';


type Props = {
  items: CarouselProps['value'][] | CarouselProps['value'][][];
  visibleAmount?: number | ByDevice<number>;
  paginationType?: RzdPaginationProps['type']
  withPagination?: boolean
};


const {
  items,
  /** optional */
  visibleAmount = { desktop: 1, mobile: 1 },
  withPagination,
  paginationType = 'dots',
} = defineProps<Props>();

const { platform, isDesktop, isMobile } = usePlatform();

const displayedItems = computed<CarouselProps['value'][]>(() => {
  const displayedAmount = typeof visibleAmount === 'number'
    ? visibleAmount
    : visibleAmount[platform];
  if (Array.isArray(items[0]) && items[0].length === displayedAmount) return items;
  const res: CarouselProps['value'][] = [];
  const flattenedItems = items.flat();
  for (let i = 0; i < flattenedItems.length; i += displayedAmount) {
    res.push(flattenedItems.slice(i, i + displayedAmount));
  }
  return res;
});

const mPage = defineModel<number>('page', { required: false, default: 0 });

const { page, itemsAmount } = usePagination(displayedItems, 1, mPage);

const indicatorListClass = computed<string>(
  () => (!withPagination && isMobile ? 'indicatorList' : 'originalIndicatorList'),
);

const $b = useBEM('RzdCarousel');
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
  :pt:item:class="$b('item')"
  :pt:indicator-list:class="$b(indicatorListClass)"
  :pt:indicator-button:class="$b('indicatorButton')"
  :pt:pc-prev-button:root:class="$b('originalControlButton')"
  :pt:pc-next-button:root:class="$b('originalControlButton')"
)
  template(#item="{ data }")
    slot(:items-data="data")
  template(
    v-if="isDesktop || withPagination"
    #footer
  )
    RzdPagination(
      v-model:page="page"
      :amount-on-page="1"
      :items-amount="itemsAmount"
      :type="paginationType"
    )
</template>

<style lang="scss">
.RzdCarousel {
  @include relative;
  max-width: var(--rzd-carousel-maxwidth);

  @include p-component-dot-buttons;

  &__contentContainer {
    @include relative;
    gap: var(--carouselContentContainerGap, #{vars.$gaps-g28});
  }
  &__content {
    gap: vars.$gaps-g12;
  }
  &__item {
    @include centered-flex;
    & > * {
      width: 98%;
    }
  }
  &__originalIndicatorList {
    display: none;
  }
  &__originalControlButton {
    display: none;
  }
}

@include mobile {
  .RzdCarousel {
    --carouselContentContainerGap: #{vars.$gaps-g16};
  }
}
</style>
