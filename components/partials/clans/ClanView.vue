<script setup lang="ts">
import { EButtons } from '~/components/base';

/** Local Types & Variables */
type Props = {
  isClanOwner: boolean;
  data: ClanData;
};


/** Props & Emits */
const {
  isClanOwner,
  data
} = defineProps<Props>();


const { providedData } = useUserStore();
const { inviteToClan } = useModalDialog();

const $b = useBem('ClanView');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('clanDataContainer')")
    div(:class="$b('textsContainer')")
      ClanDataHeader(
        :title="data.title"
        header-size="big"
      )
      span(:class="$b('description')")
        | {{ data.description }}
    div(:class="$b('buttonsBlock')")
      BaseButton(
        v-if="isClanOwner"
        :type="EButtons.ORDER_GAME"
      )
      BaseButton(
        :type="EButtons.ADD_PLAYERS"
        :class="$b('addPlayersButton', { wide: !isClanOwner })"
        @click="inviteToClan(data.id)"
      )
      BaseButton(
        :type="EButtons.LEAVE_CLAN"
        :class="$b('leaveButton')"
      )
  PScrollPanel(:class="$b('participantsPanel')")
    div(
      v-for="({ name, avatar, id }, j) of data.participants"
      :key="id"
      :class="$b('clanParticipant')"
    )
      UserData(
        :avatar="avatar"
        :name="name"
        :is-clan-owner="id === '0'"
      )
      BaseButton(
        v-if="id !== providedData.id && isClanOwner"
        :type="EButtons.EXPEL_PLAYER"
        :class="$b('expelButton')"
      )
</template>

<style lang="scss">
.ClanView {
  @include flex((align-items: center));
  padding: 8px;
  border-radius: vars.$br-l;
  background-color: vars.$colors-black;

  --scrollPanelWidth: 60%;
  --scrollPanelGap: 1.6rem 1.2rem;
  --scrollPanelItemGrow: 0;
  --scrollPanelItemBasis: 30%;

  &__clanDataContainer {
    @include flexColumn((justify-content: space-between, flex: 40%, gap: 10px));
    padding: 20px;
  }
  &__textsContainer {
    @include flex((align-items: center, flex-wrap: wrap, gap: 12px));
    & h3,
    & span {
      color: vars.$colors-white;
    }
    & span {
      flex: 100%;
    }
  }
  &__buttonsBlock {
    @include flex((align-items: center, gap: 8px));
    height: 40px;
    & button {
      --buttonLabelFontSize: #{vars.$fs-static-s};
      height: 100%;
      &:not(&:last-child) {
        flex-grow: 1;
      }
    }
  }
  &__addPlayersButton {
    --p-button-contrast-background: #{vars.$colors-black};
    --p-button-contrast-hover-background: #{vars.$colors-black};
    --p-button-contrast-active-background: #{vars.$colors-black};
    --p-button-contrast-border-color: #{vars.$colors-white};
    --p-button-contrast-hover-border-color: #{vars.$colors-white};
    --p-button-contrast-active-border-color: #{vars.$colors-white};
    --p-button-contrast-color: #{vars.$colors-white};
    --p-button-contrast-hover-color: #{vars.$colors-white};
    --p-button-contrast-active-color: #{vars.$colors-white};
    padding: 12px 9px;
    border-width: 2px;
    & svg {
      fill: vars.$colors-white;
    }
    &--wide {
      flex-grow: 1;
    }
  }
  &__leaveButton {
    flex-basis: 40px;
    padding: 0;
  }
  &__description {
    font-size: 16px;
  }
  &__participantsPanel {
    .p-scrollpanel-content {
      padding-top: 6px;
    }
  }
  &__clanParticipant {
    @include relative;
    @include flex((align-items: center, gap: 8px, flex-basis: 31%));
    @include transition(background-color);
    padding: 8px 12px;
    border-radius: vars.$br-s;
    &:hover {
      background-color: vars.$colors-greyLight;
      & button {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
  &__expelButton {
    @include absolute((right: 12px));
    @include transition(opacity);
    opacity: 0;
    pointer-events: none;
    width: 30px;
    height: 30px;
    padding: 0px;
    font-size: vars.$fs-xs;
    --p-button-border-radius: #{vars.$br-x2s};
  }
}
</style>
