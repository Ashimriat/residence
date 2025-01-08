<script setup lang="ts">
import {
  GAMES_OPTIONS as BASE_GAMES_OPTIONS,
  EVENTS_OPTIONS
} from '../constants/events';


const GAMES_OPTIONS = [
  ...BASE_GAMES_OPTIONS,
  { label: 'Покер', value: 'poker' },
  { label: 'Другое', value: 'other' },
]

const eventType = ref<string>('');
const event = ref<string>('');

const $b = useBem('CreatePage');
</script>

<template lang="pug">
div(:class="$b()")
  h1
    | Новое событие
  BaseSelectButtons(
    is-inverted
    v-model="eventType"
    :options="EVENTS_OPTIONS"
  )
  div(:class="$b('radioContainer')")
    BaseRadios(
      :options="GAMES_OPTIONS"
      v-model="event"
    )
</template>

<style lang="scss">
.CreatePage {
  &__radioContainer {
    @include flex;
  }
}
</style>
