<script setup lang="ts">
import type { EditableUserData } from '~/types/stores/user';
import { mockUserData } from '~/assets/mocks';
import { EButtons } from '~/components/base';
import UserDataForm from '../forms/UserDataForm.vue';


const { openSignIn, closeModal } = useModalDialog();
const { setUserData } = useUserStore();

function handleSubmit(userData: EditableUserData): void {
  setUserData([userData, mockUserData()[1]]);
  closeModal();
}
</script>

<template lang="pug">
UserDataForm(
  :additional-buttons="[EButtons.ALREADY_REGISTERED]"
  :submit-button="EButtons.SIGN_UP"
  @data-submit="handleSubmit"
  @additional-button="openSignIn()"
)
</template>

<style lang="scss">
.SignUp {
  @include flexColumn((gap: 16px));
  width: 770px;
  box-sizing: content-box;
  & input {
    height: 48px;
    width: 100%;
    box-sizing: border-box;
  }
  &__container {
    @include flex((gap: 16px));
    & > div:last-child {
      @include flexColumn((gap: 16px));
      width: 100%;
    }
  }
  &__avatar {
    min-width: 112px;
    min-height: 112px;
    background-color: vars.$colors-white;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.06);
  }
  &__textAreaContainer {
    @include relative;
    width: 100%;
    & textarea {
      box-sizing: border-box;
      height: 115px;
      resize: none;
    }
    & span {
      @include absolute((bottom: 10px, right: 12px));
      font-size: vars.$fs-xs;
    }
  }
  &__textButton {
    justify-content: flex-start;
  }
}
</style>
