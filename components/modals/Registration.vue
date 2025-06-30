<script setup lang="ts">
import type { ApiRequestedPayload } from '~/composables/useAPI';
import { EButtons } from '~/components/constants';
import { EApiRoutes } from '~/composables/useAPI';

const { openLogin, closeModal } = useModal();
const { setUserData } = useUserStore();
const { isDesktop, isTMA } = usePlatform();

const payload = ref<ApiRequestedPayload<EApiRoutes.SIGN_UP>>(
  {} as ApiRequestedPayload<EApiRoutes.SIGN_UP>
);

const signUpIdentifier = computed<string>(() => {
  if (isDesktop) return 'email'
  if (isTMA) return 'ником Telegram'
  return 'телефоном'
});

const {
  data,
  isProcessing,
  error,
  makeRequest,
  getRequestError,
} = await useAPI(
  EApiRoutes.SIGN_UP,
  {
    payload,
    requestErrorsDetails: {
      400: {
        signUpIdentifier: signUpIdentifier.value,
      },
    } 
  }
);

const toast = useToasts()

async function handleSubmit(userData: EditableUserData<Date | undefined>): Promise<void> {
  payload.value = {
    body: {
      email: isTMA ? userData.telegram : userData.phone,
      firstName: userData.name,
      lastName: userData.surname,
      password: userData.password1,
    },
  };
  await makeRequest();
  if (error.value) {
    toast.error('Регистрация не удалась', getRequestError());
    return;
  }
  toast.success('Вы успешно зарегистрировались', 'Надеемся, вы останетесь довольны');
  await delay(1_000)
  /** @ts-expect-error */
  setUserData(data.value)
  closeModal()
}

const $b = useBEM('Registration')
</script>

<template lang="pug">
UserDataForm(
  :additional-buttons="[EButtons.ALREADY_REGISTERED]"
  :submit-button="EButtons.SIGN_UP"
  :is-loading="isProcessing"
  :class="$b()"
  @data-submit="handleSubmit"
  @additional-button="openLogin"
)
</template>