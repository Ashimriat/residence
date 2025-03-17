<script setup lang="ts">
import Logo from '~assets/images/logo/light.svg';
import {
  EIcons,
  EButtons,
  EIconsSizes,
  CONTENT_IDS,
  ACCORDION_CONTENT,
  AUTHED_ITEMS,
  MENU_STRUCTURE
} from '~/constants/components';


const userStore = useUserStore();
const { isLoggedIn, isAdmin, userData } = storeToRefs(userStore);

const { openSignIn } = useModalDialog();
const route = useRoute();


const isOpen = ref<boolean>(false);


function toggleMenu(): void {
  isOpen.value = !isOpen.value;
}
function isLinkBordered(
  blockIndex: number,
  linkIndex: number,
): boolean {
  return blockIndex !== AUTHED_ITEMS.length - 1 && linkIndex === AUTHED_ITEMS[blockIndex].length - 1;
}

watch(() => route.path, () => {
  isOpen.value = false;
});

const $b = useBEM('MobileHeader');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('mainView')")
    NuxtLink(
      to="/"
      :class="$b('logo')"
    )
      Logo
    div(
      :class="$b('subcontainer')"
      @click="toggleMenu"
    )
      Notifications(v-if="isLoggedIn")
      RzdIcon(:type="EIcons.BURGER")
  div(
    v-if="isOpen"
    :class="$b('innerMenu')"
  )
    RzdButton(
      v-if="!isLoggedIn"
      :type="EButtons.SIGN_IN_MOBILE"
      @click="openSignIn"
    )
    div(
      v-else
      :class="$b('topLinks')"
    )
      NuxtLink(
        to="/account"
        :class="$b('accountLink')"
      )
        PAvatar(
          :image="userData.avatar"
          label="UI"
        )
        span
          | {{ userData.name }}
      Notifications(
        with-bg
        :class="$b('notificationsLink')"
      )
    RzdAccordion(:content="ACCORDION_CONTENT")
      template(#[CONTENT_IDS.pages])
        NuxtLink(
          v-for="({ section }, i) of MENU_STRUCTURE"
          :key="i"
          :to="section.url"
          :class="$b('pageLink')"
        )
          | {{ section.title }}
    div(
      v-if="isLoggedIn"
      :class="$b('authPagesContainer')"
    )
      template(
        v-for="(block, i) of AUTHED_ITEMS"
        :key="`authedItemsBlock_${i}`"
      )
        NuxtLink(
          v-for="({ label, icon, url }, j) of block"
          :key="`itemBlock_${i}_${j}`"
          :to="url"
          :class="$b('authPageLink', { bordered: isLinkBordered(i, j)})"
        )
          RzdIcon(
            :type="icon"
            :size="EIconsSizes.S"
          )
          span
            | {{ label }}
    NuxtLink(
      v-if="isLoggedIn"
      :to="`/events/${isAdmin ? 'create' : 'order'}`"
    )
      RzdButton(:type="isAdmin ? EButtons.ADD_EVENT_MOBILE : EButtons.ORDER_GAME")
</template>

<style lang="scss">
.MobileHeader {
  &__mainView {
    @include relative((z-index: 1));
    @include flex((
      align-items: center,
      justify-content: space-between
    ));
    height: 54px;
    padding: 4px 16px;
    background-color: vars.$colors-white;
    box-shadow: vars.$shadows-header;
    border-radius: vars.$br-s;
  }
  &__logo {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }
  &__subcontainer {
    @include flex((
      gap: vars.$gaps-g16,
      align-items: center,
    ));
  }
  &__innerMenu {
    @include absolute((top: -58px, left: 0));
    @include flexColumn((gap: vars.$gaps-g12));
    width: 100vw;
    height: 100vh;
    padding: 170px 20px 72px;
    box-sizing: border-box;
    background-color: vars.$colors-bg;
  }
  &__topLinks {
    @include flex((
      justify-content: space-between,
      gap: vars.$gaps-g12,
    ));
  }
  &__accountLink {
    @include flex((align-items: center, gap: vars.$gaps-g8));
    padding: 6px 12px;
    font-size: vars.$fs-static-s;
    background-color: vars.$colors-white;
    font-weight: vars.$fw-extraBold;
    border-radius: vars.$br-xs;
    flex-grow: 1;
    & > * {
      --avatarSize: 28px;
      --avatarLabelFontSize: #{vars.$fs-static-xs};
    }
  }
  &__notificationsLink {
    width: 40px;
    height: 40px;
  }
  &__pageLink {
    padding: 12px 0;
    font-size: vars.$fs-static-s;
    &:first-of-type {
      padding-top: 0;
    }
    &:not(&:last-of-type) {
      border-bottom: 2px solid vars.$colors-greyLight;
    }
    &:last-of-type {
      padding-bottom: 0;
    }
  }
  &__authPagesContainer {
    @include flexColumn;
    padding: 0 12px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-xs;
  }
  &__authPageLink {
    @include flex((align-items: center, gap: vars.$gaps-g8));
    padding: 12px 0;
    font-size: vars.$fs-static-s;
    font-weight: vars.$fw-midHeavy;
    &--bordered {
      border-bottom: 2px solid vars.$colors-greyLight;
    }
  }
}
</style>
