<script setup lang="ts">
import { mockUserData } from '~/assets/mocks';
import { EButtons } from '~/components/constants';


const { openSignIn, closeModal } = useModal();
const { setUserData } = useUserStore();

function handleSubmit(userData: EditableUserData): void {
  setUserData([userData, mockUserData()[1]]);
  closeModal();
}

const $b = useBEM('SignUp')
</script>

<template lang="pug">
UserDataForm(
  :additional-buttons="[EButtons.ALREADY_REGISTERED]"
  :submit-button="EButtons.SIGN_UP"
  :class="$b()"
  @data-submit="handleSubmit"
  @additional-button="openSignIn()"
)
</template>

<style lang="scss">
.SignUp {
  max-width: 770px;
}
</style>
