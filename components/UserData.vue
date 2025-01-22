<script setup lang="ts">
/** Local Types & Variables */
type Props = {
  avatar?: string;
  name?: string;
  isClanOwner?: boolean;
};

/** Props & Emits */
const { name, avatar, isClanOwner } = defineProps<Props>();

const $b = useBEM('UserData');
</script>

<template lang="pug">
div(:class="$b({ king: isClanOwner })")
  PAvatar(
    label="UI"
    shape="circle"
    :image="avatar"
  )
  slot
    span
      | {{ name }}
</template>

<style lang="scss">
.UserData {
  @include flex((align-items: center, gap: vars.$gaps-s));
  max-width: var(--userDataMaxWidth, 139px);
  &--king > div {
    @include relative;
    @include withPseudoBefore((
      width: 47px,
      height: 47px,
      border-radius: 50%,
      border: 3px solid vars.$colors-beige,
    ));
    @include withPseudoAfter((
      top: -15px,
      width: 44px,
      background-color: vars.$colors-beige,
      aspect-ratio: 1,
      clip-path: vars.$figures-crown,
    ));
    border: 1px solid vars.$colors-beige;
  }
  & span {
    font-weight: vars.$fw-bold;
  }
}
</style>
