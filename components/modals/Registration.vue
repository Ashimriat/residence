<script setup lang="ts">
import { mockUserData } from '~/__mocks__';
import { EButtons } from '~/components/constants';


const { openLogin, closeModal } = useModal();
const { setUserData } = useUserStore();

function handleSubmit(userData: EditableUserData): void {
  setUserData([userData, mockUserData()[1]]);
  closeModal();
}

const $b = useBEM('Registration')
</script>

<template lang="pug">
UserDataForm(
  :additional-buttons="[EButtons.ALREADY_REGISTERED]"
  :submit-button="EButtons.SIGN_UP"
  :class="$b()"
  @data-submit="handleSubmit"
  @additional-button="openLogin()"
)
</template>