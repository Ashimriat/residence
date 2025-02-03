<script setup lang="ts">
import { type Props, type Emits } from '~/components/user/UsersList.vue';


const props = defineProps<Omit<Props, 'itemsInRow'>>();
const emit = defineEmits<Emits>(); 

const { isMobile } = useDevice();

const $b = useBEM('UsersStructureView');

const showList = defineModel<boolean>('showList', { default: true });
</script>

<template lang="pug">
BaseCard(:class="$b()")
  template(#subContent)
    div(:class="$b('structureDataContainer')")
      div(:class="$b('textsContainer')")
        slot(name="texts")
      div(:class="$b('buttonsBlock')")
        slot(name="buttons")
  template(
    v-if="showList"
    #content
  )
    UsersList(
      v-bind="props"
      :gap="isMobile ? { x: 0, y: 16 } : undefined"
      :class="$b('list')"
      @expel="emit('expel', $event)"
    )
</template>

<style lang="scss">
.UsersStructureView {
  --cardBackgroundColor: #{vars.$colors-black};
  --cardMaxWidth: 100%;
  --cardContentWidth: 60%;
  --cardHeight: var(--usersStructureHeight, 340px);
  --subcontentFlexBasis: 43%;
  --scrollPanelContentPaddingBlockTop: 12px;
  &__structureDataContainer {
    @include flexColumn((
      justify-content: space-between,
      flex: 40%,
      gap: vars.$gaps-g12
    ));
    padding: 14px;
    height: 100%;
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
    & button {
      --buttonLabelFontSize: #{vars.$fs-static-s};
      height: 40px;
      flex-grow: 1;
      &:last-child {
        flex-grow: 0;
      }
    }
  }
  &__list {
    height: var(--listHeight, 100%);
  }
}

@include mobile {
  .UsersStructureView {
    --usersStructureHeight: fit-content;
    --cardContentWidth: 100%;
    --scrollPanelItemWidth: 100%;
    --scrollPanelPadding: 15px;
    --userListParticipantJustify: space-between;
    --listHeight: 220px;
    &__buttonsBlock {
      flex-wrap: wrap;
      & button {
        justify-content: center;
        &:nth-last-child(2) {
          width: 40px;
          flex-grow: 0;
        }
      }
    }
  }
}
</style>
