<script setup lang="ts">
export type RadioOption<T = string> = {
  label: string;
  value: T;
};

type Props = {
  options: RadioOption[];
  isResettable?: boolean;
};


const { options, isResettable } = defineProps<Props>();
const selectedOption = defineModel<string>({ required: true });

const optionsAmount = computed<number>(() => options.length);

function setValue(value: string): void {
  const newValue = value === selectedOption.value ? '' : value;
  if (!newValue && !isResettable) return;
  selectedOption.value = newValue;
}

const $b = useBEM('RzdRadios');
</script>

<template lang="pug">
div(:class="$b()")
  div(
    v-for="({ label, value }) in options"
    :key="value"
    :class="$b('option')"
    @click.stop="setValue(value)"
  )
    PRadioButton(
      v-model="selectedOption"
      :pt:root:class="$b('radio')"
      :value="value"
    )
    label(:class="$b('label')")
      | {{ label }}
</template>

<style lang="scss">
$border: 1px solid vars.$colors-black;

.RzdRadios {
  @include flex((
    flex-direction: var(--radiosFlexDirection, row)
  ));

  --radioSize: 24px;

  border: 2px solid vars.$colors-black;
  border-radius: 12px;

  &__option {
    @include flex((align-items: center, gap: 12px));

    flex-basis: calc(100% / v-bind(optionsAmount));
    padding: 10px;
    cursor: pointer;

    &:not(&:last-of-type) {
      border-right: var(--radiosOptionBorderRight, #{$border});
      border-bottom: var(--radiosOptionBorderBottom, none);
    }
  }

  &__label {
    font-size: vars.$fs-static-s;
    font-weight: vars.$fw-midHeavy;
    color: vars.$colors-black;
    cursor: pointer;
  }

  &__radio {
    --p-radiobutton-width: var(--radioSize);
    --p-radiobutton-height: var(--radioSize);
    --p-radiobutton-icon-size: calc(var(--radioSize) / 2);
    --p-radiobutton-background: transparent;
    --p-radiobutton-border-color: #{vars.$colors-black};
    --p-radiobutton-checked-border-color: #{vars.$colors-beige};
    --p-radiobutton-checked-background: #{vars.$colors-beige};
    --p-radiobutton-checked-hover-border-color: #{vars.$colors-beige};
    --p-radiobutton-checked-focus-border-color: #{vars.$colors-beige};
    --p-radiobutton-focus-ring-color: #{vars.$colors-beige};
    --p-radiobutton-checked-hover-background: #{vars.$colors-beige};

    & .p-radiobutton-box {
      border-width: 2px;
    }
  }
}

@include mobile {
  .RzdRadios {
    --radiosFlexDirection: column;
    --radiosOptionBorderRight: none;
    --radiosOptionBorderBottom: #{$border};
    --radioSize: 16px;
  }
}
</style>
