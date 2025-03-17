<script setup lang="ts">
import { EButtons, MAFIA_ROLES_TOWN, MAFIA_TEAM_OPTIONS_TOWN } from '~/constants/components';


type ParticipantRating = Participant & {
  role: string;
  additionalScores: string;
  isLeft: boolean;
};

type GameRating = {
  winnersTeam: string;
  participants: ParticipantRating[];
};


const { getModalData } = useModalDialog<EventData>();

const eventData = getModalData();

const page = ref<number>(0);

const $b = useBEM('MafiaRating');

const ratings = ref<GameRating[]>([]);
const currentGameData = computed<GameRating>(() => ratings.value[page.value]);

function generateGameRating(index = page.value): void {
  ratings.value[index] = {
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
    ({ id: pId }) => pId !== id
  );
}


watch(page, () => {
  if (currentGameData.value) return;
  generateGameRating();
}, { immediate: true });
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('upperContainer')")
    EventDatePlace(
      :class="$b('eventDatePlace')"
      :date="eventData.gameData.date"
      :time="eventData.gameData.time"
      :subway="eventData.locationData.subway"
    )
    div(:class="$b('controls', { multiple: ratings.length > 1 })")
      RzdButton(
        :type="EButtons.ADD_GAME_ROUND"
        @click="generateGameRating(page + 1)"
      )
      RzdCarousel(
        v-if="ratings.length > 1"
        v-model:page="page"
        :items="ratings"
        :pt:footer:class="$b('carousel')"
      )
  div(:class="$b('ratingsContainer')")
    RzdButton(
      :type="EButtons.ADD_PLAYERS"
      @click=""
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
        PSelect(
          v-model="playerRating.role"
          :options="MAFIA_ROLES_TOWN"
          option-label="label"
          option-value="value"
          placeholder="Роль"
          :class="$b('roleSelect')"
        )
        PInputText(
          v-model="playerRating.additionalScores"
          v-keyfilter.int
          placeholder="Доп баллы"
          :class="$b('scores')"
        )
        div(:class="$b('checkbox')")
          PCheckbox(
            v-model="playerRating.isLeft"
            :input-id="`isLeft-${i}`"
            binary
          )
          label(:for="`isLeft-${i}`")
            | Ушел
        RzdButton(
          :type="EButtons.EXPEL_PLAYER"
          @click="removeParticipant(playerRating.id)"
        )
  RzdSelectButtons(
    v-model="currentGameData.winnersTeam"
    :options="MAFIA_TEAM_OPTIONS_TOWN"
  )
  RzdButton(
    :type="EButtons.SAVE_RATINGS"
    @click=""
  )
</template>


<style lang="scss">
.MafiaRating {
  @include flexColumn((gap: vars.$gaps-g16));

  max-width: 1000px;

  &__upperContainer {
    @include flex((
      justify-content: space-between,
      gap: vars.$gaps-g12
    ));
  }

  &__eventDatePlace {
    flex-basis: 74%;
    padding: 20px;
    color: vars.$colors-black;
    background-color: vars.$colors-white;
    border-radius: vars.$br-s;
  }

  &__controls {
    @include flexColumn((justify-content: center));

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
    @include flexColumn((gap: vars.$gaps-g12));

    padding: 20px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-s;
  }

  &__participant {
    @include flex((justify-content: space-between));

    &:not(&:last-child) {
      padding-bottom: 14px;
      border-bottom: 2px solid vars.$colors-greyLight;
    }
  }

  &__roleSelect {
    width: 196px;
  }

  &__scores {
    width: 120px;
  }

  &__checkbox {
    @include flex((align-items: center, gap: vars.$gaps-g12));
  }
}
</style>
