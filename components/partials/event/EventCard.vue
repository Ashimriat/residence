<script setup lang="ts">
import { EButtons, EIcons } from '../../base';


enum EComponentEvents {
  SIGN_UP = 'signUp'
}

/** Local Types & Variables */
type Props = {
  withDetails?: boolean;
  isAccountMode?: boolean;
  eventData: EventData;
};
type Emits = {
  (e: EComponentEvents.SIGN_UP): void
};


/** Props & Emits */
const { withDetails, isAccountMode, eventData } = defineProps<Props>();
const emit = defineEmits<Emits>();

/** State & Composables */
const isShowingDetails = ref<boolean>(false);


const {
  gameData,
  isAbonWorks,
  currentPlayers,
} = eventData;

/** Computeds */
const secondButtonType = computed<EButtons>(() => (
  isShowingDetails.value ? EButtons.CLOSE : EButtons.DETAILS
));

/** Methods */
function toggleDetails(): void {
  isShowingDetails.value = !isShowingDetails.value;
}

const $b = useBem();
</script>

<template lang="pug">
div(:class="$b({ account: isAccountMode })")
  div(
    v-if="!isAccountMode"
    :class="$b('topContainer')"
  )
    div(:class="$b('masterDataBlock')")
      PAvatar(
        label="UI"
        shape="circle"
      )
      div(:class="$b('masterName')")
        | {{ gameData.master }}
    div(:class="$b('playersAmount')")
      span
        | {{ `${currentPlayers.length}/${gameData.maxPlayersAmount}` }}
      BaseIcon(:type="EIcons.USERS")
  EventInfo(
    :data="eventData"
    :is-account-mode="isAccountMode"
    :with-abon="isAbonWorks && !isAccountMode"
  )
    template(v-if="withDetails")
      div(
        v-if="isShowingDetails"
        :class="$b('detailsBlock')"
      )
        div
          | {{ gameData.description }}
        div(:class="$b('playersBlock')")
          PAvatar(
            v-for="player in currentPlayers"
            :key="player"
            label="UI"
          )
      div(:class="$b('buttonsBlock')")
        BaseButton(
          :type="EButtons.ENTER_EVENT"
          @click="emit(EComponentEvents.SIGN_UP)"
        )
        BaseButton(
          :type="secondButtonType"
          omit-icon
          @click="toggleDetails"
        )
        BaseButton(
          v-if="isShowingDetails"
          :type="EButtons.SHARE"
        )
</template>

<style lang="scss">
.EventCard {
  @include flexColumn((justify-content: space-between));
  max-width: 876px;
  height: 584px;
  padding: 24px 12px 12px 12px;
  background-color: vars.$colors-greyLight;
  border-radius: vars.$br-l;
  box-shadow: vars.$rest-popupShadow;
  &--account {
    width: 392px;
    height: fit-content;
    padding: 0;
    box-shadow: none;
  }
  &__topContainer {
    @include flex((
      align-items: center,
      justify-content: space-between,
    ));
  }
  &__masterDataBlock {
    @include centeredFlex((gap: 8px));
    font-weight: vars.$fw-bold;
    font-size: vars.$fs-m;
  }
  &__masterName {
    color: vars.$colors-white;
  }
  &__playersAmount {
    @include centeredFlex((gap: vars.$gaps-s));
    width: 93px;
    height: 32px;
    background-color: vars.$colors-white;;
    padding: 4px 12px;
    border-radius: vars.$br-xs;
    font-size: vars.$fs-s;
  }
  &__detailsBlock {
    @include flex((gap: vars.$gaps-l));
  }
  &__playersBlock {
    @include flex((
      gap: 16px,
      flex-wrap: wrap,
    ));
    min-width: 240px;
  }
  &__buttonsBlock {
    @include flex((gap: vars.$gaps-xs));
  }
}

@include mobile {
  .EventCard {
    max-height: 320px;
    &__divider {
      max-width: 194px;
    }
  }
}
</style>
