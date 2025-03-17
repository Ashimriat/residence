<script setup lang="ts">
import { EButtons } from '~/constants/components';


type Props = {
  data: ClanData;
};

const { data } = defineProps<Props>();
const { isDesktop } = useDevice();

const isParticipantsDisplayed = ref<boolean>(isDesktop);

const { checkIsClanOwner } = useUserStore();
const isClanOwner = checkIsClanOwner(data.ownerId);

const { inviteToClan } = useModalDialog();

function toggleParticipantsDisplay(): void {
  isParticipantsDisplayed.value = !isParticipantsDisplayed.value;
}

function handleUserExpel(id: string): void {

}

function leaveClan(): void {

}

const $b = useBEM('ClanView');
</script>

<template lang="pug">
UsersStructure(
  v-model:show-list="isParticipantsDisplayed"
  :items-in-row="{ mobile: 1 }"
  with-expel
  :users="data.participants"
  :owner-id="data.ownerId"
  :class="$b()"
  @expel="handleUserExpel"
)
  template(#texts)
    ClanDataHeader(
      :title="data.title"
      header-size="big"
    )
    span(:class="$b('description')")
      | {{ data.description }}
  template(#buttons)
    RzdButton(
      v-if="isClanOwner"
      :type="EButtons.ORDER_GAME"
      :class="$b('gameOrderButton')"
    )
    template(v-if="isDesktop")
      RzdButton(
        :type="EButtons.ADD_PLAYERS"
        @click="inviteToClan(data.id)"
      )
    template(v-else)
      RzdButton(
        :type="EButtons.INVITE_TO_CLAN_MOBILE"
        @click="inviteToClan(data.id)"
      )
      RzdButton(
        :type="EButtons.TOGGLE_DETAILS"
        @click="toggleParticipantsDisplay"
      )
    RzdButton(
      :type="EButtons.LEAVE_CLAN"
      :class="$b('leaveButton')"
      @click="leaveClan"
    )
</template>

<style lang="scss">
.ClanView {
  --usersStructureListPadding: 8px 0 20px 12px;
  --usersStructureListContentPaddingBlockStart: 12px;

  &__leaveButton {
    flex-grow: 0;
    flex-basis: 40px;
    padding: 0;
  }

  &__description {
    font-size: vars.$fs-static-s;
  }
}

@include mobile {
  .ClanView {
    &__gameOrderButton {
      width: 100%;
    }
  }
}
</style>
