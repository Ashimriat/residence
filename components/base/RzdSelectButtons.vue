<script setup lang="ts">
export type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  isInverted?: boolean;
  options: SelectOption[];
};


const {
  options,
  isInverted,
} = defineProps<Props>();

const selectedValue = defineModel<string | null>({ default: null });

const $b = useBEM('RzdSelectButtons');
</script>

<template lang="pug">
PSelectButton(
  v-model="selectedValue"
  option-label="label"
  option-value="value"
  :options="options"
  :allow-empty="false"
  :class="$b({ inverted: isInverted })"
)
</template>

<style lang="scss">
.RzdSelectButtons {
  @include flex((gap: var(--gap, #{vars.$gaps-g16})));
  width: 100%;
  overflow: auto;

  --p-togglebutton-background: #{vars.$colors-white};
  --p-togglebutton-hover-background: #{vars.$colors-black};
  --p-togglebutton-checked-background: #{vars.$colors-black};
  --p-togglebutton-content-checked-background: #{vars.$colors-black};

  --p-togglebutton-border-color: #{vars.$colors-black};
  --p-togglebutton-checked-border-color: #{vars.$colors-black};

  --p-togglebutton-color: #{vars.$colors-black};
  --p-togglebutton-hover-color: #{vars.$colors-white};
  --p-togglebutton-checked-color: #{vars.$colors-white};

  &--inverted {
    --p-togglebutton-background: #{vars.$colors-black};
    --p-togglebutton-hover-background: #{vars.$colors-white};
    --p-togglebutton-checked-background: #{vars.$colors-white};
    --p-togglebutton-content-checked-background: #{vars.$colors-white};

    --p-togglebutton-border-color: #{vars.$colors-white};
    --p-togglebutton-checked-border-color: #{vars.$colors-white};

    --p-togglebutton-color: #{vars.$colors-white};
    --p-togglebutton-hover-color: #{vars.$colors-black};
    --p-togglebutton-checked-color: #{vars.$colors-black};
  }

  & .p-togglebutton {
    flex-grow: 1;
    min-width: fit-content;
    border-width: var(--borderWidth, 3px);
    border-radius: var(--borderRadius, #{vars.$br-s});

    &::before {
      content: none;
    }
  }

  & .p-togglebutton-label {
    font: vars.$fonts-buttonL;
  }
}

@include mobile {
  .RzdSelectButtons {
    --gap: #{vars.$gaps-g12};
    --borderRadius: #{vars.$br-x2s};
    --borderWidth: 2px;

    & .p-togglebutton-label {
      font: vars.$fonts-buttonS;
    }
  }
}
</style>
