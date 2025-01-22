<script setup lang="ts">
type Props = {
  isInverted?: boolean;
  options: SelectOption[];
};

const {
  options,
  isInverted = false,
} = defineProps<Props>();

const $b = useBEM('BaseSelectButtons');
</script>

<template lang="pug">
PSelectButton(
  :options="options"
  option-label="label"
  :allow-empty="false"
  :class="$b({ inverted: isInverted })"
)
</template>

<style lang="scss">
.BaseSelectButtons {
  &--inverted {
    --backgroundColor: transparent;
    --hoverBackgroundColor: #{vars.$colors-black};
    --borderColor: #{vars.$colors-black};
    --color: #{vars.$colors-black};
    --hoverColor: #{vars.$colors-white};
    --checkedBackgroundColor: #{vars.$colors-black};
    --checkedBorderColor: #{vars.$colors-black};
    --checkedColor: #{vars.$colors-white};
  }
}
</style>
