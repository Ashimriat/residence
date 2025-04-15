import {
  mountBackButton,
  isTMA,
  init,
  showBackButton,
  hideBackButton,
  isBackButtonVisible,
  onBackButtonClick,
  offBackButtonClick,
  expandViewport,
} from '@telegram-apps/sdk-vue'

export default defineNuxtPlugin(() => {
  const { isMobile } = useDevice();
  const route = useRoute()
  const router = useRouter()

  const backButtonClickHandler = () => router.back();

  if (mountBackButton.isAvailable()) {
    mountBackButton()
  }

  onNuxtReady(() => {
    onBeforeMount(() => {
      if (!isTMA()) return;
      init();
      if (!isMobile) {
        expandViewport();
      }
    });

    watch(
      () => route.path,
      () => {
        if (!isTMA()) return;
        /** @TODO убрать лишнее */
        if (/^\/([a-z]{2}\/)?(mobile\/?)?$/.test(route.path)) {
          hideBackButton()
          offBackButtonClick(backButtonClickHandler);
          return;
        }
        if (!isBackButtonVisible()) {
          showBackButton()
          onBackButtonClick(backButtonClickHandler)
        }
      },
      { immediate: true },
    )
  })
})