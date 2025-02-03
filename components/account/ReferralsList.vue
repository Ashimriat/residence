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
UsersStructureView(
  :users="referrals" 
  :class="$b()"
)
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
