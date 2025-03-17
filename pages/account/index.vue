<script setup lang="ts">
import {
  EButtons,
  EIcons,
  EIconsSizes,
} from '~/constants/components';
import { ACCOUNT_TABS, ACCOUNT_GAMES_ICONS } from '~/constants/pages';


const route = useRoute();
const router = useRouter();

const tab = toRef(() => route.query.tab ?? ACCOUNT_TABS[0].id);

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
        PAvatar(
          label="UI"
          :class="$b('avatar')"
        )
        div(:class="$b('userData')")
          div(:class="$b('dataContainer', ['user'])")
            POverlayBadge(
              severity="contrast"
              value="Постоялец"
            )
              | Никита
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
              | Рейтинг 24600
            span
              | 300 баллов
      NuxtLink(
        to="/account/settings"
        :class="$b('settingsLink')"
      )
        RzdButton(
          :type="EButtons.USER_SETTINGS"
          :class="$b('settingsButton')"
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
          v-for="(icon, i) of ACCOUNT_GAMES_ICONS"
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
        v-for="({ id, label, icon }) of ACCOUNT_TABS"
        :key="id"
        :class="$b('tab', { active: id === tab })"
        :to="`/account?tab=${id}`"
      )
        RzdIcon(:type="icon")
        span
          | {{ label }}
    UserEvents(v-if="tab === 'events'")
    ClansList(v-else-if="tab === 'clans'")
    ReferralsList(v-else)
</template>

<style lang="scss">
.AccountPage {
  @include flexColumn((gap: 2.5rem));
  --badgeTranslateX: calc(100% + #{vars.$gaps-g8});
  --badgeTranslateY: 2px;
  --badgeFontSize: #{vars.$fs-static-x2s};
  &__section {
    @include flex((gap: 1rem));
    &--user {
      flex-wrap: wrap;
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
    & * {
      font-weight: vars.$fw-bold;
    }
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
      @include flexColumn((justify-content: space-between));
      padding: var(--ratingSubsectionPadding, 16px 28px);
      flex-basis: 32%;
    }
  }
  &__avatar {
    width: 5rem;
    height: 5rem;
    border-radius: vars.$br-l;
  }
  &__userDataWrapper {
    @include flex((
      align-items: center,
      gap: vars.$gaps-g16,
    ));
    width: 100%;
  }
  &__userData {
    @include flexColumn((justify-content: space-between));
    height: 70px;
  }
  &__dataContainer {
    @include flex((align-items: center, ));
    &--user {
      font-size: var(--userFontSize, #{vars.$fs-static-s});
      & > div {
        color: vars.$colors-black;
      }
    }
    &--birthdate {
      font-size: vars.$fs-static-s;
      gap: vars.$gaps-g4;
      &,
      & span {
        color: vars.$colors-black;
      }
    }
    &--statistics {
      font-size: vars.$fs-static-xs;
      gap: vars.$gaps-g12;
      & span {
        @include relative;
        &:first-of-type,
        &:nth-of-type(2) {
          @include withPseudoAfter((
            border-radius: 50%,
            background-color: vars.$colors-black,
            width: 4px,
            height: 4px,
            top: 5px,
            right: -9px,
          ));
          & span {
            color: vars.$colors-black;
          }
        }
        &:last-of-type {
          color: vars.$colors-beige;
        }
      }
    }
  }
  &__userName {
    font-size: vars.$fs-s;
    font-weight: vars.$fw-bold;
  }
  &__userTitle {
    font-size: vars.$fs-static-x2s;
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
  &__settingsButton {
    --buttonGap: 0;
    --buttonLabelFontSize: #{vars.$fs-static-xs};
    width: 112px;
    min-width: var(--settingsButtonMinWidth, initial);
    height: 24px;
    border-radius: vars.$br-x2s;
    border-width: 1px;
    justify-content: center;
    & span {
      margin-left: 4px;
      font-size: vars.$fs-static-xs;
    }
  }

  &__commonRatingContainer {
    @include flex((justify-content: space-between, align-items: center));
  }
  &__userRating {
    font-size: var(--staticFontSize-M-S);
    & span {
      color: vars.$colors-beige;
    }
  }
  &__ratingLink {
    @include titleWithLink;
  }
  &__gamesRatingContainer {
    @include flex((justify-content: space-between));
  }
  &__gameRating {
    @include flexColumn((align-items: center, gap: 4px));
    & svg {
      width: 32px;
      height: 32px;
    }
    & span {
      font-size: vars.$fs-static-xs;
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
    font-size: var(--staticFontSize-S-XS);
    padding-bottom: 10px;
    --iconStroke: #{vars.$colors-black};
    &--active {
      border-color: vars.$colors-beige;
    }
  }
}

@include mobile {
  .AccountPage {
    --userDataSubsectionFlexDirection: column;
    --settingsButtonMinWidth: 100%;
    --userDataSubsectionPadding: 12px;
    --ratingSubsectionPadding: 16px 20px;
    --settingsButtonWidth: 100%;
    --badgeTranslateY: 5px;
  }
}
</style>
