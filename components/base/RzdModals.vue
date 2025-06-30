<script setup lang="ts">
import type { DialogProps, DrawerProps } from 'primevue';
import type { CSSProperties } from 'vue'
import { PDialog, PDrawer } from '#components';


type Props = {
  layer?: number
}

export type DisplayedModalData = {
  component: Component;
  data: unknown;
  title: string;
  size: 'm' | 's';
}


const {
  layer = 0
} = defineProps<Props>()


const { platform, isDesktop } = usePlatform()
const { closeModal } = useModal()


const displayedModalData = useState<DisplayedModalData[]>(
  'displayedModalData',
  () => shallowRef([])
);

const isVisible = computed<boolean>({
  get: () => !!displayedModalData.value.length,
  set: () => closeModal(),
})

const hasLayers = computed<boolean>(() => isVisible.value && displayedModalData.value.length - 1 > layer)

const style = computed<CSSProperties>(() => ({
  '--rzd-modals-styles-drawerheight': `${100 - 10 * (layer + 1)}%`
}))

const Wrapper = computed<Component>(() => isDesktop ? PDialog : PDrawer)

const $b = useBEM('RzdModals')

const wrapperProps = computed<DialogProps | DrawerProps>(
  () => isDesktop
    ? {
      modal: true,
      dismissableMask: true,
      draggable: false,
      pt: {
        root: $b('dialog'),
        header: $b('dialogHeader'),
        content: $b('dialogContent'),
        headerActions: $b('dialogHeaderActions')
      }
    } as DialogProps
    : {
      position: 'bottom',
      dismissable: true,
      pt: {
        root: $b('drawer'),
        header: $b('drawerHeader'),
        content: $b('drawerContent'),
        pcCloseButton: {
          root: {
            class: $b('drawerCloseButton')
          }
        }
      }
    } as DrawerProps
) 
</script>

<template lang="pug">
Wrapper(
  v-bind="wrapperProps"
  v-model:visible="isVisible"
  block-scroll
  :base-z-index="layer"
  :header="displayedModalData[layer]?.title"
  :pt:title:class="$b('title')"
  :style
)
  div(:class="$b('contentContainer', [`size_${displayedModalData[layer]?.size}_${platform}`])")
    component(:is="displayedModalData[layer]?.component")
  RzdModals(
    v-if="hasLayers"
    :layer="layer + 1"
  )
</template>

<style lang="scss">
.RzdModals {
  &__dialog {   
    gap: vars.$gaps-g16;
    padding: 32px;
    background-color: vars.$colors-bg;
    border-radius: vars.$br-m;  
    box-shadow: vars.$shadows-popup;
  }

  &__dialogHeader,
  &__dialogContent {
    padding: 0;
  }

  &__dialogHeader {
    @include relative;
    font: vars.$fonts-desktopH5;
  }

  &__dialogHeaderActions {
    @include absolute((right: -12px));
  }

  &__drawer {
    gap: vars.$gaps-g16;
    height: var(--rzd-modals-styles-drawerheight);
    padding: 16px 4px;
    background-color: vars.$colors-bg;
  }

  &__drawerHeader {
    padding: 0 6px 0 14px;
  }

  &__drawerContent {
    padding: 0 12px;
  }

  &__drawerCloseButton {
    width: 30px;
    height: 30px;
    background-color: transparent;

    & > svg {
      @include fullsize;
    }
  }


  &__title {
    font: var(--font-h4);
    color: vars.$colors-black;
  }

  &__contentContainer {
    & > * {
      width: 100%;
    }

    &--size {
      &_m_desktop {
        width: 771px;
      }
      &_s_desktop {
        width: 462px;
      }
    }
  }

  &__closeIcon {}
}
</style>