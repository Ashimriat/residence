<script setup lang="ts">
import { mockOtherUsers, mockText } from '~/assets/mocks';
import { EButtons } from '~/components/base';


const referrals = mockOtherUsers(20);


const $b = useBEM('ReferralsList');

function copyToBuffer(): void {
  alert("COPY REFERRAL LINK TO BUFFER");
}
</script>

<template lang="pug">
UsersStructureView(:class="$b()")
  template(#texts)
    h3
      | Реферральная система
    span(:class="$b('description')")
      | {{ mockText() }}
  template(#buttons)
    BaseButton(
      :class="$b('button')"
      :type="EButtons.REFERRAL"
      @click="copyToBuffer"
    )
  template(#list)
    UsersList(:users="referrals")
</template>

<style lang="scss">
.ReferralsList {
  --usersStructureHeight: 360px;
  &__description {
    font-size: vars.$fs-static-s;
  }
  &__button {
    --iconStroke: #{vars.$colors-black};
    width: 100%;
  }
}
</style>
