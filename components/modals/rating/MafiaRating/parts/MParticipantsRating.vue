<script setup lang="ts">
import type {
  ParticipantsRatingComponentProps as Props,
  ParticipantsRatingComponentEmits as Emits
} from '../MafiaRating.vue';
import { EButtons } from '~/components/constants';
import { MAFIA_ROLES_TOWN } from '../constants';


/** Props & Emits */
const { ratingsData } = defineProps<Props>();
const emit = defineEmits<Emits>();


const $b = useBEM('MPlayersRating');
</script>

<template lang="pug">
RzdCarousel(
  v-slot="{ itemsData: [playerRating] }"
  :items="ratingsData"
  with-pagination
  pagination-type="label"
  :visible-amount="1"
  :class="$b()"
)
  div(:class="$b('participant')")
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
    RzdCheckbox(
      v-model="playerRating.isLeft"
      :input-id="`isPlayerLeft-${playerRating.id}`"
      binary
      label="Ушел"
      :class="$b('checkbox')"
    )
    RzdInput(
      v-model="playerRating.additionalScores"
      v-keyfilter.int
      size="m"
      placeholder="Доп баллы"
      :class="$b('scores')"
    )
    RzdButton(
      :type="EButtons.DELETE_PLAYER"
      :class="$b('expelButton')"
      @click="emit('remove', playerRating.id)"
    )
</template>

<style lang="scss">
.MPlayersRating {
  @include flex-column((gap: vars.$gaps-g12));

  &__participant {
    @include flex-column((
      gap: vars.$gaps-g12
    ));
  }

  &__roleSelect,
  &__scores,
  &__expelButton {
    width: 100%;
    height: 32px;
  }

  &__checkbox {
    height: 36px;
    justify-content: flex-start;
  }
}
</style>
