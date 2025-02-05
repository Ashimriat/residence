<script setup lang="ts">
type Props = {
  options: RadioOption[];
  isResettable?: boolean;
};

const { options, isResettable } = defineProps<Props>();
const selectedOption = defineModel<string>({ required: true });

const optionsAmount = computed<number>(() => options.length);

function checkForReset(value: string): void {
  if (!isResettable || selectedOption.value !== value) return;
  selectedOption.value = '';
}

const $b = useBEM('BaseRadios');
</script>

<template lang="pug">
div(:class="$b()")
  div(
    v-for="({ label, value }) in options"
    :key="value"
    :class="$b('option')"
    @click.stop="checkForReset(value)"
  )
    PRadioButton(
      v-model="selectedOption"
      :value="value"
    )
    label(:class="$b('label')")
      | {{ label }}
</template>

<style lang="scss">
$border: 1px solid vars.$colors-black;

.BaseRadios {
  @include flex((
    flex-direction: var(--radiosFlexDirection, row)
  ));
  border: 2px solid vars.$colors-black;
  border-radius: 12px;
  &__option {
    @include flex((gap: 12px));
    padding: 10px;
    flex-basis: calc(100% / v-bind(optionsAmount));
    &:not(&:last-of-type) {
      border-right: var(--radiosOptionBorderRight, #{$border});
      border-bottom: var(--radiosOptionBorderBottom, none);
    }
  }
  &__label {
    color: vars.$colors-black;
    font-weight: vars.$fw-midHeavy;
    font-size: var(--staticFontSize-S-XS);
  }
}

@include mobile {
  .BaseRadios {
    --radiosFlexDirection: column;
    --radiosOptionBorderRight: none;
    --radiosOptionBorderBottom: #{$border};
  }
}
</style>
