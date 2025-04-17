<script setup lang="ts">
import {
  EButtons,
  EIcons,
  EIconsSizes,
} from '~/components/constants';
import { TABS, GAMES_ICONS } from './constants';


const route = useRoute();
const router = useRouter();

const tab = toRef(() => route.query.tab ?? TABS[0].id);

const { userData } = storeToRefs(useUserStore())

watchEffect(() => {
  router.push({ path: route.path, query: { tab: tab.value }});
})

const $b = useBEM('AccountPage');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section', ['user'])")
    div(:class="$b('subsection', ['data'])")
      div(:class="$b('userDataWrapper')")
        RzdAvatar(label="UI")
        div(:class="$b('userData')")
          div(:class="$b('dataContainer', ['user'])")
            RzdOverlayBadge(
              severity="contrast"
              value="Постоялец"
            )
              span
                | {{ userData.name }}
          div(:class="$b('dataContainer', ['birthdate'])")
            RzdIcon(
              :type="EIcons.GIFT"
              :size="EIconsSizes.S"
            )
            span
              | 11.01.2000
          div(:class="$b('dataContainer', ['statistics'])")
            span
              | Топ #1
            span
              | 300 баллов
      RzdLinkButton(
        :type="EButtons.USER_SETTINGS"
        link="/account/settings"
        :class="$b('settingsLink')"
      )
    div(:class="$b('subsection', ['rating'])")
      TitleWithLink(
        title="Рейтинг"
        link="/rating"
      )
        div(:class="$b('commonRatingContainer')")
          div(:class="$b('userRating')")
            | {{ 'Ваш рейтинг - ' }}
            span
              | 24600
      div(:class="$b('gamesRatingContainer')")
        div(
          v-for="(icon, i) of GAMES_ICONS"
          :key="`gameIcon_${i}`"
          :class="$b('gameRating')"
        )
          component(:is="icon")
          span
            | 6150
  section(:class="$b('section', ['content'])")
    div(
      v-if="false"
      :class="$b('accountTabsContainer')"
    )
      NuxtLink(
        v-for="({ id, label, icon }) of TABS"
        :key="id"
        :class="$b('tab', { active: id === tab })"
        :to="`/account?tab=${id}`"
      )
        RzdIcon(:type="icon")
        span
          | {{ label }}
    UserEvents(v-if="tab === 'events'")
    template(v-else)
      ClansList(v-if="tab === 'clans'")
      ReferralsList(v-else)
</template>

<style lang="scss">
.AccountPage {
  @include flex-column((gap: vars.$gaps-g40));
  --rzd-badge-translateX: calc(100% + #{vars.$gaps-g8});
  --rzd-badge-translateY: 0px;
  --rzd-avatar-size: 96px;
  --rzd-avatar-label-fontsize: 40px;
  
  &__section {
    @include flex((gap: vars.$gaps-g40));
    &--user {
      justify-content: space-between;
    }
    &--content {
      flex-direction: column;
    }
  }
  &__subsection {
    background-color: vars.$colors-white;
    border-radius: vars.$br-l;
    flex-grow: 1;
    min-height: 120px;
    &--data {
      @include flex((
        justify-content: space-between,
        align-items: center,
        gap: vars.$gaps-g16,
      ));
      flex-basis: 66%;
      padding: var(--userDataSubsectionPadding, 20px);
      flex-direction: var(--userDataSubsectionFlexDirection, row);
    }
    &--rating {
      @include flex-column((justify-content: space-between));
      padding: var(--ratingSubsectionPadding, 16px 28px);
      flex-basis: 32%;
      color: vars.$colors-black;
    }
  }
  &__userDataWrapper {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g16,
    ));
    width: 100%;
  }
  &__userData {
    @include flex-column((justify-content: space-between));
    height: 70px;
  }
  &__dataContainer {
    @include flex((align-items: center));
    &--user,
    &--birthdate {
      & > span {
        color: vars.$colors-black;
      }
    }
    &--user {
      color: vars.$colors-black;
      font: vars.$fonts-textBoldM;
    }
    &--birthdate {
      font: var(--font-text-bold-m);
      gap: vars.$gaps-g4;
    }
    &--statistics {
      font: vars.$fonts-textBoldS;
      gap: vars.$gaps-g12;
      color: vars.$colors-black;
      & span {
        @include relative;
        &:first-of-type {
          @include with-pseudo-after((
            border-radius: 50%,
            background-color: vars.$colors-black,
            width: 4px,
            height: 4px,
            top: 4px,
            right: -9px,
          ));
        }
        &:last-of-type {
          color: vars.$colors-beige;
        }
      }
    }
  }
  &__userTitle {
    font-size: vars.$fs-x2s;
    font-weight: vars.$fw-bold;
    width: 53px;
    height: 14px;
    padding: 2px 4px;
    border-radius: vars.$br-x2s;
    color: vars.$colors-white;
    background-color: vars.$colors-black;
  }
  &__settingsLink {
    width: var(--settingsButtonWidth, initial);
  }
  &__commonRatingContainer {
    @include flex((justify-content: space-between, align-items: center));
  }
  &__userRating {
    font: var(--font-text-bold-l);
    & span {
      color: vars.$colors-beige;
    }
  }
  &__gamesRatingContainer {
    @include flex((justify-content: space-between));
  }
  &__gameRating {
    @include flex-column((align-items: center, gap: 4px));
    font: vars.$fonts-textBoldS;
    & svg {
      width: 32px;
      height: 32px;
    }
  }
  &__accountTabsContainer {
    @include flex((justify-content: center, gap: 24px));
  }
  &__tab {
    @include flex((align-items: center, gap: 8px));
    border-bottom: 2px solid transparent;
    cursor: pointer;
    font-weight: vars.$fw-midHeavy;
    font-size: var(--static-fontSize-s-xs);
    padding-bottom: 10px;
    --rzd-icon-color: #{vars.$colors-black};
    &--active {
      border-color: vars.$colors-beige;
    }
  }
}

@include mobile {
  .AccountPage {
    --rzd-avatar-size: 64px;

    --userDataSubsectionFlexDirection: column;
    --settingsButtonMinWidth: 100%;
    --userDataSubsectionPadding: 12px;
    --ratingSubsectionPadding: 16px 20px;
    --settingsButtonWidth: 100%;
    --badgeTranslateY: 5px;

    &__section {
      gap: vars.$gaps-g16;

      &--user {
        flex-direction: column;
      }
    }
  }
}
</style>
