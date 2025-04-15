<script setup lang="ts">
import { EButtons } from '~/components/constants';
import { MAFIA_ROLES_TOWN, MAFIA_TEAM_OPTIONS_TOWN } from './constants';


type ParticipantRating = Participant & {
  role: string;
  additionalScores: string;
  isLeft: boolean;
};

type GameRating = {
  winnersTeam: string;
  participants: ParticipantRating[];
};


const { getModalData, addPlayers } = useModal<EventData>();

const eventData = getModalData();

const page = ref<number>(0);

const $b = useBEM('MafiaRating');

const ratings = ref<GameRating[]>([]);

const currentGameData = computed<GameRating>(() => ratings.value[page.value]);
const canProcessSave = computed<boolean>(() => {
  for (const gameRating of ratings.value) {
    if (!gameRating.winnersTeam) return false;
    for (const participant of gameRating.participants) {
      if (!participant.role && !participant.isLeft) {
        return false;
      }
    }
  }
  return true;
});

function generateGameRating(): void {
  ratings.value[ratings.value.length] = {
    winnersTeam: '',
    participants: eventData.participants.map((p) => ({
      ...p,
      role: '',
      additionalScores: '',
      isLeft: false,
    })),
  };
}

function removeParticipant(id: string): void {
  ratings.value[page.value].participants = currentGameData.value.participants.filter(
    ({ id: pId }) => pId !== id,
  );
}

watch(page, () => {
  if (currentGameData.value) return;
  generateGameRating();
}, { immediate: true });

watch(canProcessSave, () => {
  console.log(canProcessSave.value);
})
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('upperContainer')")
    EventCard(
      mode="light"
      coloring="light"
      :event-data="eventData"
      :class="$b('eventCard')"
    )
      template(#gameHeader)
        div(:class="$b('gameHeader')")
          h5
            | {{ `${eventData.gameData.title} - ${page + 1}/${ratings.length}` }}
    div(:class="$b('controls', { multiple: ratings.length > 1 })")
      RzdButton(
        :type="EButtons.ADD_GAME_ROUND"
        @click="generateGameRating"
      )
      RzdCarousel(
        v-if="ratings.length > 1"
        v-model:page="page"
        :items="ratings"
        :pt:footer:class="$b('carousel')"
        with-pagination
      )
  div(:class="$b('ratingsContainer')")
    RzdButton(
      :type="EButtons.ADD_PLAYERS"
      @click="addPlayers"
    )
    RzdScrollPanel(
      :items-in-row="1"
      :gap="14"
      :class="$b('participantsList', { small: currentGameData.participants.length < 5 })"
    )
      div(
        v-for="(playerRating, i) of currentGameData.participants"
        :key="playerRating.id"
        :class="$b('participant')"
      )
        UserData(
          :avatar="playerRating.avatar"
          :name="playerRating.name"
        )
        RzdSelect(
          v-model="playerRating.role"
          :options="MAFIA_ROLES_TOWN"
          option-label="label"
          option-value="value"
          placeholder="Роль"
          :class="$b('roleSelect')"
        )
        RzdInput(
          v-model="playerRating.additionalScores"
          v-keyfilter.int
          size="m"
          placeholder="Доп баллы"
          :class="$b('scores')"
        )
        div(:class="$b('checkbox')")
          RzdCheckbox(
            v-model="playerRating.isLeft"
            :input-id="`isPlayerLeft-${i}`"
            binary
            label="Ушел"
          )
        RzdButton(
          :type="EButtons.DELETE_PLAYER"
          :class="$b('expelButton')"
          @click="removeParticipant(playerRating.id)"
        )
  RzdSelectButtons(
    v-model="currentGameData.winnersTeam"
    :options="MAFIA_TEAM_OPTIONS_TOWN"
  )
  RzdButton(
    :type="EButtons.SAVE_RATINGS"
    :disabled="!canProcessSave"
    @click=""
  )
</template>


<style lang="scss">
.MafiaRating {
  @include flex-column((gap: vars.$gaps-g16));

  max-width: 1000px;

  --scoped-event-card-flex-basis: 65%;

  &__upperContainer {
    @include flex((
      justify-content: space-between,
      gap: vars.$gaps-g12
    ));
    padding-top: 8px;
  }

  &__eventCard {
    flex-basis: var(--scoped-event-card-flex-basis);
    --rzd-card-width: var(--scoped-event-card-flex-basis);
  }

  &__gameHeader {
    & > h5 {
      color: vars.$colors-beige;
    }
  }

  &__controls {
    @include flex-column((justify-content: center));

    &--multiple {
      justify-content: space-between
    }
  }

  &__participantsList {
    height: 296px;
    padding-right: 0;

    &--small {
      & > div {
        padding-right: 0;
      }
    }
  }

  &__carousel {
    & > nav > div {
      padding: 0;
    }
  }

  &__ratingsContainer {
    @include flex-column((gap: vars.$gaps-g12));

    padding: 20px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-s;
  }

  &__participant {
    @include flex((
      justify-content: space-between,
      align-items: center,
    ));
    &:first-child {
      padding-top: 10px;
    }
    &:not(&:last-child) {
      padding-bottom: 14px;
      border-bottom: 2px solid vars.$colors-greyLight;
    }
  }

  &__roleSelect {
    width: 150px;
    height: 44px;
  }

  &__scores {
    width: 140px;
  }

  &__checkbox {
    @include flex((align-items: center, gap: vars.$gaps-g12));
  }

  &__expelButton {
    width: 40px;
    height: 40px;
  }
}

@include mobile {
  .MafiaRating {
    --scoped-event-card-flex-basis: 100%;
    &__upperContainer {
      flex-direction: column;
    }
    &__controls {
      gap: vars.$gaps-g12;  
    }
  }
}
</style>
