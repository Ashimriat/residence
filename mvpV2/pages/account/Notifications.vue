<script setup lang="ts">
import type { NotificationData, NotificationType } from '~/types/data/notification';
import { mockNotifications } from '~/assets/mocks';


const notifications = ref<NotificationData[]>(mockNotifications(8));

function getIcon(type: NotificationType): string {
  return {
    rate: 'thumbs-up',
    paymentSuccess: 'credit-card',
    paymentFail: 'times-circle',
    social: 'telegram',
  }[type];
}

const { page, displayedItems } = usePagination(notifications, 6);

function deleteAllNotifications(): void {
  notifications.value.length = 0;
}

function removeNotification(nId: string): void {
  notifications.value = notifications.value.filter(({ id }) => id !== nId);
}

const $b = useBEM('NotificationsPage');
</script>

<template lang="pug">
div(
  v-if="false"
  :class="$b()"
)
  div
    div(:class="$b('titleContainer')")
      h6
        | Уведомления
      span.pi.pi-trash(
        v-if="displayedItems.length"
        @click="deleteAllNotifications"
      )
    div(
      v-if="displayedItems.length"
      :class="$b('notificationsContainer')"
    )
      div(
        v-for="({ id, type, title, date, description }) of displayedItems"
        :key="id"
        :class="$b('notification')"
      )
        div(:class="$b('data')")
          span.pi(:class="`pi-${getIcon(type)}`")
          span
            | {{ title }}
          //- @TODO: попробовать сделать отображение "вчера"
          NuxtTime(
            :class="$b('time')"
            relative
            :datetime="new Date(date.epochMilliseconds)"
          )
        div(:class="$b('description')")
          | {{ description }}
        div(:class="$b('iconContainer')")
          span.pi.pi-trash(@click="removeNotification(id)")
  RzdPagination(
    v-model:page="page"
    :amount-on-page="6"
    :items-amount="notifications.length"
  )
</template>

<style lang="scss">
.NotificationsPage {
  @include flexColumn((gap: vars.$gaps-g48));
  --sectionPaddingBottom: 0;
  & span.pi-trash {
    cursor: pointer;
  }
  &__titleContainer,
  &__notificationsContainer {
    background-color: vars.$colors-white;
  }
  &__titleContainer {
    @include flex((justify-content: space-between, align-items: center));
    padding: 20px;
    border-radius: vars.$br-s vars.$br-s 0 0; 
    border-bottom: 2px solid vars.$colors-greyLight;
  }
  &__notificationsContainer {
    border-radius: 0 0 vars.$br-s vars.$br-s;
    padding: 1rem;
  }
  &__notification {
    display: grid;
    grid-template-columns: 1fr 32px;
    grid-template-rows: repeat(2, 1fr);
    gap: vars.$gaps-g12;
    padding: 12px;
    border-bottom: 2px solid vars.$colors-greyLight;
    &:last-child {
      border-bottom: none;
    }
  }
  &__data {
    @include flex((
      gap: vars.$gaps-g8,
      align-items: center,
    ));
    grid-column: 1;
    grid-row: 1;
    & span:last-of-type {
      font-weight: vars.$fw-bold;
    } 
  }
  &__time {
    font-size: 16px;
    color: vars.$colors-greyMuted;
  }
  &__description {
    grid-column: 1;
    grid-row: 2;
    color: vars.$colors-greyMuted;
    font-size: 16px;
  }
  &__iconContainer {
    @include centeredFlex;
    grid-column: 2;
    grid-row: 1 / span 2;
    cursor: pointer;
  }
}
</style>
