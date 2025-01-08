<script setup lang="ts">
import { mockUserData } from '~/assets/mocks';
import { EButtons } from '~/components/base';

const $b = useBem();
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
  BaseButton(
    :type="EButtons.NO_ACCOUNT"
    :class="$b('textButton')"
    @click="openSignUp"
  )
  BaseButton(
    :type="EButtons.FORGOT_PASSWORD"
    :class="$b('textButton')"
  )
  BaseButton(
    omit-icon
    :type="EButtons.SIGN_IN"
    @click="login"
  )
</template>

<style lang="scss">
.SignIn {
  @include flexColumn((gap: 16px));

  width: 460px;
  background-color: vars.$colors-greyBackground;
  box-sizing: content-box;
  &__input {
    border-radius: vars.$br-s;
    border: 1px solid #EEEEEE;
    height: 48px;
  }
  &__textButton {
    justify-content: flex-start;
    height: fit-content;
  }
}
</style>
