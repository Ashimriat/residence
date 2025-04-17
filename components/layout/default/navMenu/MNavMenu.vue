<script setup lang="ts">
import {
  EButtons,
  EIconsSizes,
} from '~/components/constants';
import { 
  MOBILE_AUTHED_ITEMS, 
  MENU_STRUCTURE, 
  ACCORDION_CONTENT, 
  CONTENT_IDS
} from './constants';


const { isLoggedIn, isAdmin, userData } = storeToRefs(useUserStore());
const { openLogin } = useModal();
const $b = useBEM('MNavMenu');

function isLinkBordered(
  blockIndex: number,
  linkIndex: number,
): boolean {
  return (
    blockIndex !== MOBILE_AUTHED_ITEMS.length - 1 
    && linkIndex === MOBILE_AUTHED_ITEMS[blockIndex].length - 1
  );
}
</script>

<template lang="pug">
div(:class="$b()")
  div(
    v-if="isLoggedIn"
    :class="$b('topLinks')"
  )
    NuxtLink(
      to="/account"
      :class="$b('accountLink')"
    )
      RzdAvatar(
        :image="userData.avatar"
        label="UI"
      )
      span
        | {{ userData.name }}
    Notifications(
      v-if="false"
      with-bg
      :class="$b('notificationsLink')"
    )
  RzdButton(
    v-else
    :type="EButtons.SIGN_IN_MOBILE"
    :class="$b('loginButton')"
    @click="openLogin"
  )
  RzdAccordion(:content="ACCORDION_CONTENT")
    template(#[CONTENT_IDS.accordion])
      NuxtLink(
        v-for="({ section }, i) of MENU_STRUCTURE"
        :key="i"
        :to="section.url"
        :class="$b('pageLink')"
      )
        | {{ section.label }}
  div(
    v-if="isLoggedIn"
    :class="$b('authPagesContainer')"
  )
    template(
      v-for="(block, i) of MOBILE_AUTHED_ITEMS"
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
    RzdButton(
      v-if="false"
      :type="isAdmin ? EButtons.ADD_EVENT_MOBILE : EButtons.ORDER_GAME"
    )
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.MNavMenu {
  @include absolute((top: calc(-1 * var(--layout-mobile-header-offset)), left: 0));
  @include flex-column((gap: vars.$gaps-g12));
  width: 100vw;
  min-height: 100vh;
  padding: var(--layout-mobile-content-offset) 20px calc(100vh - var(--layout-mobile-content-offset));
  box-sizing: border-box;
  background-color: vars.$colors-bg;
  &__topLinks {
    @include flex((
      justify-content: space-between,
      gap: vars.$gaps-g12,
    ));
  }
  &__accountLink {
    @include flex((align-items: center, gap: vars.$gaps-g8));
    padding: 6px 12px;
    font: vars.$fonts-textBoldM;
    background-color: vars.$colors-white;
    border-radius: vars.$br-xs;
    flex-grow: 1;
    & > * {
      --rzd-avatar-size: 28px;
      --rzd-avatar-label-fontsize: #{vars.$fs-xs};
    }
  }
  &__notificationsLink {
    width: 40px;
    height: 40px;
  }
  &__pageLink {
    padding: 12px 0;
    font: vars.$fonts-textM;
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
  &__loginButton {
    justify-content: space-between;
  }
  &__authPagesContainer {
    @include flex-column;
    padding: 0 12px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-xs;
  }
  &__authPageLink {
    @include flex((align-items: center, gap: vars.$gaps-g8));
    padding: 12px 0;
    font: vars.$fonts-textM;
    &--bordered {
      border-bottom: 2px solid vars.$colors-greyLight;
    }
  }
}
</style>