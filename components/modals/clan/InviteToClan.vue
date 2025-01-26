<script setup lang="ts">
import { mockOtherUsers } from '~/assets/mocks';
import { EButtons } from '~/components/base';


const { getModalData, closeModal } = useModalDialog<string>();

const search = ref<string>('');

const clanId = getModalData();
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

}

function processSelection(data: OtherUserData): void {
  const index = selectedUsersIdsIndexesDict.value[data.id];
  if (index === undefined) {
    selectedUsers.value.push(data);
  } else {
    selectedUsers.value.splice(index, 1);
  }
}

const $b = useBEM('InviteToClan');
</script>

<template lang="pug">
div(:class="$b()")
  BaseSearch(
    v-model="search"
    placeholder="ID игрока"
  )
  template(
    v-for="(data, i) of [availableUsers, selectedUsers]"
    :key="`panel_${i}`"
  )
    PScrollPanel(v-if="data.length")
      div(
        v-for="(userData, k) of data"
        :key="userData.id"
        :class="$b('userRecord')"
      )
        UserData(
          :avatar="userData.avatar"
          :name="userData.name"
        )
        BaseButton(
          :class="$b('userControlButton')"
          :type="i === 0 ? EButtons.ADD_PLAYER_TO_CLAN_SELECTION : EButtons.REMOVE_PLAYER_FROM_CLAN_SELECTION"
          @click="processSelection(userData)"
        )
  BaseButton(
    :type="EButtons.CONFIRM"
    @click="addSelectedPlayers"
  )
  BaseButton(
    :type="EButtons.CLOSE"
    @click="closeModal"
  )
</template>

<style lang="scss">
.InviteToClan {
  @include flex((gap: vars.$gaps-g16, flex-wrap: wrap));
  max-width: 600px;
  --scrollPanelGap: 0;
  &__userRecord {
    @include flex((align-items: center, justify-content: space-between));
    padding: 12px 0;
    &:not(&:last-child) {
      border-bottom: 2px solid vars.$colors-greyLight;
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
