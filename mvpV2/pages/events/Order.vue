<script setup lang="ts">
import { mockOtherUsers } from '~/assets/mocks';
import { EVENTS_GAMES_OPTIONS } from '~/constants/pages';
import { EButtons } from '~/constants/components';


const game = ref<string>('');
const masterSearch = ref<string>('');
const master = ref<string>('');
const desires = ref<string>('');

const { selectedDate, selectedTime } = useCalendar();

const isOrderEnabled = computed<boolean>(
  () => !!game.value && !!master.value && !!selectedDate.value && !!selectedTime.value
);

const $b = useBEM('OrderPage');

definePageMeta({
  layout: 'event-manage',
});
</script>

<template lang="pug">
div(:class="$b()")
  h1
    | Заказ игры
  RzdSelectButtons(
    v-model="game"
    :options="EVENTS_GAMES_OPTIONS"
    :class="$b('gameSelector')"
  )
  EventCalendarBlock(
    v-model:date="selectedDate"
    v-model:time="selectedTime"
    data-section-title="Ведущий"
    :is-calendar-disabled="!game"
  )
    RzdSearch(
      v-model="masterSearch"
      :is-disabled="!game"
      placeholder="ID или имя ведущего"
    )
    div(:class="$b('mastersListContainer')")
      span(v-if="!game")
        | Сперва надо выбрать игру
      UsersStructure(
        v-else
        v-model:selected="master"
        list-only
        :gap="{ x: 29, y: 20 }"
        is-masters
        :users="mockOtherUsers(20)"
        :class="$b('mastersList')"
      )
    RzdTextarea(
      v-model="desires"
      placeholder="Ваши пожелания на игру"
      :class="$b('desiresText')"
    )
  RzdButton(
    :type="EButtons.SUBMIT_GAME_ORDER"
    :disabled="!isOrderEnabled"
    :class="$b('submitButton')"
    @click=""
  )
</template>

<style lang="scss">
.OrderPage {
  align-items: center;
  &__gameSelector {
    width: 100%;
  }
  &__mastersListContainer {
    width: 100%;
    height: 288px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-s;
    overflow: hidden;
    & > span {
      @include fullsize;
      @include centeredFlex;
    }
  }
  &__mastersList {
    --usersStructureListPadding: 16px 6px 16px 16px;
  }
  &__desiresText {
    height: 174px;
  }
  &__submitButton {
    width: var(--submitButtonWidth, 100%);
  }
}

@include mobile {
  .OrderPage {
    --submitButtonWidth: 50%;
  }
}
</style>
