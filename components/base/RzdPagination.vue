<script setup lang="ts">
type SkipPosition = 'start' | 'end';
type DisplayData = {
  withFirst: boolean;
  withLast: boolean;
  pages: number[];
  skipPos: SkipPosition[];
};

type Props = {
  itemsAmount: number;
};

const { itemsAmount } = defineProps<Props>();

const innerPage = defineModel<number>('page', { required: true });
const currentPage = computed<number>({
  get: () => innerPage.value + 1,
  set: (val) => {
    innerPage.value = val - 1;
  },
});
const amountOnPage = defineModel<number>('amountOnPage', { required: true });

const STEP = 1;
const PAGES_AMOUNT_TO_CHOOSE = 5;
const MAX_PAGES_SLOTS_AMOUNT = 7;

const inputRef = useTemplateRef<{ $el: HTMLInputElement }[]>('input');

const inputValue = ref<string>('');

const pagesAmount = computed<number>(() => Math.ceil(itemsAmount / amountOnPage.value));

const displayData = computed<DisplayData>(() => {
  let from = currentPage.value - STEP;
  let to = currentPage.value + STEP;
  const isInSevenSlots = pagesAmount.value <= MAX_PAGES_SLOTS_AMOUNT;
  const isInFirstFour = currentPage.value <= PAGES_AMOUNT_TO_CHOOSE - 1;
  const isInLastFour = pagesAmount.value - currentPage.value <= PAGES_AMOUNT_TO_CHOOSE - 2;
  if (isInFirstFour) {
    from = 1;
    to = PAGES_AMOUNT_TO_CHOOSE;
  }
  if (isInLastFour) {
    to = pagesAmount.value;
    from = pagesAmount.value - PAGES_AMOUNT_TO_CHOOSE + 1;
  }
  if (isInSevenSlots) {
    from = 1;
    to = pagesAmount.value;
  }
  const skipPos: SkipPosition[] = [];
  if (!isInFirstFour || isInLastFour) {
    skipPos.push('start');
  }
  if (!isInLastFour) {
    skipPos.push('end');
  }
  if (isInSevenSlots) {
    skipPos.length = 0;
  }
  const pages: number[] = [];
  for (let i = from; i <= to; i += 1) {
    pages.push(i);
  }
  return {
    withFirst: skipPos[0] === 'start',
    withLast: skipPos.at(-1) === 'end',
    pages,
    skipPos,
  };
});

const activeSkipperInput = ref<'start' | 'end' | ''>('');

async function setActiveSkipperInput(skipPos: SkipPosition | ''): Promise<void> {
  activeSkipperInput.value = skipPos;
  await nextTick();
  if (inputRef.value?.length) inputRef.value[0].$el.focus();
}

function processPageSelect(pageNumber: number): void {
  if (pageNumber === currentPage.value) return;
  currentPage.value = pageNumber;
}
/**
 *
 */
function processInputConfirm(): void {
  const newPage = +inputValue.value;
  resetInput();
  if (
    !newPage
    || newPage > pagesAmount.value
    || newPage === currentPage.value
  ) {
    return;
  }
  currentPage.value = newPage;
}
/**
 *
 */
function resetInput(): void {
  activeSkipperInput.value = '';
  inputValue.value = '';
}

const $b = useBEM('RzdPagination');
</script>

<template lang="pug">
PPaginator(
  v-model:rows="amountOnPage"
  :total-records="itemsAmount"
  :always-show="false"
)
  template(#container)
    div(:class="$b()")
      PButton.p-paginator-prev(
        :class="$b('controlButton', ['prev'], { disabled: currentPage === 1 })"
        @click.prevent.stop="processPageSelect(currentPage - 1)"
      )
        span.pi.pi-angle-left
      slot(
        name="pages"
        :active-page="innerPage"
        :on-page-click="processPageSelect"
      )
        div(:class="$b('container')")
          PButton.p-paginator-page(
            v-if="displayData.withFirst"
            label="1"
            :class="$b('pageButton', ['first'], { selected: currentPage === 1 })"
            @click.prevent.stop="processPageSelect(1)"
          )
          PButton.p-paginator-page(
            v-for="(pageNum, i) of displayData.pages"
            :key="pageNum"
            :class="$b('pageButton', { selected: currentPage === pageNum })"
            :style="`--order: ${i + 2}`"
            :label="`${pageNum}`"
            @click.prevent.stop="processPageSelect(pageNum)"
          )
            | {{ pageNum }}
          PButton.p-paginator-page(
            v-if="displayData.withLast"
            :label="`${pagesAmount}`"
            :class="$b('pageButton', ['last'], { selected: currentPage === pagesAmount })"
            @click.prevent.stop="processPageSelect(pagesAmount)"
          )
            | {{ pagesAmount }}
          template(
            v-for="skipPos in displayData.skipPos"
            :key="skipPos"
          )
            span(
              v-if="activeSkipperInput !== skipPos"
              :class="$b('skipper', [skipPos])"
              @dblclick="setActiveSkipperInput(skipPos)"
            )
              | ...
            PInputText(
              v-else
              ref="input"
              v-model="inputValue"
              v-keyfilter.int
              :class="$b('skipperInput', [skipPos])"
              @blur="resetInput"
              @keydown.enter="processInputConfirm"
            )
      PButton.p-paginator-next(
        :class="$b('controlButton', ['next'], { disabled: currentPage === pagesAmount })"
        @click.prevent.stop="processPageSelect(currentPage + 1)"
      )
        span.pi.pi-angle-right
</template>

<style lang="scss">
.RzdPagination {
  @include flex((gap: 4px));
  &__container {
    @include flex((
      align-items: center,
      gap: 4px
    ));
  }
  &__controlButton,
  &__pageButton {
    height: var(--p-paginator-nav-button-height);
    border: none;
    justify-content: center;
    --buttonLabelFontSize: #{vars.$fs-static-s};
  }
  &__controlButton {
    &--disabled {
      cursor: default;
      pointer-events: none;
      opacity: var(--p-disabled-opacity);
    }
    &:hover {
      background-color: vars.$colors-beige;
      color: vars.$colors-white;
    }
    & span {
      @include relative;
    }
    &--first {
      & span {
        right: 1px;
      }
    }
    &--last {
      & span {
        left: 1px;
      }
    }
  }
  &__pageButton {
    order: var(--order);
    &--selected {
      background: var(--p-paginator-nav-button-selected-background);
      color: var(--p-paginator-nav-button-selected-color);
      cursor: default;
    }
    &--first {
      order: 0;
    }
    &--last {
      order: 7;
    }
  }
  &__skipper,
  &__skipperInput {
    width: 42px;
    height: var(--p-paginator-nav-button-height);
    &--start {
      order: 1;
    }
    &--end {
      order: 6;
    }
  }
  &__skipper {
    @include centeredFlex;
    cursor: pointer;
  }
  &__skipperInput {
    padding: 8px;
    font-size: vars.$fs-static-s;
  }
}
</style>
