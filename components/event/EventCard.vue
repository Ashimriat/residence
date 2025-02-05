<script setup lang="ts">
import { EButtons, EIcons, EIconsSizes } from '~/constants/components';

/** Local Types & Variables */
type Props = {
  withDetails?: boolean;
  isAccountMode?: boolean;
  eventData: EventData;
};
type Emits = {
  signUp: [void]
};


/** Props & Emits */
const { withDetails, isAccountMode, eventData } = defineProps<Props>();
const emit = defineEmits<Emits>();

const { isMobile } = useDevice();
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

const $b = useBEM('EventCard');
</script>

<template lang="pug">
BaseCard(
  orientation="column"
  :class="$b({ account: isAccountMode })"
)
  template(#subContent)
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
        BaseIcon(
          :type="EIcons.USERS"
          :size="isMobile ? EIconsSizes.S : EIconsSizes.M"
        )
  template(#content)
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
            @click="emit('signUp')"
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
  --cardPadding: 24px 12px 12px;
  &--account {
    --cardWidth: 392px;
    --cardHeight: fit-content;
    --cardPadding: 0;
    --cardBoxShadow: none;
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
    @include centeredFlex((gap: vars.$gaps-g12));
    width: 93px;
    height: 32px;
    background-color: vars.$colors-white;
    color: vars.$colors-black;
    padding: 4px 12px;
    border-radius: vars.$br-xs;
    font-size: vars.$fs-static-s;
  }
  &__detailsBlock {
    @include flex((gap: vars.$gaps-g48));
  }
  &__playersBlock {
    @include flex((
      gap: vars.$gaps-g16,
      flex-wrap: wrap,
    ));
    min-width: 240px;
  }
  &__buttonsBlock {
    @include flex((gap: vars.$gaps-g8));
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
