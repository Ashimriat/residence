<script setup lang="ts">
const { getModalData } = useModalDialog<AchievementData>();
const { title, description } = getModalData();

const $b = useBEM('AchievementDetails');
</script>

<template lang="pug">
div(:class="$b()")
  div
    AchievementFigure(:class="$b('figure')")
    span(:class="$b('title')")
      | {{ title }}
  span(:class="$b('description')")
    | {{ description }}
</template>

<style lang="scss">
#modal_achievementDetails {
  &.p-dialog {
    align-items: stretch;
    min-width: 300px;
    max-width: 400px;
    border: none;
  }

  & .p-dialog-content {
    background-color: vars.$colors-black;
    border-radius: vars.$br-s;
    padding: 0;
    min-height: 100%;
  }

  & .p-dialog-header .p-button {
    width: 30px;
    height: 30px;
    border-color: vars.$colors-white;
    & svg {
      color: vars.$colors-white;
    }
  }
}

.AchievementDetails {
  @include centeredFlexColumn((gap: vars.$gaps-g12));
  padding: 12px;
  & > div {
    @include centeredFlex((gap: vars.$gaps-g8));
  }
  &__figure {
    width: 68px;
    height: 68px;
  }
  &__title {
    color: vars.$colors-beige;
  }
  &__description {
    color: vars.$colors-white;
    text-align: center;
    font-size: 16px;
  }
}
</style>