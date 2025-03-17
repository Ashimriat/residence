<script setup lang="ts">
import { EIcons } from '~/constants/components';


type Props = {
  placeholder: string;
  isDisabled?: boolean;
};

const { placeholder, isDisabled } = defineProps<Props>();

const value = defineModel<string>({ required: true });

const $b = useBEM('RzdSearch');
</script>

<template lang="pug">
PIconField(:pt:root:class="$b()")
  PInputIcon(:pt:root:class="$b('searchIconContainer')")
    RzdIcon(:type="EIcons.SEARCH")
  PInputText(
    v-model="value"
    :disabled="isDisabled"
    :placeholder="placeholder"
    :pt:root:class="$b('searchInput')"
  )
</template>

<style lang="scss">
.RzdSearch {
  --p-inputtext-border-radius: #{vars.$br-s};
  --p-inputtext-focus-border-color: none;
  --p-icon-size: 24px;
  --p-form-field-padding-x: 15px;
  max-width: var(--searchMaxWidth);
  height: 48px;
  border-radius: vars.$br-s;
  &__searchIconContainer {
    height: 24px;
  }
  &__searchInput {
    @include fullsize;
    font-size: var(--staticFontSize-S-XS);
    background-color: vars.$colors-white;
    &:disabled {
      opacity: 0.5;
    }
  }
}

@include mobile {
  .RzdSearch {
    --p-form-field-padding-x: 10px;
  }
}
</style>
