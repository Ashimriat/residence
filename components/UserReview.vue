<script setup lang="ts">
type Props = {
  username: string;
  avatar?: string;
  game: string;
  text: string;
};

const {
  username, avatar, game, text
} = defineProps<Props>();


const $b = useBEM('UserReview');
</script>

<template lang="pug">
div(:class="$b()")
  UserData(:avatar="avatar")
    h4(:class="$b('authorGame')")
      span
        | {{ `${username} - ` }}
      span
        | {{ game }}
  div(:class="$b('reviewText')")
    | {{ text }}
</template>

<style lang="scss">
.UserReview {
  @include flexColumn((gap: 16px));
  width: 100%;
  max-width: 400px;
  min-height: 86px;
  padding: 20px;
  border-radius: vars.$br-l;
  background-color: vars.$colors-white;
  box-shadow: vars.$shadows-base;
  --userDataMaxWidth: none;
  &__topContainer {
    @include flex((
      align-items: center,
      gap: 12px,
    ));
  }
  &__authorGame {
    font-size: vars.$fs-l;
    & > span:last-of-type {
      color: vars.$colors-beige;
    }
  }
  &__reviewText {
    color: vars.$colors-greyDark;
    font-size: vars.$fs-static-s;
  }
}

@include mobile {
  .UserReview {
    border-radius: vars.$br-s;
    max-width: unset;
    &__reviewText {
      font-size: vars.$fs-static-xs;
    }
  }
}
</style>
