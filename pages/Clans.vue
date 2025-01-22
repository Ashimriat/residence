<script setup lang="ts">
import { mockClans } from '~/assets/mocks';
import { EButtons, EIcons } from '~/components/base';


const AMOUNT_ON_PAGE = 4;
const clans = mockClans(40, 20);

const search = ref<string>('');

const { providedData } = useUserStore();
const { page, displayedItems } = usePagination(clans, AMOUNT_ON_PAGE);
const { createClan, showClanRequestSent, seeClanParticipants } = useModalDialog();

const $b = useBEM('ClansPage');
</script>

<template lang="pug">
div(:class="$b()")
  h1(:class="$b('title')")
    | Кланы
  BaseButton(
    v-if="!providedData.clans.owner.length"
    :class="$b('createClanButton')"
    :type="EButtons.CREATE_OWN_CLAN"
    @click="createClan"
  )
  div(
    v-else
    :class="$b('userClans')"
  )
    h3
      | Ваши кланы
    ClanView(
      v-for="data of mockClans(1, 20, false)"
      :key="data.id"
      :is-clan-owner="true"
      :data="data"
    )   
  div(:class="$b('topContainer')")
    BaseSearch(     
      v-model="search"
      :class="$b('search')"
      placeholder="Название клана"
    )
    BaseButton(
      v-if="providedData.clans.owner.length"
      :class="$b('createClanButton')"
      :type="EButtons.CREATE_CLAN"
      @click="createClan"
    )
  div(:class="$b('clansList')")
    div(
      v-for="clan of displayedItems"
      :key="clan.id"
      :class="$b('clan')"
    )
      div(:class="$b('upperContainer')")
        ClanDataHeader(
          header-size="small"
          :title="clan.title"
          :participants-amount="clan.participants.length"
        )
        h6
          | {{ `#${clan.rating}` }}
      span(:class="$b('description')")
          | {{ clan.description }}
      div(:class="$b('buttonsContainer')")
        BaseButton(
          :type="EButtons.ENTER_CLAN"
          @click="showClanRequestSent"
        )
        BaseButton(
          :type="EButtons.CLAN_PARTICIPANTS"
          @click="seeClanParticipants(clan)"
        )
  BasePagination(
    v-model:page="page"
    :amount-on-page="AMOUNT_ON_PAGE"
    :items-amount="clans.length"
  )
</template>

<style lang="scss">
.ClansPage {
  @include flexColumn((gap: vars.$gaps-xl));
  --searchMaxWidth: 360px;
  &__title {
    text-align: center;
  }
  &__userClans {
    @include flexColumn((gap: 2.4rem));
  }
  &__topContainer {
    @include flex((justify-content: space-between));
  }
  &__createClanButton {
    width: 100%;
    --buttonMaxWidth: 250px;
    --buttonLabelFontSize: #{vars.$fs-static-m};
  }
  &__search {
    --searchMaxWidth: 360px;
  }
  &__clansList {
    @include flex((gap: 20px, flex-wrap: wrap));
  }
  &__clan {
    display: grid;
    grid-template-rows: 64px 1fr min(48px, 1fr);
    grid-template-columns: 1fr 5fr;
    row-gap: 10px;
    flex-basis: calc(50% - 10px);
    
    background-color: vars.$colors-white;
    padding: 20px;
    border-radius: vars.$br-l;
  }
  &__upperContainer {
    @include flex((
      justify-content: space-between,
      align-items: center,
    ));
    grid-column: 1 / 3;
  }
  &__description {
    grid-column: 1 / 3;
    font-size: var(--fontSize, 16px);
  }
  &__buttonsContainer {
    @include flex((
      justify-content: space-between,
      gap: vars.$gaps-xs,
    ));
    grid-column: 1 / 3;
    margin-top: var(--marginTop, 30px);
    & button {
      flex-basis: 50%;
      font-size: 16px;
    }
  }
}
</style>
