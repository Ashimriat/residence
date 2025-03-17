<script setup lang="ts">
import { EButtons } from '~/constants/components';
import {
  EVENTS_GAMES_OPTIONS as BASE_GAMES_OPTIONS,
  EVENTS_OPTIONS,
} from '~/constants/pages';
import { type FormData } from '~/components/forms/EventCreationForm.vue';


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
    },
  });
}

const $b = useBEM('CreateEventPage');

const formData = ref<FormData>({
  name: '',
  price: '',
  address: '',
  subwayId: '',
  description: '',
  params: [],
});

definePageMeta({
  layout: 'event-manage',
});
</script>

<template lang="pug">
div(:class="$b()")
  h1
    | Новое событие
  div(:class="$b('topContainer')")
    RzdSelectButtons(
      v-model="eventType"
      :options="EVENTS_OPTIONS"
    )
    RzdRadios(
      v-model="event"
      :options="GAMES_OPTIONS"
    )
  h4
    | Обложка
  RzdFileSelect(
    v-model="cover"
  )
  h4
    | Ведущий
  RzdButton(
    v-if="!masterData"
    :type="EButtons.SELECT_MASTER"
    :class="$b('masterSelectButton')"
    @click="openMasterSelectModal"
  )
  UserData(
    v-else
    :avatar="masterData.avatar"
    :name="masterData.name"
  )
  EventCalendarBlock(
    v-model:date="selectedDate"
    v-model:time="selectedTime"
    data-section-title="Общая информация"
  )
    EventCreationForm(v-model="formData")
    RzdButton(
      :type="EButtons.CREATE_EVENT"
      disabled
      @click=""
    )
</template>

<style lang="scss">
.CreateEventPage {
  &__topContainer {
    @include flexColumn((gap: vars.$gaps-g20));
  }

  &__masterSelectButton {
    max-width: 225px;
  }
}
</style>
