<script setup lang="ts">
type Props = {
  list: AchievementData[];
  itemsInRow?: number;
};

const {
  list,
  itemsInRow = 3,
} = defineProps<Props>();

const { seeAchievement } = useModalDialog();
const $b = useBEM('AchievementsList');
</script>

<template lang="pug">
div(:class="$b()")
  div(
    v-for="(data, i) of list"
    :key="`achievement_${i}`"
    :class="$b('achievement', { unobtained: !data.isObtained })"
  )
    AchievementFigure
    span(
      :class="$b('title')"
      @click="seeAchievement(data)"
    )
      | {{ data.title }}
</template>

<style lang="scss">
$figureWidth: 100px;
$gap: 2rem;

.AchievementsList {
  @include flex((flex-wrap: wrap));
  gap: $gap;
  max-width: calc(v-bind(itemsInRow) * $figureWidth + $gap * (v-bind(itemsInRow) - 1));
  &__achievement {
    @include centeredFlexColumn((gap: 8px));
    width: 100px;
    --color: #{vars.$colors-beige};
    --cursor: pointer;
    --pointerEvents: default;
    &--unobtained {
      --backgroundColor: #{vars.$colors-greyMuted};
      --color: #{vars.$colors-greyMuted};
      --cursor: default;
      --pointerEvents: none;
    }
  }
  &__title {
    cursor: var(--cursor);
    color: var(--color);
    pointer-events: var(--pointerEvents);
    text-decoration: underline;
    font-size: vars.$fs-s;
    font-weight: vars.$fw-midHeavy;
  }
}
</style>
