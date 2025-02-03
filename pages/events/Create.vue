<script setup lang="ts">
import { EButtons } from '~/components/base';
import {
  GAMES_OPTIONS as BASE_GAMES_OPTIONS,
  EVENTS_OPTIONS
} from '../constants/events';


export type MasterSelectModalData = {
  onSelect: (master: Participant) => void;
}

const GAMES_OPTIONS = [
  ...BASE_GAMES_OPTIONS,
  { label: 'Покер', value: 'poker' },
  { label: 'Другое', value: 'other' },
]

const eventType = ref<string>('game');
const event = ref<string>('');
const cover = ref<File[]>([]);
const masterData = ref<Participant | null>(null);

const { selectedDate, selectedTime } = useCalendar();

const { showMasterSelect } = useModalDialog();

function openMasterSelectModal(): void {
  showMasterSelect({
    onSelect: (master) => {
      masterData.value = master;
    }
  })
}

const $b = useBEM('CreatePage');
</script>

<template lang="pug">
div(:class="$b()")
  h1
    | Новое событие
  BaseSelectButtons(
    v-model="eventType"
    :options="EVENTS_OPTIONS"
  )
  div(:class="$b('radioContainer')")
    BaseRadios(
      :options="GAMES_OPTIONS"
      v-model="event"
    )
  h4
    | Обложка
  BaseFileSelect(
    v-model="cover"
  )
  h4
    | Ведущий
  BaseButton(
    v-if="!masterData"
    :type="EButtons.SELECT_MASTER"
    @click="openMasterSelectModal"
  )
  UserData(
    v-else
    :avatar="masterData.avatar"
    :name="masterData.name"
  )
  EventSelectionContainer(
    data-section-title="Общая информация"
    v-model:date="selectedDate"
    v-model:time="selectedTime"
  )
</template>

<style lang="scss">
.CreatePage {
  &__radioContainer {
    @include flex;
  }
}
</style>
