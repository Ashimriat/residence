<script setup lang="ts">
import { EButtons } from '../constants';


const oldPassword = ref<string>('');
const newPassword = ref<string>('');

const { openLogin } = useModal()

const $b = useBEM('PasswordRecovery');
</script>

<template lang="pug">
form(
  :class="$b()"
  @submit=""
)
  RzdInput(
    v-model="oldPassword"
    type="password"
    placeholder="Старый пароль"
  )
  RzdInput(
    v-model="newPassword"
    type="password"
    placeholder="Новый пароль"
  )
  div(:class="$b('buttonsContainer')")
    RzdButton(
      :type="EButtons.BACK"
      @click="openLogin"
    )
    RzdButton(
      :type="EButtons.RECOVER_PASSWORD"
      @click=""
    )
</template>

<style lang="scss">
.PasswordRecovery {
  @include flex-column((gap: vars.$gaps-g16));
  &__buttonsContainer {
    @include flex((justify-content: space-between));
    & button {
      flex-basis: 48%;
    }
  }
}
</style>
