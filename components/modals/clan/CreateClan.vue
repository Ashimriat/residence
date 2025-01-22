<script setup lang="ts">
import { EButtons, EIcons, EIconsSizes } from '~/components/base';

const data = ref<ClanCreationData>({
  title: '',
  description: '',
  image: undefined,
});

const { showClanCreated } = useModalDialog();

const $b = useBEM('CreateClan');
</script>

<template lang="pug">
div(:class="$b()")
  PInputText(
    :class="$b('input')"
    placeholder="Название клана"
  )
  PAvatar(
    :class="$b('avatar')"
    :image="data.image"
  )
    template(
      v-if="!data.image"
      #icon
    )
      BaseIcon(
        :type="EIcons.USER"
        :size="EIconsSizes.L"
      )
  BaseTextarea(
    v-model="data.description"
    :class="$b('textarea')"
    placeholder="Описание клана"
    :max-length="40"
  )
  BaseButton(
    :class="$b('button')"
    :type="EButtons.CREATE_CLAN"
    @click="showClanCreated"
  )
</template>

<style lang="scss">
#modal_clanCreated {
  .p-dialog-header {
    padding: 20px 20px 0;
  }
  .p-dialog-content {
    padding: 20px;
  }
}
.CreateClan {
  @include flex((flex-wrap: wrap, gap: 14px));
  max-width: 530px;
  &__input {
    flex-basis: 100%;
  }
  &__avatar {
    min-width: 120px;
    min-height: 120px;
    background-color: vars.$colors-white;
  }
  &__textarea {
    flex: 1 0;
  }
  &__button {
    width: 100%;
    --buttonLabelFontSize: #{vars.$fs-static-s};
  }
}
</style>
