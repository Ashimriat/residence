<script setup lang="ts">
import { mockOtherUsers, mockText } from '~/assets/mocks';
import { EButtons } from '~/constants/components';


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
    h3
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
    font-size: vars.$fs-static-s;
  }
  
  &__button {
    width: 100%;
  }
}
</style>
