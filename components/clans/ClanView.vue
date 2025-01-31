<script setup lang="ts">
import { EButtons } from '~/components/base';


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
UsersStructureView(
  :class="$b()"
  v-model:show-list="isParticipantsDisplayed"
)
  template(#texts)
    ClanDataHeader(
      :title="data.title"
      header-size="big"
    )
    span(:class="$b('description')")
      | {{ data.description }}
  template(#buttons)
    BaseButton(
      v-if="isClanOwner"
      :type="EButtons.ORDER_GAME"
      :class="$b('gameOrderButton')"
    )
    template(v-if="isDesktop")
      BaseButton(
        :type="EButtons.ADD_PLAYERS"
        @click="inviteToClan(data.id)"
      )
    template(v-else)
      BaseButton(
        :type="EButtons.INVITE_TO_CLAN_MOBILE"
        @click="inviteToClan(data.id)"
      )
      BaseButton(
        :type="EButtons.TOGGLE_DETAILS"
        @click="toggleParticipantsDisplay"
      )
    BaseButton(
      :type="EButtons.LEAVE_CLAN"
      :class="$b('leaveButton')"
      @click="leaveClan"        
    )
  template(#list)
    UsersList(
      with-expel
      :users="data.participants"
      :owner-id="data.ownerId"
      @expel="handleUserExpel"
    )
</template>

<style lang="scss">
.ClanView {
  &__leaveButton {
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
