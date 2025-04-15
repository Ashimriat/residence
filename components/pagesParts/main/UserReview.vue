<script setup lang="ts">
type Props = {
  username: string;
  avatar?: string;
  game: string;
  text: string;
};


const {
  username, avatar, game, text,
} = defineProps<Props>();


const $b = useBEM('UserReview');
</script>

<template lang="pug">
div(:class="$b()")
  UserData(:avatar)
    h4(:class="$b('authorGame')")
      span
        | {{ `${username} - ` }}
      span(:class="$b('gameType')")
        | {{ game }}
  div(:class="$b('reviewText')")
    | {{ text }}
</template>

<style lang="scss">
.UserReview {
  @include flex-column((gap: vars.$gaps-g16));
  width: 100%;
  max-width: var(--reviewMaxWidth, 400px);
  min-height: 86px;
  padding: 20px;
  border-radius: var(--reviewBorderRadius, #{vars.$br-l});
  background-color: vars.$colors-white;
  box-shadow: vars.$shadows-base;
  &__topContainer {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g12,
    ));
  }
  &__gameType {
    color: vars.$colors-beige;
  }
  &__reviewText {
    color: vars.$colors-greyDark;
    font: var(--font-text-m);
  }
}

@include mobile {
  .UserReview {
    --reviewBorderRadius: #{vars.$br-s};
    --reviewMaxWidth: initial;
  }
}
</style>
