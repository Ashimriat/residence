<script setup lang="ts">
import type { ApiRequestedPayload } from '~/composables/useAPI';
import { EApiRoutes } from '~/composables/useAPI';
import { EButtons } from '~/components/constants';
import { ELocalStorageKeys } from '~/constants/localStorage';


const $b = useBEM('Login');
const { isTMA } = usePlatform()
const { openRegistration, openPasswordRecovery, closeModal } = useModal();
const toast = useToasts()

const phone = ref<string>('');
const password = ref<string>('');

const payload = computed<ApiRequestedPayload<EApiRoutes.LOGIN>>(() => ({
  body: {
    email: phone.value,
    password: password.value
  }
}))

const { data, isProcessing, error, makeRequest, getRequestError } = await useAPI(EApiRoutes.LOGIN, { payload })

const authTokens = useAuthTokens()

async function login(): Promise<void> {
  await makeRequest()
  if (error.value) {
    toast.error('Не удалось залогиниться', getRequestError());
    return;
  }
  toast.success('Успешный логин');
  await delay(1_000)
  /** @ts-ignore */
  authTokens.value = data.value
  closeModal()
}
</script>

<template lang="pug">
form(:class="$b()")
  RzdInput(
    v-if="!isTMA"
    v-model="phone"
    v-keyfilter.int
    required
    name="phone"
    placeholder="Телефон"
  )
  RzdInput( 
    v-model="password"
    type="password"
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
    :is-loading="isProcessing"
    @click="login"
  )
</template>

<style lang="scss">
.Login {
  @include flex-column((gap: vars.$gaps-g16));
}
</style>
