<script setup lang="ts">
type Props = {
  avatar?: string;
  name?: string;
  isLinker?: boolean;
  isClanOwner?: boolean;
};


const { name, avatar, isLinker, isClanOwner } = defineProps<Props>();

const $b = useBEM('UserData');
</script>

<template lang="pug">
div(:class="$b({ linker: isLinker, owner: isClanOwner })")
  RzdAvatar(
    label="UI"
    shape="circle"
    :image="avatar"
  )
  slot
    span(:class="$b('name')")
      | {{ name }}
</template>

<style lang="scss">
.UserData {
  @include flex((align-items: center, gap: vars.$gaps-g12));
  width: fit-content;
  &--linker {
    --rzd-avatar-size: 28px;
    --rzd-avatar-label-fontsize: #{vars.$fs-xs};
    border: var(--linkerBorderWidth, 3px) solid #{vars.$colors-black};
    padding: var(--linkerPadding, 12px);
    border-radius: vars.$br-s; 
    height: var(--linkerHeight, 48px);
    width: 100%;
  }
  &--owner > div {
    @include relative;
    @include with-pseudo-before((
      width: 47px,
      height: 47px,
      border-radius: 50%,
      border: 3px solid vars.$colors-beige,
    ));
    @include with-pseudo-after((
      top: -13px,
      width: 44px,
      height: 88%,
      background-color: vars.$colors-beige,
      aspect-ratio: 1,
      clip-path: vars.$figures-crown,
    ));
    border: 1px solid vars.$colors-beige;
  }
  &__name {
    font-weight: vars.$fw-heavy;
    font-size: var(--static-fontSize-m-s);
  }
}

@include mobile {
  .UserData {
    --linkerBorderWidth: 2px;
    --linkerPadding: 6px;
    --linkerHeight: 40px;
  }
}
</style>
