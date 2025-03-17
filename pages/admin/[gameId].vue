<script setup lang="ts">
import { mockEventsData, mockOtherUsers } from '~/assets/mocks';
import { EButtons } from '~/constants/components';


const users = mockOtherUsers(40);

const events = mockEventsData(3);

const { openGameRating } = useModalDialog();

const $b = useBEM('EventManagePage');
</script>

<template lang="pug">
RzdCarousel(
  v-slot="{ itemsData: [event] }"
  :items="events"
)
  div(:class="$b()")
    UsersStructure(
      :users
      :items-in-row="4"
    )
      template(#texts)
        div(:class="$b('eventInfo')")
          div(:class="$b('nameParty')")
            h6
              | {{ event.gameData.title }}
            div
              | Партий: 3
          EventDatePlace(
            :date="event.gameData.date"
            :time="event.gameData.time"
            :subway="event.locationData.subway"
          )
      template(#buttons)
        RzdButton(
          :type="EButtons.FINISH_GAME"
          :class="$b('button')"
          @click="openGameRating('mafia', event)"
        )
        RzdButton(
          :type="EButtons.MASTER_RATING"
          :class="$b('button')"
          @click=""
        )
</template>

<style lang="scss">
.EventManagePage {
  --usersStructureSubcontentFlexBasis: 38%;
  --usersStructureContentWidth: 62%;

  &__eventInfo {
    @include flexColumn((gap: vars.$gaps-g16));

    width: 100%;
  }

  &__nameParty {
    @include flexColumn((gap: vars.$gaps-g12));

    & > h6 {
      color: vars.$colors-beige;
    }

    & > div {
      color: vars.$colors-white;
    }
  }

  &__button {
    flex-basis: 50%;
  }
}
</style>
