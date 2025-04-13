<script setup lang="ts">
import { mockOtherUsers } from '~/__mocks__';
import { EButtons } from '~/components/constants';


const { closeModal } = useModal<string>();
const $b = useBEM('AddPlayers');

const search = ref<string>('');

const allUsers = mockOtherUsers(20);
const selectedUsers = ref<OtherUserData[]>([]);

const selectedUsersIdsIndexesDict = computed<Record<string, number>>(() => (
  selectedUsers.value.reduce((acc, { id }, i) => {
    acc[id] = i;
    return acc;
  }, <Record<string, number>>{})
));
const availableUsers = computed<OtherUserData[]>(() => (
  allUsers.filter(({ id }) => selectedUsersIdsIndexesDict.value[id] === undefined)
));

function addSelectedPlayers(): void {
  closeModal();
}

function processSelection(data: OtherUserData): void {
  const index = selectedUsersIdsIndexesDict.value[data.id];
  if (index === undefined) {
    selectedUsers.value.push(data);
  } else {
    selectedUsers.value.splice(index, 1);
  }
}

</script>

<template lang="pug">
div(:class="$b()")
  RzdSearch(
    v-model="search"
    placeholder="ID игрока"
  )
  template(
    v-for="(data, i) of [availableUsers, selectedUsers]"
    :key="`panel_${i}`"
  )
    RzdScrollPanel(
      v-if="data.length"
      :items-in-row="1"
      :gap="0"
      :class="$b('panel', { small: data.length < 4 })"
    )
      div(
        v-for="userData of data"
        :key="userData.id"
        :class="$b('userRecord')"
      )
        UserData(
          :avatar="userData.avatar"
          :name="userData.name"
        )
        RzdButton(
          :class="$b('userControlButton')"
          :type="i === 0 ? EButtons.ADD_PLAYER_TO_SELECTION : EButtons.REMOVE_PLAYER_FROM_SELECTION"
          @click="processSelection(userData)"
        )
  RzdButton(
    :type="EButtons.CONFIRM"
    :disabled="!selectedUsers.length"
    @click="addSelectedPlayers"
  )
  RzdButton(
    :type="EButtons.CLOSE"
    @click="closeModal"
  )
</template>

<style lang="scss">
.AddPlayers {
  @include flex-column((gap: vars.$gaps-g16));
  &__panel {
    --scrollPanelPadding: 20px 0 20px 20px;
    border-radius: vars.$br-s;
    height: 340px;
    &--small {
      height: fit-content;
      --p-scrollpanel-bar-size: 0;
    }
  }
  &__userRecord {
    @include flex((align-items: center, justify-content: space-between));
    padding: 12px 0;
    &:first-child {
      padding-top: 0;
    }
    &:not(&:last-child) {
      border-bottom: 2px solid vars.$colors-greyLight;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }

  & > button {
    flex-grow: 1;
  }
  &__userControlButton {
    max-width: 110px;
  }
}
</style>
