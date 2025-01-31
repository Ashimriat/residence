<script setup lang="ts">
import { mockRatingsTableData } from '~/assets/mocks';
import { OPTIONS } from './constants/rating';
import { EButtons } from '~/components/base';


const activeType = ref<string>(OPTIONS[0].value);

const tableData = mockRatingsTableData(500);

const { isDesktop } = useDevice();

const { isAdmin } = storeToRefs(useUserStore());

const { page, itemsAmount, displayedItems } = usePagination(tableData, 10);

const $b = useBEM('RatingPage');

function finishSeason(): void {

}

watch(activeType, () => {
  page.value = 1;
})
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('topContainer', { admin: isAdmin })")
    h1(:class="$b('pageHeader')")
      | Рейтинг - Сезон 1
    BaseButton(
      v-if="isAdmin"
      :type="EButtons.FINISH_SEASON"
      @click="finishSeason"
    )
  BaseSelectButtons(
    v-model="activeType"
    is-inverted
    :options="OPTIONS"
    :class="$b('gameSelector')"
  )
  PDataTable(
    :value="displayedItems"
    :pt:root:class="$b('table')"
    :pt:table-container:class="$b('tableContainer')"
  )
    PColumn(
      field="position"
      header="#"
      :body-class="$b('tableBodyCell')"
      :header-class="$b('tableHeaderCell')"
    )
    PColumn(
      field="userName"
      header="Имя"
      :body-class="$b('tableBodyCell')"
      :header-class="$b('tableHeaderCell')"
    )
      template(#body="{ data: { user: { name, avatar } } }")
        div(:class="$b('userData')")
          PAvatar(
            :image="avatar"
            label="UI"
            shape="circle"
          )
          span
            | {{ name }}
    PColumn(
      field="rating"
      header="Рейтинг"
      :body-class="$b('tableBodyCell')"
      :header-class="$b('tableHeaderCell')"
    )
    PColumn(
      v-if="isDesktop"
      field="statistics"
      header="Статистика (поб/пор)"
      :body-class="$b('tableBodyCell')"
      :header-class="$b('tableHeaderCell')"
    )
      template(#body="{ data: { statistics: { wins, losses } } }")
        | {{ `${wins}/${losses}` }}
  BasePagination(
    v-model:page="page"
    :amount-on-page="10"
    :items-amount="itemsAmount"
  )
</template>

<style lang="scss">
.RatingPage {
  @include centeredFlexColumn((gap: vars.$gaps-g48));
  &__topContainer {
    @include flex((
      flex-direction: var(--topContainerFlexDirection, row),
      justify-content: var(--topContainerJustify, center),
      align-items: center,
      gap: vars.$gaps-g12,
    ));
    width: 100%;
    &--admin {
      --topContainerJustify: space-between;
    }
  }
  &__gameSelector {
    --toggleButtonMinWidth: 19%;
    width: 100%;
  } 
  &__table {
    width: 100%;
    table-layout: fixed;
  }
  &__tableContainer {
    border-radius: vars.$br-s;
  }
  &__tableHeaderCell {
    font-size: var(--staticFontSize-S-XS);
    font-weight: vars.$fw-bold;
    color: vars.$colors-greyMuted;
    height: var(--headerCellHeight, 64px);
    &:first-of-type {
      width: 5%;
    }
    &:not(&:first-of-type) {
      width: calc(95% / var(--columnsAmount, 3));
    }
  }
  &__tableBodyCell {
    font-weight: vars.$fw-bold;
    font-size: var(--staticFontSize-M-S);
  }
  &__userData {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g12,
    ));
    --avatarSize: 28px;
    --avatarLabelFontSize: #{vars.$fs-static-xs};
    border: var(--userDataBorder, 3px solid #{vars.$colors-black});
    border-radius: vars.$br-s;
    padding: var(--userDataPadding, 10px 12px);
    height: 48px;
    width: fit-content;
    & > span {
      font-weight: vars.$fw-heavy;
      font-size: var(--staticFontSize-M-S);
    }
  }
}

@include mobile {
  .RatingPage {
    --topContainerFlexDirection: column;
    --userDataBorder: none;
    --userDataPadding: 0;
    --columnsAmount: 2;
    --headerCellHeight: 42px;
  }
}
</style>
