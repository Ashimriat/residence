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
  const { isDesktop } = useDevice();
  const route = useRoute()
  const router = useRouter()

  const backButtonClickHandler = () => router.back();


  if (mountBackButton.isAvailable()) {
    mountBackButton()
  }

  const isMiniApp = isTMA();

  onNuxtReady(() => {
    if (!isMiniApp) return;
    init({ acceptCustomStyles: false });
    if (isDesktop) expandViewport();
  })

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