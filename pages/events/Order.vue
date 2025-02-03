<script setup lang="ts">
import { mockOtherUsers } from '~/assets/mocks';
import { GAMES_OPTIONS } from '../constants/events';
import { EButtons } from '~/components/base';


const game = ref<string>('');
const masterSearch = ref<string>('');
const master = ref<string>('');
const desires = ref<string>('');

const { selectedDate, selectedTime } = useCalendar();

const isOrderEnabled = computed<boolean>(
  () => !!game.value && !!master.value && !!selectedDate.value && !!selectedTime.value
);

const $b = useBEM('OrderPage');
</script>

<template lang="pug">
div(:class="$b()")
  h1
    | Заказ игры
  BaseSelectButtons(
    v-model="game"
    :options="GAMES_OPTIONS"
    :class="$b('gameSelector')"
  )
  EventSelectionContainer(
    v-model:date="selectedDate"
    v-model:time="selectedTime"
    data-section-title="Ведущий"
    :is-calendar-disabled="!game"
  )
    BaseSearch(
      v-model="masterSearch"
      :is-disabled="!game"
      placeholder="ID или имя ведущего"
    )
    div(:class="$b('mastersListContainer')")
      span(v-if="!game")
        | Сперва надо выбрать игру
      UsersList(
        v-else
        v-model:selected="master"
        :gap="{ x: 29, y: 20 }"
        is-masters
        :users="mockOtherUsers(20)"
        :class="$b('mastersList')"
      )
    BaseTextarea(
      v-model="desires"
      placeholder="Ваши пожелания на игру"
      :class="$b('desiresText')"
    )
  BaseButton(
    :type="EButtons.SUBMIT_GAME_ORDER"
    :disabled="!isOrderEnabled"
    :class="$b('submitButton')"
    @click=""
  )
</template>

<style lang="scss">
.OrderPage {
  @include flexColumn((
    align-items: center,
    gap: vars.$gaps-g32,
  ));
  max-width: 1160px;
  &__gameSelector {
    width: 100%;
  }
  &__mastersListContainer {
    @include fullsize;
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
    --scrollPanelPadding: var(--mastersListPadding, 16px 8px 20px 16px);
    --scrollPanelContentPadding: var(--mastersListContentPadding, 0 20px 0 0);
    --userListParticipantPadding: 0;
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
    --mastersListPadding: 16px 4px 20px 16px;
    --mastersListContentPadding: 0 12px 0 0;
    --submitButtonWidth: 50%;
  }
}
</style>
