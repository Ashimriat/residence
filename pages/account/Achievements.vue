<script setup lang="ts">
import { mockAchievementsList } from '~assets/mocks';

const { isMobile } = useDevice();
const itemsAmount = isMobile ? 9 : 8;
const itemsInRowAmount = isMobile ? 3 : 4;


const $b = useBem('Achievements');

</script>

<template lang="pug">
div(:class="$b()")
  h1(:class="$b('title')")
    | Достижения
  AchievementsList(
    :list="mockAchievementsList(itemsAmount)"
    :items-in-row="itemsInRowAmount"
  )
  h4(:class="$b('subtitle')")
    | Предстоит открыть
  AchievementsList(
    :list="mockAchievementsList(itemsAmount, false)"
    :items-in-row="itemsInRowAmount"
  )
</template>

<style lang="scss">
.Achievements {
  @include flexColumn((
    align-items: center,
    gap: vars.$gaps-l,
  ));
  &__title {
    text-align: center;
  }
  &__subtitle {
    text-align: left;
  }
}
</style>
