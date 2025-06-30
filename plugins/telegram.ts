import {
  init,
  mountMiniApp,
  miniAppReady,
  mountBackButton,
  isTMA as isTelegramMiniApp,
  showBackButton,
  hideBackButton,
  isBackButtonVisible,
  onBackButtonClick,
  offBackButtonClick,
  expandViewport,
  mountViewport,
  mountClosingBehavior,
  enableClosingConfirmation,
  mountSwipeBehavior,
  disableVerticalSwipes,
} from '@telegram-apps/sdk-vue'


async function initializeTMA(): Promise<void> {
  init({ acceptCustomStyles: false });
  if (mountMiniApp.isAvailable()) {
    await mountMiniApp();
  }
  const components = [
    miniAppReady,
    mountViewport,
    mountClosingBehavior,
    enableClosingConfirmation,
    mountSwipeBehavior,
    disableVerticalSwipes,
  ];
  for (const activateComponent of components) {
    if (activateComponent.isAvailable()) activateComponent();
  }
}

export default defineNuxtPlugin(() => {
  const { isDesktop } = usePlatform();
  const route = useRoute();
  const router = useRouter();

  const backButtonClickHandler = () => router.back();


  const isMiniApp = isTelegramMiniApp();

  if (isMiniApp) {
    initializeTMA();
  }

  if (mountBackButton.isAvailable()) {
    mountBackButton();
  }

  onNuxtReady(() => {
    if (isDesktop && expandViewport.isAvailable()) {
      expandViewport();
    }

    watch(
      () => route.path,
      () => {
        if (!isMiniApp) return;
        if (route.path === '/') {
          hideBackButton();
          offBackButtonClick(backButtonClickHandler);
          return;
        }
        if (isBackButtonVisible()) return;
        showBackButton();
        onBackButtonClick(backButtonClickHandler);
      },
      { immediate: true },
    );
  });

  return {
    provide: {
      isTMA: isMiniApp
    }
  }
});