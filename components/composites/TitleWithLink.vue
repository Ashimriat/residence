<script setup lang="ts">
import { EIcons, EIconsSizes } from '~/components/base';

type Props = {
  title: string;
  link: string;
};

const { title, link } = defineProps<Props>();

const $b = useBem();
</script>

<template lang="pug">
div(:class="$b()")
  slot
  NuxtLink(
    :to="link"
    :class="$b('linkedTitle')"
  )
    span
      | {{ title }}
    BaseIcon(
      :type="EIcons.ARROW_UP_RIGHT"
      :size="EIconsSizes.S"
    )
</template>

<style lang="scss">
.TitleWithLink {
  @include flex((justify-content: space-between, align-items: center));
  &__linkedTitle {
    @include flex((gap: 4px));
    font-size: 12px;
    cursor: pointer;
    & span {
      text-decoration: underline;
      font-weight: vars.$fw-bold;
    }
  }
}
</style>
