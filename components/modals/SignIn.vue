<script setup lang="ts">
import { mockUserData } from '~/assets/mocks';
import { EButtons } from '~/constants/components';

const $b = useBEM('SignIn');
const userStore = useUserStore();
const { setUserData } = userStore;
const { openSignUp, closeModal } = useModalDialog();

function login(): void {
  setUserData(mockUserData());
  closeModal();
}
</script>

<template lang="pug">
div(:class="$b()")
  PInputText(
    v-keyfilter.int
    placeholder="Телефон"
    :class="$b('input')"
  )
  PInputText(
    placeholder="Пароль"
    :class="$b('input')"
  )
  RzdButton(
    :type="EButtons.NO_ACCOUNT"
    :class="$b('textButton')"
    @click="openSignUp"
  )
  RzdButton(
    :type="EButtons.FORGOT_PASSWORD"
    :class="$b('textButton')"
  )
  RzdButton(
    omit-icon
    :type="EButtons.SIGN_IN_MODAL"
    @click="login"
  )
</template>

<style lang="scss">
.SignIn {
  @include flexColumn((gap: vars.$gaps-g16));

  width: 460px;
  background-color: vars.$colors-bg;
  box-sizing: content-box;
  &__input {
    border-radius: vars.$br-s;
    border: 1px solid vars.$colors-greyLight;
    background-color: vars.$colors-white;
  }
  &__textButton {
    justify-content: flex-start;
    height: fit-content;
  }
}
</style>
