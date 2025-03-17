<script setup lang="ts">
import { EButtons } from '~/constants/components';

const { getModalData, closeModal } = useModalDialog<ClanData>();
const { title, participants } = getModalData();


const $b = useBEM('ClanParticipants');
</script>

<template lang="pug">
div(:class="$b()")
  ClanDataHeader(
    header-size="small"
    :title="title"
    :participants-amount="participants.length"
  )
  PScrollPanel(:class="$b('panel')")
    UserData(
      v-for="({ name, avatar }, i) of participants"
      :key="i"
      :name
      :avatar
    )
  RzdButton(
    :class="$b('closeButton')"
    :type="EButtons.CLOSE"
    @click="closeModal"
  )
</template>

<style lang="scss">
#modal_clanParticipants {
  .p-dialog-header {
    padding: 0;
  }
  .p-dialog-content {
    padding: 32px 2rem;
  }
  .p-dialog-close-button {
    @include absolute((
      top: 32px,
      right: 2rem,
    ));
    padding: 0;
    width: fit-content;
    height: fit-content;
  }
}

.ClanParticipants {
  @include centeredFlexColumn((gap: vars.$gaps-g16));
  max-width: 500px;
  --scrollPanelItemBasis: 0;
  &__closeButton {
    width: 100%;
  }
}
</style>
