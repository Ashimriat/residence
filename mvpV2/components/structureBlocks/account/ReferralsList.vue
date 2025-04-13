<script setup lang="ts">
import { mockOtherUsers, mockText } from '~/__mocks__';
import { EButtons } from '~/components/constants';


const referrals = mockOtherUsers(20);


const $b = useBEM('ReferralsList');

function copyToBuffer(): void {
}
</script>

<template lang="pug">
UsersStructure(
  :users="referrals"
  :items-in-row="{ mobile: 2 }"
  :class="$b()"
)
  template(#texts)
    h4
      | Реферральная система
    span(:class="$b('description')")
      | {{ mockText() }}
  template(#buttons)
    RzdButton(
      :class="$b('button')"
      :type="EButtons.REFERRAL"
      @click="copyToBuffer"
    )
</template>

<style lang="scss">
.ReferralsList {
  &__description {
    font-size: vars.$fs-s;
  }
  
  &__button {
    width: 100%;
  }
}
</style>
