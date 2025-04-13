<script setup lang="ts">
import { mockUserData } from '~/__mocks__';
import { EButtons } from '~/components/constants';


const $b = useBEM('Login');
const userStore = useUserStore();
const { setUserData } = userStore;
const { openRegistration, openPasswordRecovery, closeModal } = useModal();

const phone = ref<string>('');
const password = ref<string>('');

function login(): void {
  setUserData(mockUserData());
  closeModal();
}
</script>

<template lang="pug">
form(:class="$b()")
  RzdTextInput(
    v-model="phone"
    v-keyfilter.int
    required
    name="phone"
    placeholder="Телефон"
  )
  RzdPasswordInput( 
    v-model="password"
    required
    fluid
    name="password"
    placeholder="Пароль"
  )
  RzdButton(
    :type="EButtons.NO_ACCOUNT"
    @click="openRegistration"
  )
  RzdButton(
    :type="EButtons.FORGOT_PASSWORD"
    @click="openPasswordRecovery"
  )
  RzdButton(
    :type="EButtons.SIGN_IN_MODAL"
    @click="login"
  )
</template>

<style lang="scss">
.Login {
  @include flex-column((gap: vars.$gaps-g16));
}
</style>
