<script setup lang="ts">
import { mockRatingsTableData } from '~/__mocks__';
import { EButtons } from '~/components/constants';
import { OPTIONS } from './constants';


const activeType = ref<string>(OPTIONS[0].value);

const tableData = mockRatingsTableData(500);

const { isDesktop } = useDevice();

const { isAdmin } = storeToRefs(useUserStore());

const { page, itemsAmount, displayedItems } = usePagination(tableData, 10);

const $b = useBEM('RatingPage');

function finishSeason(): void {

}

watch(activeType, () => {
  page.value = 0;
})
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('topContainer', { admin: false && isAdmin })")
    h1(:class="$b('pageHeader')")
      | Рейтинг - Сезон 1
    RzdButton(
      v-if="false && isAdmin"
      :type="EButtons.FINISH_SEASON"
      @click="finishSeason"
    )
  RzdSelectButtons(
    v-model="activeType"
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
        UserData(
          :avatar
          :name
        )
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
  RzdPagination(
    v-model:page="page"
    :amount-on-page="10"
    :items-amount="itemsAmount"
  )
</template>

<style lang="scss">
.RatingPage {
  @include centered-flex-column((gap: vars.$gaps-g40));
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
  &__table {
    width: 100%;
    table-layout: fixed;

    --p-datatable-row-background: #{vars.$colors-white};
    --p-datatable-header-cell-background: #{vars.$colors-white};
    --p-datatable-header-cell-border-color: #{vars.$colors-greyLight};
    --p-datatable-body-cell-border-color: #{vars.$colors-greyLight};
  }
  &__tableContainer {
    border-radius: vars.$br-s;
  }
  &__tableBodyCell {
    font: vars.$fonts-textBoldM;
    color: vars.$colors-black;
  }
  &__tableHeaderCell {
    color: vars.$colors-greyMuted;
    height: var(--headerCellHeight, 64px);
    width: calc(95% / 3);
    &:first-of-type {
      width: 5%;
    }
    & * {
      font: vars.$fonts-textBoldM;
    }
  }
}

@include mobile {
  .RatingPage {
    --topContainerFlexDirection: column;
    --headerCellHeight: 42px;
  }
}
</style>
