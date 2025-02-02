<script setup lang="ts">
type Props = {
  isInverted?: boolean;
  options: SelectOption[];
};

const {
  options,
  isInverted,
} = defineProps<Props>();

const selectedValue = defineModel<string | null>({ default: null });

const $b = useBEM('BaseSelectButtons');
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
.BaseSelectButtons {
  @include flex((gap: var(--gap, #{vars.$gaps-g16})));
  overflow: scroll;
  &--inverted {
    --backgroundColor: #{vars.$colors-black};
    --hoverBackgroundColor: #{vars.$colors-white};
    --borderColor: #{vars.$colors-white};
    --color: #{vars.$colors-white};
    --hoverColor: #{vars.$colors-black};
    --checkedBackgroundColor: #{vars.$colors-white};
    --checkedBorderColor: #{vars.$colors-white};
    --checkedColor: #{vars.$colors-black};
  }
  & .p-togglebutton {
    @include flex((flex-grow: 1));
    --p-togglebutton-background: var(--backgroundColor, transparent);
    --p-togglebutton-hover-background: var(--hoverBackgroundColor, #{vars.$colors-black});
    --p-togglebutton-border-color: var(--borderColor, #{vars.$colors-black});
    --p-togglebutton-color: var(--color, #{vars.$colors-black});
    --p-togglebutton-hover-color: var(--hoverColor, #{vars.$colors-white});
    --p-togglebutton-checked-background: var(--checkedBackgroundColor, #{vars.$colors-black});
    --p-togglebutton-checked-border-color: var(--checkedBorderColor, #{vars.$colors-black});
    --p-togglebutton-checked-color: var(--checkedColor, #{vars.$colors-white});
    
    min-width: var(--toggleButtonMinWidth, unset);
    border-radius: var(--borderRadius, #{vars.$br-s});
    border-width: var(--borderWidth, 3px);
    font-size: var(--fontSize, #{vars.$fs-static-m});

    &::before {
      content: none;
    }
  }
}

@include mobile {
  .BaseSelectButtons {
    --gap: #{vars.$gaps-g12};
    --borderRadius: #{vars.$br-x2s};
    --borderWidth: 2px;
    --fontSize: #{vars.$fs-static-xs};
  }
}
</style>
