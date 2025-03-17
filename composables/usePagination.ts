export default function usePagination<T>(
  items: MaybeRefOrGetter<T[]>,
  initialItemsPerPage: number,
  modelledPage?: Ref<number>
) {
  const page = ref<number>(0);
  const itemsPerPage = ref<number>(initialItemsPerPage);

  const usedPage = computed<number>(() => toValue(modelledPage ?? page));

  const firstDisplayedItemIndex = computed<number>(
    () => usedPage.value * itemsPerPage.value
  );
  const lastDisplayedItemIndex = computed<number>(
    () => firstDisplayedItemIndex.value + itemsPerPage.value
  );

  const itemsAmount = computed<number>(() => toValue(items).length);

  const displayedItems = computed<T[]>(() => (
    toValue(items).slice(firstDisplayedItemIndex.value, lastDisplayedItemIndex.value)
  ));

  return {
    page: modelledPage ?? page,
    itemsPerPage,
    itemsAmount,
    displayedItems,
  };
}
