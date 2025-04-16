<script setup lang="ts">
import { EButtons, EIcons } from '~/components/constants';


type Props = {
  eventData: EventData;
  coloring: 'light' | 'grey' | 'dark'
  mode: 'light' | 'full';
  withDetails?: boolean;
  hideLabel?: boolean;
};
type Emits = {
  signUp: [];
};


const {
  eventData,
  coloring,
  mode,
  /** optional */
  withDetails,
  hideLabel,
} = defineProps<Props>();
const emit = defineEmits<Emits>();

const $b = useBEM('EventCard');
const { providedData } = storeToRefs(useUserStore())

const isShowingDetails = ref<boolean>(false);

const isEventMaster = computed<boolean>(
  () => eventData.gameData.master.id === providedData.value.id
);

const label = computed<string>(() => {
  if (isEventMaster.value) return 'Вы ведущий';
  if (eventData.isSubscriptionWorks) return 'Действует абонемент';
  return '';
})

/** Computeds */
const secondButtonType = computed<EButtons>(() => (
  isShowingDetails.value ? EButtons.CLOSE : EButtons.DETAILS
));
const isLightMode = computed<boolean>(() => mode === 'light');

const {
  gameData,
  participants,
} = eventData;

/** Methods */
function toggleDetails(): void {
  isShowingDetails.value = !isShowingDetails.value;
}

function handleClick(): void {
  if (!isEventMaster.value) return;
  navigateTo(`/admin/manageGame/${eventData.gameData.id}`);
}
</script>

<template lang="pug">
RzdCard(
  orientation="column"
  :preserve-subcontent="!isLightMode"
  :class="$b([`mode_${mode}`, `coloring_${coloring}`])"
  @click.stop="handleClick"
)
  template(
    v-if="!isLightMode"
    #subContent
  )
    div(
      v-if="!isLightMode"
      :class="$b('topContainer')"
    )
      div(:class="$b('masterDataBlock')")
        RzdAvatar(
          label="UI"
          shape="circle"
        )
        div(:class="$b('masterName')")
          | {{ gameData.master.name }}
      div(:class="$b('players')")
        span(:class="$b('amount')")
          | {{ `${participants.length}/${gameData.maxPlayersAmount}` }}
        RzdIcon(
          is-adaptive
          :type="EIcons.USERS"
        )
  template(#content)
    div(:class="$b('eventDetails')")
      slot(name="gameHeader")
        RzdChip(
          v-if="!hideLabel && label"
          :label
        )
        div(:class="$b('gameNamePriceBlock')")
          component(
            :is="isLightMode ? 'h5' : 'h4'"
            :class="$b('gameTitle')"
          )
            | {{ gameData.title }}
          PriceTag(
            v-if="!isLightMode"
            :value="eventData.price"
            :old-value="eventData.oldPrice"
          )
      div(:class="$b('eventDatePlace')")
        div(:class="$b('dateTimeBlock')")
          span
            | {{ gameData.date }}
          RzdDivider(
            layout="horizontal"
            :class="$b('divider')"
          )
          RzdIcon(
            is-adaptive
            :type="EIcons.CLOCK"
          )
          span
            | {{ gameData.time }}
        div(:class="$b('locationBlock')")
          span(v-tooltip.top="gameData.address")
            | Адрес
          SubwayStation(v-bind="eventData.locationData.subway")
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
  &--mode {
    &_light {
      --rzd-card-padding: 0;
      --rzd-card-width: fit-content;
      --rzd-card-content-width: 100%;
      --rzd-card-boxshadow: none;
      --rzd-card-height: fit-content;
    }
    &_full {
      --rzd-card-padding: 24px 12px 12px;
      --rzd-card-width: 100%;
      --rzd-card-height: 440px;
    }
  }
  &--coloring {
    &_light {
      --scoped-coloring-background: #{vars.$colors-white};
      --scoped-coloring-game-color: #{vars.$colors-black};
      --scoped-coloring-game-title-color: #{vars.$colors-black};
    }
    &_grey,
    &_dark {
      --scoped-coloring-game-color: #{vars.$colors-white};
      --scoped-coloring-game-title-color: #{vars.$colors-beige};
      --rzd-icon-color: #{vars.$colors-white};
      --rzd-divider-color: #{vars.$colors-white};
    }
    &_grey {
      --scoped-coloring-background: #{vars.$colors-greyDark};
    }
    &_dark {
      --rzd-card-background: #{vars.$colors-black};
      --rzd-card-content-background: #{vars.$colors-black};
      --scoped-coloring-background: #{vars.$colors-black};
    }
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


  &__eventDetails {
    @include flex-column((gap: vars.$gaps-g16));
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    background: var(--scoped-coloring-background);
    border-radius: vars.$br-m;
  }

  &__gameNamePriceBlock {
    @include centered-flex((justify-content: space-between));
  }

  &__gameTitle {
    color: var(--scoped-coloring-game-title-color);
  }

  &__eventDatePlace {
    @include flex-column((gap: vars.$gaps-g12));

    width: 100%;
  }

  &__dateTimeBlock {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g8,
    ));
    color: var(--scoped-coloring-game-color);
    font: var(--font-text-m);
    
    & > span {
      white-space: nowrap;
    }
  }

  &__divider {
    flex-shrink: 10;
  }

  &__locationBlock {
    @include flex((
      justify-content: space-between,
      align-items: center,
    ));
    font: var(--font-text-m);
    color: var(--scoped-coloring-game-color);

    & > span {
      text-decoration: underline;
    }
  }
}

@include mobile {
  .EventCard {
    --rzd-card-maxheight: 320px;
  }
}
</style>