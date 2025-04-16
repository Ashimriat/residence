<script setup lang="ts">
import type {
  ParticipantsRatingComponentProps as Props,
  ParticipantsRatingComponentEmits as Emits
} from '../MafiaRating.vue';
import { EButtons } from '~/components/constants';
import { MAFIA_ROLES_TOWN } from '../constants';


/** Props & Emits */
const { ratingsData } = defineProps<Props>();
const emit = defineEmits<Emits>()


const $b = useBEM('DParticipantsRating');
</script>

<template lang="pug">
RzdScrollPanel(
  :items-in-row="1"
  :gap="14"
  :class="$b({ small: ratingsData.length < 5 })"
)
  div(
    v-for="playerRating of ratingsData"
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
    RzdCheckbox(
      v-model="playerRating.isLeft"
      :input-id="`isPlayerLeft-${playerRating.id}`"
      binary
      label="Ушел"
    )
    RzdButton(
      :type="EButtons.DELETE_PLAYER"
      :class="$b('expelButton')"
      @click="emit('remove', playerRating.id)"
    )
</template>

<style lang="scss">
.DParticipantsRating {
  height: 296px;
  padding-right: 0;

  &--small {
    & > div {
      padding-right: 0;
    }
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

  &__expelButton {
    width: 40px;
    height: 40px;
  }
}
</style>
