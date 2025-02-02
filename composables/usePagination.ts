export default function<T>(items: T[] | Ref<T[]>, initialItemsPerPage: number) {
  const page = ref<number>(0);
  const itemsPerPage = ref<number>(initialItemsPerPage);

  const firstDisplayedItemIndex = computed<number>(() => page.value * itemsPerPage.value);
  const lastDisplayedItemIndex = computed<number>(() => firstDisplayedItemIndex.value + itemsPerPage.value);

  const itemsAmount = computed<number>(() => toValue(items).length);

  const displayedItems = computed<T[]>(() => (
    toValue(items).slice(firstDisplayedItemIndex.value, lastDisplayedItemIndex.value)
  ));

  return {
    page,
    itemsPerPage,
    itemsAmount,
    displayedItems,
  };
}
