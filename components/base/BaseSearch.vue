<script setup lang="ts">
import { EIcons } from './constants/icon';


type Props = {
  placeholder: string;
};

const { placeholder } = defineProps<Props>();

const value = defineModel<string>({ required: true });

const $b = useBem('BaseSearch');
</script>

<template lang="pug">
PInputGroup(:class="$b()")
  PInputText(
    v-model="value"
    :class="$b('searchInput')"
    :placeholder="placeholder"
  )
  PInputGroupAddon(:class="$b('searchIconContainer')")
    BaseIcon(:type="EIcons.SEARCH")
</template>

<style lang="scss">
.BaseSearch {
  max-width: var(--searchMaxWidth);
  &__searchIconContainer {
    order: 0;
    padding: 11px;
    border-start-start-radius: vars.$br-s;
    border-end-start-radius: vars.$br-s;
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-right: none;
  }
  &__searchInput {
    font-size: 14px;
    order: 1;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    border-start-end-radius: vars.$br-s;
    border-end-end-radius: vars.$br-s;
  }
}
</style>
