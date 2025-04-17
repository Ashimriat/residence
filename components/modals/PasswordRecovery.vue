<script setup lang="ts">
import { EButtons } from '../constants';

type StepInputsData = {
  model: Ref<string>;
  type: RzdInputTypes;
  placeholder: string;
}

const step = ref<number>(0);
const email = ref<string>('');
const emailPassword = ref<string>('');
const newPassword1 = ref<string>('');
const newPassword2 = ref<string>('');

const dynamicInputData = computed<StepInputsData>(() => ([
  { model: email, type: 'text', placeholder: 'Почта' },
  { model: emailPassword, type: 'password', placeholder: 'Пароль с почты' },
  { model: newPassword1, type: 'password', placeholder: 'Новый пароль' }  
] as StepInputsData[])[step.value])

const { openLogin } = useModal()

const $b = useBEM('PasswordRecovery');

function goToNextStep(): void {
  step.value += 1;
}
</script>

<template lang="pug">
form(
  :class="$b()"
  @submit.prevent.stop="goToNextStep"
)
  RzdInput(
    v-model="dynamicInputData.model"
    fluid
    :type="dynamicInputData.type"
    :placeholder="dynamicInputData.placeholder"
  )
  RzdInput(
    v-if="step === 2"
    v-model="newPassword2"
    type="password"
    fluid
    placeholder="Повторите новый пароль"
  )
  div(:class="$b('buttonsContainer')")
    RzdButton(
      :type="EButtons.BACK"
      @click="openLogin"
    )
    RzdButton(:type="EButtons.RECOVER_PASSWORD")
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
