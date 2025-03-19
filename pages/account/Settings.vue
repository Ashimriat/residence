<script setup lang="ts">
import { EButtons } from '~/components/constants';
import { mockUserData } from '~/assets/mocks';


const { setUserData } = useUserStore();

const $b = useBEM('SettingsPage');

function handleSubmit(data: EditableUserData): void {
  setUserData([data, mockUserData()[1]]);
}
</script>

<template lang="pug">
div(:class="$b()")
  UserDataForm(
    without-sex
    :submit-button="EButtons.SAVE_CHANGES"
    @data-submit="handleSubmit"
  )
</template>

<style lang="scss">
.SettingsPage {
  @include centeredFlex;
}
</style>
