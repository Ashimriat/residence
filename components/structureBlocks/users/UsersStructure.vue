<script setup lang="ts">
import { type Props as RzdScrollPanelProps } from '~/components/base/RzdScrollPanel.vue'
import { EButtons } from '~/constants/components';


type Props = RzdScrollPanelProps & {
  users: Participant[];
  isMasters?: boolean;
  withExpel?: boolean;
  ownerId?: string;
  listOnly?: boolean;
};

type Emits = {
  expel: [userId: string];
  select: [userId: string];
};

const {
  users,
  // optional
  listOnly,
  isMasters,
  withExpel,
  ownerId = '',
  itemsInRow,
  gap,
} = defineProps<Props>();
const emit = defineEmits<Emits>(); 


const { providedData, checkIsClanOwner } = useUserStore();

const showList = defineModel<boolean>('showList', { default: true });
const selectedUser = defineModel<string>('selected', { default: null });

const isSelectableUser = computed<boolean>(() => selectedUser.value !== null);

const isClanOwner = checkIsClanOwner(ownerId);

function handleSelection(id: string): void {
  if (!isSelectableUser.value) return;
  selectedUser.value = id;
}

const $b = useBEM('UsersStructure');
</script>

<template lang="pug">
RzdCard(
  :preserve-subcontent="false"
  :class="$b({ list: listOnly, operatable: withExpel, selectable: isSelectableUser })"
)
  template(
    v-if="!listOnly"
    #subContent
  )
    div(:class="$b('structureDataContainer')")
      div(:class="$b('textsContainer')")
        slot(name="texts")
      div(:class="$b('buttonsBlock')")
        slot(name="buttons")
  template(
    v-if="showList"
    #content
  )
    RzdScrollPanel(
      :gap
      :items-in-row="itemsInRow"
      :class="$b('list')"
    )
      div(
        v-for="user of users"
        :key="user.id"
        :class="$b('participant', { selected: selectedUser === user.id })"
        @click="handleSelection(user.id)"
      )
        UserData(
          :avatar="user.avatar"
          :name="user.name"
          :is-linker="isMasters"
          :is-clan-owner="user.id === ownerId"
        )
        RzdButton(
          v-if="withExpel && isClanOwner && user.id !== providedData.id"
          :type="EButtons.EXPEL_PLAYER"
          :class="$b('expelButton')"
          @click="emit('expel', user.id)"
        )
</template>

<style lang="scss">
/**
  Exposed CSS vars

  --usersStructureHeight
  --usersStructureListPadding
  --usersStructureListHeight
  --usersStructureListContentPaddingBlockStart
  --usersStructureParticipantPadding
  --usersStructureParticipantWidth
*/
.UsersStructure {
  --cardBackgroundColor: #{vars.$colors-black};
  --cardMaxWidth: 100%;
  --cardContentWidth: 60%;
  --cardHeight: var(--usersStructureHeight, 100%);
  --cardSubcontentFlexBasis: 40%;
  --scrollPanelPadding: var(--usersStructureListPadding);
  --scrollPanelContentContainerPadding: 0;
  --scrollPanelItemWidth: var(--usersStructureParticipantWidth, inherit);
  --scrollPanelContentPaddingBlockStart: var(--usersStructureListContentPaddingBlockStart);

  --usersStructureHeight: 320px;

  &--list {
    --cardPadding: 0;
    --cardContentWidth: 100%;
    --cardSubcontentFlexBasis: 100%;
    --usersStructureHeight: inherit;
    --usersStructureListPadding: 0;
    --usersStructureParticipantPadding: 0;
  }

  &--operatable,
  &--selectable {
    --participantPointerEvents: all;
  }

  &__structureDataContainer {
    @include flexColumn((
      justify-content: space-between,
      flex: 40%,
      gap: vars.$gaps-g12
    ));

    height: 100%;
    padding: 14px;
  }

  &__textsContainer {
    @include flex((align-items: center, flex-wrap: wrap, gap: 12px));

    & h3,
    & span {
      color: vars.$colors-white;
    }

    & > span {
      flex: 100%;
    }
  }

  &__buttonsBlock {
    @include flex((align-items: center, gap: 8px));

    & button {
      --buttonLabelFontSize: #{vars.$fs-static-s};

      flex-grow: 1;
      height: 40px;
    }
  }

  &__participant {
    @include relative;
    @include flex((
      justify-content: var(--participantJustify, flex-start),
      align-items: center,
      gap: vars.$gaps-g8,
    ));
    @include transition(background-color);

    padding: var(--usersStructureParticipantPadding, 12px);
    pointer-events: var(--participantPointerEvents, none);
    cursor: pointer;
    border-radius: vars.$br-s;


    &:hover {
      --expelButtonOpacity: 1;

      & button {
        pointer-events: all;
      }
    }

    &:hover,
    &--selected {
      background-color: vars.$colors-greyLight;
    }

    &--selected {
      pointer-events: none;
    }
  }

  &__expelButton {
    @include absolute((right: 12px));
    @include transition(opacity);

    --p-button-border-radius: #{vars.$br-x2s};

    width: 30px;
    height: 30px;
    padding: 0;
    font-size: vars.$fs-static-xs;
    pointer-events: none;
    opacity: var(--expelButtonOpacity, 0);
  }

  &__list {
    height: var(--usersStructureListHeight, 100%);
  }
}

@include mobile {
  .UsersStructure {
    --participantJustify: space-between;
    --expelButtonOpacity: 1;
    --cardContentWidth: 100%;
    --usersStructureHeight: fit-content;
    --usersStructureListHeight: 220px;
    --usersStructureParticipantPadding: 0;
    --usersStructureListPadding: 20px 0 20px 12px;

    &--list {
      --usersStructureHeight: inherit;
      --usersStructureListHeight: inherit;
    }

    &__buttonsBlock {
      flex-wrap: wrap;

      & button {
        justify-content: center;

        &:nth-last-child(2) {
          flex-grow: 0;
          width: 40px;
        }
      }
    }

    &__expelButton {
      position: static;
      width: unset;
      height: unset;
      padding: 8px 10px;
    }
  }
}
</style>
