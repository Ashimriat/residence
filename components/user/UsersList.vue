<script setup lang="ts">
import { EButtons } from '~/components/base';


type Props = {
  users: Participant[];
  withExpel?: boolean;
  ownerId?: string;
};

type Emits = {
  expel: [userId: string];
}

const {
  users,
  ownerId = '',
} = defineProps<Props>();
const emit = defineEmits<Emits>();

const { providedData, checkIsClanOwner } = useUserStore();

const isClanOwner = checkIsClanOwner(ownerId);

const $b = useBEM('UsersList');
</script>

<template lang="pug">
PScrollPanel(:class="$b()")
  div(
    v-for="user of users"
    :key="user.id"
    :class="$b('participant')"
  )
    UserData(
      :avatar="user.avatar"
      :name="user.name"
      :is-clan-owner="user.id === ownerId"
    )
    BaseButton(
      v-if="withExpel && isClanOwner && user.id !== providedData.id"
      :type="EButtons.EXPEL_PLAYER"
      :class="$b('expelButton')"
      @click="emit('expel', user.id)"
    )
</template>

<style lang="scss">
.UsersList {
  --scrollPanelHeight: 100%;
  --scrollPanelGap: 1.6rem 1.2rem;
  --scrollPanelItemGrow: 0;
  --scrollPanelItemBasis: 30%;
  & .p-scrollpanel-content {
    padding-top: 6px;
  }
  &__participant {
    @include relative;
    @include flex((align-items: center, gap: 8px, flex-basis: 31%));
    @include transition(background-color);
    padding: 8px 12px;
    border-radius: vars.$br-s;
    &:hover {
      background-color: vars.$colors-greyLight;
      & button {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
  &__expelButton {
    @include absolute((right: 12px));
    @include transition(opacity);
    opacity: 0;
    pointer-events: none;
    width: 30px;
    height: 30px;
    padding: 0px;
    font-size: vars.$fs-xs;
    --p-button-border-radius: #{vars.$br-x2s};
  }
}
</style>
