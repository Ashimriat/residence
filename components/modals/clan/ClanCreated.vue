<script setup lang="ts">
import { EButtons } from '~/components/base';

const { closeModal } = useModalDialog();

function processInvite(): void {
  closeModal();
}

const $b = useBEM('ClanCreated');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('text')")
    | Приглашайте других игрококов и покоряйте рейтинг!
  BaseButton(
    :type="EButtons.INVITE_TO_CLAN"
    @click="processInvite"
  )
  BaseButton(
    :type="EButtons.CLOSE"
    @click="closeModal"
  )
</template>

<style lang="scss">
.ClanCreated {
  @include flex((gap: 20px, flex-wrap: wrap));
  max-width: 320px;
  &__text {
    font-size: 16px;
    font-weight: vars.$fw-midHeavy;
  }
  & button {
    flex: 1 0;
    --buttonLabelFontSize: #{vars.$fs-static-s};
  }
}
</style>
