<script setup lang="ts">
import { mockContacts, mockSocials } from '~assets/mocks';
import { EIconsSizes } from '~/constants/components';


const $b = useBEM('ContactsPage');
</script>

<template lang="pug">
div(:class="$b()")
  section(:class="$b('section')")
    h2
      | Контакты
    div(
      v-for="(contact, i) of mockContacts(3)"
      :key="`contact_${i}`"
      :class="$b('contact')"
    )
      PAvatar(
        size="large"
        shape="circle"
        :class="$b('avatar')"
      )
      div(:class="$b('contactDataContainer')")
        div
          h4
            | {{ contact.title }}
          div(:Class="$b('contactTopic')")
            | {{ contact.topic }}
        div(:class="$b('contactSocialsContainer')")
          RzdIcon(
            v-for="(social, j) of contact.socials"
            :key="`social_${i}_${j}`"
            :type="social.icon"
            :size="EIconsSizes.XL"
          )
  section(:class="$b('section')")
    h2
      | Соцсети
    div(:class="$b('socialsContainer')")
      RzdIcon(
        v-for="(social, i) of mockSocials()"
        :key="`social_${i}`"
        :type="social.icon"
        :size="EIconsSizes.XL"
      )
</template>

<style lang="scss">
.ContactsPage {
  @include flex((gap: 4rem));
  &__section {
    @include flexColumn((gap: 1.4rem));
  }
  &__contact {
    @include flex((align-items: center, gap: 1.4rem));
  }
  &__contactDataContainer {
    @include flexColumn((justify-content: space-between));

    height: 80%;
    & > div:first-child {
      @include flexColumn;
    }
  }
  &__contactTopic {
    color: vars.$colors-greyMuted;
    font-size: 1.1rem;
    font-weight: vars.$fw-bold;
  }
  &__contactSocialsContainer {
    @include flex((gap: 8px));
  }
  &__socialsContainer {
    @include flex((gap: 1.2rem));
  }
}

@include mobile {
  .ContactsPage {
    flex-direction: column;
    &__section {
      &:first-of-type {
        order: 2;
      }
      &:last-of-type {
        order: 1;
      }
    }
    &__avatar {
      --avatarSize: 10rem;
    }
    &__contactDataContainer {
      gap: 2rem;
    }
  }
}
</style>
