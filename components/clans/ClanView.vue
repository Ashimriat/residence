<script setup lang="ts">
import { EButtons } from '~/components/base';

type Props = {
  data: ClanData;
};


const {
  data
} = defineProps<Props>();

const { checkIsClanOwner } = useUserStore();

const { inviteToClan } = useModalDialog();

const isClanOwner = checkIsClanOwner(data.ownerId);

const $b = useBEM('ClanView');

function handleUserExpel(id: string): void {

}
</script>

<template lang="pug">
UsersStructureView
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
    )
    BaseButton(
      :type="EButtons.ADD_PLAYERS"
      :class="$b('addPlayersButton', { wide: !isClanOwner })"
      @click="inviteToClan(data.id)"
    )
    BaseButton(
      :type="EButtons.LEAVE_CLAN"
      :class="$b('leaveButton')"
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
  &__addPlayersButton {
    --p-button-contrast-background: #{vars.$colors-black};
    --p-button-contrast-hover-background: #{vars.$colors-black};
    --p-button-contrast-active-background: #{vars.$colors-black};
    --p-button-contrast-border-color: #{vars.$colors-white};
    --p-button-contrast-hover-border-color: #{vars.$colors-white};
    --p-button-contrast-active-border-color: #{vars.$colors-white};
    --p-button-contrast-color: #{vars.$colors-white};
    --p-button-contrast-hover-color: #{vars.$colors-white};
    --p-button-contrast-active-color: #{vars.$colors-white};
    padding: 12px 9px;
    border-width: 2px;
    & svg {
      fill: vars.$colors-white;
    }
    &--wide {
      flex-grow: 1;
    }
  }
  &__leaveButton {
    flex-basis: 40px;
    padding: 0;
  }
  &__description {
    font-size: vars.$fs-static-s;
  }
}
</style>
