<script setup lang="ts">
import { mockUserData } from '~/assets/mocks';
import { EButtons } from '~/components/constants';


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
  @include flexColumn((gap: vars.$gaps-g16));
  width: 770px;
  box-sizing: content-box;
  & input {
    height: 48px;
    width: 100%;
    box-sizing: border-box;
  }
  &__container {
    @include flex((gap: vars.$gaps-g16));
    & > div:last-child {
      @include flexColumn((gap: vars.$gaps-g16));
      width: 100%;
    }
  }
  &__avatar {
    min-width: 112px;
    min-height: 112px;
    background-color: vars.$colors-white;
    box-shadow: vars.$shadows-base;
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
