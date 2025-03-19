<script setup lang="ts">
import { EIcons, EIconsSizes } from '~/components/constants';


type Props = {
  title: string;
  image?: string;
  participantsAmount?: number | null;
  headerSize: 'big' | 'small';
};

const {
  title,
  image,
  headerSize,
  participantsAmount = null,
} = defineProps<Props>();

const $b = useBEM('ClanDataHeader');
</script>

<template lang="pug">
div(:class="$b()")
  PAvatar(
    shape="circle"
    :image="image"
  )
  div(:class="$b('innerContainer')")
    component(:is="headerSize === 'big' ? 'h3' : 'h6'")
      | {{ title }}
    div(
      v-if="participantsAmount !== null"
      :class="$b('participants')"
    )
      RzdIcon(
        :class="$b('participantsIcon')"
        :size="EIconsSizes.S"
        :type="EIcons.USERS"
      )
      span
        | {{ participantsAmount }}
</template>

<style lang="scss">
.ClanDataHeader {
  @include flex((gap: 20px));
  --p-avatar-width: 64px;
  --p-avatar-height: 64px;
  --avatarBackground: #{vars.$colors-grey};
  &__innerContainer {
    @include flexColumn((justify-content: center));
  }
  &__participants {
    @include centeredFlex((gap: 4px));
    background-color: vars.$colors-greyDark;
    color: vars.$colors-white;
    border-radius: vars.$br-x2s;
    font-size: 12px;
    padding: 8px 6px;
  }
  &__participantsIcon {
    min-width: 14px;
    min-height: 14px;
    width: 14px;
    height: 14px;
    --fill: #{vars.$colors-white};
  }
}
</style>
