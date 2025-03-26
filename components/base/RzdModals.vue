<script setup lang="ts">
import type { DialogProps, DrawerProps } from 'primevue';
import type { CSSProperties } from 'vue'
import { PDialog, PDrawer } from '#components';


type Props = {
  layer?: number
}

const {
  layer = 0
} = defineProps<Props>()


const { platform, isDesktop, isMobile } = usePlatform()
const { closeModal } = useModal()
const { $displayedModalData } = useNuxtApp()


const isVisible = computed<boolean>({
  get: () => !!$displayedModalData.value.length,
  set: () => closeModal(),
})

const hasLayers = computed<boolean>(() => isVisible.value && $displayedModalData.value.length - 1 > layer)

const style = computed<CSSProperties>(() => ({
  '--styles-drawerHeight': `${100 - 10 * (layer + 1)}%`
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
  :header="$displayedModalData[layer]?.title"
  :pt:title="$b('title')"
  :style
)
  div(:class="$b('contentContainer', [platform])")
    component(
      :is="$displayedModalData[layer].component"
    )
    RzdModals(
      v-if="hasLayers"
      :layer="layer + 1"
    )
</template>

<style lang="scss">
.RzdModals {
  &__dialog {
    background-color: vars.$colors-bg;
    box-shadow: vars.$shadows-popup;
    border-radius: vars.$br-m;
    gap: vars.$gaps-g16;
    padding: 32px;
  }

  &__dialogHeader,
  &__dialogContent {
    padding: 0;
  }

  &__dialogHeader {
    @include relative;
  }

  &__dialogHeaderActions {
    @include absolute((right: -16px));
  }

  &__drawer {
    height: var(--styles-drawerHeight);
    padding: 16px 4px;
    gap: vars.$gaps-g16;
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
      width: 100%;
      height: 100%;
    }
  }


  &__title {
    font-weight: vars.$fw-extraBold;
    font-size: vars.$fs-static-l;
  }

  &__contentContainer {
    &--desktop {
      max-width: fit-content;
      & > * {
        width: 100vw;
      }
    }

    &--mobile {

      &,
      & > * {
        width: 100%;
      }
    }
  }

  &__closeIcon {}
}
</style>