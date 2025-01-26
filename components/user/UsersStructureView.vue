<script setup lang="ts">
const $b = useBEM('UsersStructureView');
</script>

<template lang="pug">
BaseCard(
  orientation="row"
  :class="$b()"
)
  template(#subContent)
    div(:class="$b('structureDataContainer')")
      div(:class="$b('textsContainer')")
        slot(name="texts")
      div(:class="$b('buttonsBlock')")
        slot(name="buttons")
  template(#content)
    slot(name="list")
</template>

<style lang="scss">
.UsersStructureView {
  --cardBackgroundColor: #{vars.$colors-black};
  --cardMaxWidth: 100%;
  --cardContentWidth: 60%;
  --cardHeight: var(--usersStructureHeight, 340px);
  &__structureDataContainer {
    @include flexColumn((
      justify-content: space-between,
      flex: 40%,
      gap: vars.$gaps-g12
    ));
    padding: 14px;
  }
  &__textsContainer {
    @include flex((align-items: center, flex-wrap: wrap, gap: 12px));
    & h3,
    & span {
      color: vars.$colors-white;
    }
    & span {
      flex: 100%;
    }
  }
  &__buttonsBlock {
    @include flex((align-items: center, gap: 8px));
    height: 40px;
    & button {
      --buttonLabelFontSize: #{vars.$fs-static-s};
      height: 100%;
      &:not(&:last-child) {
        flex-grow: 1;
      }
    }
  }
}
</style>
