<script setup lang="ts">
import type { EditableUserData } from '~/types/stores/user';
import { EButtons } from '~/components/base';
import { mockUserData } from '~/assets/mocks';


const { setUserData } = useUserStore();

const $b = useBem('SettingsPage');

function handleSubmit(data: EditableUserData): void {
  setUserData([data, mockUserData()[1]]);
}
</script>

<template lang="pug">
section(:class="$b()")
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
