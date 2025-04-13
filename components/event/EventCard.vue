<script setup lang="ts">
import { EButtons, EIcons, EIconsSizes } from '~/components/constants';


type Props = {
  withDetails?: boolean;
  isAccountMode?: boolean;
  eventData: EventData;
};
type Emits = {
  signUp: [];
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
  participants,
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
RzdCard(
  orientation="column"
  :class="$b({ account: isAccountMode })"
)
  template(#subContent)
    div(
      v-if="!isAccountMode"
      :class="$b('topContainer')"
    )
      div(:class="$b('masterDataBlock')")
        RzdAvatar(
          label="UI"
          shape="circle"
        )
        div(:class="$b('masterName')")
          | {{ gameData.master }}
      div(:class="$b('players')")
        span(:class="$b('amount')")
          | {{ `${participants.length}/${gameData.maxPlayersAmount}` }}
        RzdIcon(
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
            RzdAvatar(
              v-for="player in participants"
              :key="player.id"
              label="UI"
            )
        div(:class="$b('buttonsBlock')")
          RzdButton(
            :type="EButtons.ENTER_EVENT"
            @click="emit('signUp')"
          )
          RzdButton(
            :type="secondButtonType"
            omit-icon
            @click="toggleDetails"
          )
          RzdButton(
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
    @include centered-flex((gap: 8px));
    font-weight: vars.$fw-bold;
    font-size: vars.$fs-m;
  }
  &__masterName {
    color: vars.$colors-white;
    font: vars.$fonts-textBoldM;
  }
  &__players {
    @include centered-flex((gap: vars.$gaps-g12));
    width: 93px;
    height: 32px;
    background-color: vars.$colors-white;
    color: vars.$colors-black;
    font: vars.$fonts-textM;
    padding: 4px 12px;
    border-radius: vars.$br-xs;
  }
  &__amount {
    font: vars.$fonts-textM;
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
