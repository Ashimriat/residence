<script setup lang="ts">
import { mockEventsData, mockEventsBigData, mockOtherUsers } from '~/__mocks__';
import { EButtons } from '~/components/constants';


const users = mockOtherUsers(40);

const events = mockEventsData(3);
const otherEvents = mockEventsBigData(3, 6);

const { openGameRating } = useModal();

const $b = useBEM('EventManagePage');
</script>

<template lang="pug">
div(:class="$b()")
  RzdCarousel(
    v-slot="{ itemsData: [event] }"
    :items="events"
  )
    UsersStructure(
      :users
      :items-in-row="4"
      :class="$b('gameData')"
    )
      template(#texts)
        EventCard(
          mode="light"
          coloring="dark"
          :event-data="event"
          :class="$b('eventCard')"
        )
          template(#gameHeader)
            div(:class="$b('gameHeader')")
              h5
                | {{ event.gameData.title }}
              div
                | Партий: 3
      template(#buttons)
        RzdButton(
          :type="EButtons.FINISH_GAME"
          :class="$b('button')"
          @click="openGameRating('mafia', event)"
        )
        RzdButton(
          v-if="false"
          :type="EButtons.MASTER_RATING"
          :class="$b('button')"
          @click=""
        )
  section(:class="$b('otherGames')")
    h4
      | Ваши события
    RzdCarousel(
      v-slot="{ itemsData }"
      :items="otherEvents"
      :visible-amount="6"
    )
      div(:class="$b('eventsContainer')")
        EventCard(
          v-for="event of itemsData"
          :key="event.id"
          label="Вы ведущий"
          mode="light"
          coloring="grey"
          :event-data="event"
        )
</template>

<style lang="scss">
.EventManagePage {
  @include flex-column((gap: vars.$gaps-g48));  

  --usersStructureSubcontentFlexBasis: 38%;
  --usersStructureContentWidth: 62%;



  &__gameData {
    box-shadow: none;
  }

  &__eventCard {
    width: 100%;
    border-radius: 0;
  }

  &__gameHeader {
    @include flex-column((gap: vars.$gaps-g12));
    margin-bottom: 10px;

    & > h5 {
      color: vars.$colors-beige;
    }

    & > div {
      font: vars.$fonts-textBoldL;
      color: vars.$colors-white;
    }
  }

  &__button {
    flex-basis: 50%;
  }

  &__otherGames {
    @include flex-column((gap: vars.$gaps-g28));
    padding: 20px;
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;

    & > h4 {
      padding-left: 12px;
    }
  }

  &__eventsContainer {
    @include flex((gap: vars.$gaps-g16, flex-wrap: wrap));
    & > * {
      flex-basis: calc((100% - 32px) / 3);
    }
  }
}
</style>
