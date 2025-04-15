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

  const isMiniApp = isTMA()

  if (mountBackButton.isAvailable()) {
    mountBackButton()
  }

  onNuxtReady(() => {
    if (!isMiniApp) return;
    init();
    if (!isMobile) {
      expandViewport();
    }

    watch(
      () => route.path,
      () => {
        if (!isMiniApp) return;
        if (route.path === '/') {
          hideBackButton()
          offBackButtonClick(backButtonClickHandler);
          return;
        }
        if (isBackButtonVisible()) return;
        showBackButton()
        onBackButtonClick(backButtonClickHandler)
      },
      { immediate: true },
    )
  })
})