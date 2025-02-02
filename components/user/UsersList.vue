<script setup lang="ts">
import { EButtons } from '~/components/base';
import { type Props as BaseScrollPanelProps } from '~/components/base/BaseScrollPanel.vue'


type Props = BaseScrollPanelProps & {
  users: Participant[];
  isMasters?: boolean;
  withExpel?: boolean;
  ownerId?: string;
};

type Emits = {
  expel: [userId: string];
  select: [userId: string];
}

const {
  gap,
  itemsInRow,
  //
  users,
  //
  ownerId = '',
  isMasters,
  withExpel,
} = defineProps<Props>();
const emit = defineEmits<Emits>();

const selectedUser = defineModel<string>('selected', { default: null });

const { isDesktop } = useDevice();

const { providedData, checkIsClanOwner } = useUserStore();

const isSelectableUser = computed<boolean>(() => selectedUser.value !== null);

const isClanOwner = checkIsClanOwner(ownerId);

function handleSelection(id: string): void {
  if (!isSelectableUser.value) return;
  selectedUser.value = id;
}

const $b = useBEM('UsersList');
</script>

<template lang="pug">
BaseScrollPanel(
  :gap
  :items-in-row="itemsInRow ?? isDesktop ? 3 : 2"
  :class="$b({ operatable: isSelectableUser || withExpel })"
)
  div(
    v-for="user of users"
    :key="user.id"
    :class="$b('participant', { selected: selectedUser === user.id })"
    @click="handleSelection(user.id)"
  )
    UserData(
      :avatar="user.avatar"
      :name="user.name"
      :is-linker="isMasters"
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
  --scrollPanelItemGrow: 0;
  --scrollPanelContentPadding: 0 12px 0 0;
  &--operatable {
    --participantPointerEvents: all;
  }
  &__participant {
    @include relative;
    @include flex((
      align-items: center,
      gap: vars.$gaps-g8,
    ));
    @include transition(background-color);
    padding: var(--userListParticipantPadding, 12px);
    border-radius: vars.$br-s;
    pointer-events: var(--participantPointerEvents, none);
    cursor: pointer;
    &:hover {
      --expelButtonOpacity: 1;
      & button {
        pointer-events: all;
      }
    }
    &:hover,
    &--selected {
      background-color: vars.$colors-greyLight;
    }
    &--selected {
      pointer-events: none;
    }
  }
  &__expelButton {
    @include absolute((right: 12px));
    @include transition(opacity);
    opacity: var(--expelButtonOpacity, 0);
    pointer-events: none;
    width: 30px;
    height: 30px;
    padding: 0px;
    font-size: vars.$fs-xs;
    --p-button-border-radius: #{vars.$br-x2s};
  }
}

@include mobile {
  .UsersList {
    --expelButtonOpacity: 1;
    --userListParticipantPadding: 0;
    &__expelButton {
      position: static;
      width: unset;
      height: unset;
      font-size: vars.$fs-static-xs;
      padding: 8px 10px;
    }
  }
}
</style>
