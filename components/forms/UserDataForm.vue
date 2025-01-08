<script setup lang="ts">
import type { EditableUserData } from '~/types/stores/user';
import {
  EButtons,
  EIcons,
  EIconsSizes,
} from '~/components/base';

enum EComponentEvents {
  ADDITIONAL_BUTTON = 'additionalButton',
  DATA_SUBMIT = 'dataSubmit'
}

type Props = {
  withoutSex?: boolean;
  submitButton: EButtons;
  additionalButtons?: EButtons[];
};
type Emits = {
  (e: EComponentEvents.ADDITIONAL_BUTTON, type: EButtons): void;
  (e: EComponentEvents.DATA_SUBMIT, data: EditableUserData): void;
}

const {
  submitButton,
  withoutSex,
  additionalButtons = [],
} = defineProps<Props>();
const emit = defineEmits<Emits>();

const { userData } = useUserStore();

const data = ref<EditableUserData>({ ...userData });

const isDataChanged = computed<boolean>(() => {
  for (const [key, value] of getEntries(data.value)) {
    if (value !== userData[key]) {
      return true;
    }
  }
  return false;
});

const withEmptyFields = computed<boolean>(() => {
  for (const [key, value] of getEntries(data.value)) {
    if (!value && key !== 'avatar') {
      return true;
    }
  }
  return false;
});

const $b = useBem('UserDataForm');
</script>

<template lang="pug">
form(
  :class="$b()"
  @submit.prevent.stop="emit(EComponentEvents.DATA_SUBMIT, data)"
)
  div(:class="$b('container')")
    PAvatar(
      :class="$b('avatar')"
      :image="data.avatar"
    )
      template(
        v-if="!data.avatar"
        #icon
      )
        BaseIcon(
          :type="EIcons.USER"
          :size="EIconsSizes.L"
        )
    div
      PInputText(
        v-model="data.name"
        placeholder="Имя"
      )
      PInputText(
        v-model="data.surname"
        placeholder="Фамилия"
      )
  div(:class="$b('container')")
    PInputText(
      v-model="data.birthdate"
      placeholder="Дата рождения"
    )
    PInputText(
      v-model="data.telegram"
      placeholder="Ник Телеграм"
    )
    PInputText(
      v-model="data.instagram"
      placeholder="Ник Инстаграм"
    )
  div(:class="$b('container')")
    PInputText(
      v-model="data.email"
      placeholder="Почта"
    )
    PInputText(
      v-model="data.phone"
      placeholder="Телефон"
    )
  PPassword(
    v-model="data.password1"
    placeholder="Пароль"
  )
  PPassword(
    v-model="data.password2"
    placeholder="Подтвердите пароль"
  )
  BaseTextarea(
    v-model="data.about"
    placeholder="Кратко о себе"
    :max-length="100"
  )
  BaseRadios(
    v-if="!withoutSex"
    v-model="data.sex"
    :options="[{ label: 'Мужчина', value: 'male' }, { label: 'Женщина', value: 'female' }]"
  )
  BaseButton(
    v-for="button of additionalButtons"
    :key="button"
    :type="button"
    :class="$b('textButton')"
    @click="emit(EComponentEvents.ADDITIONAL_BUTTON, button)"
  )
  BaseButton(
    is-submit
    :disabled="withEmptyFields || !isDataChanged"
    :type="submitButton"
  )
</template>

<style lang="scss">
.UserDataForm {
  @include flexColumn((gap: 16px));
  box-sizing: content-box;
  & input {
    height: 48px;
    width: 100%;
    box-sizing: border-box;
  }
  &__container {
    @include flex((gap: 16px));
    & > div:last-child {
      @include flexColumn((gap: 16px));
      width: 100%;
    }
  }
  &__avatar {
    min-width: 112px;
    min-height: 112px;
    background-color: vars.$colors-white;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.06);
  }
  &__textAreaContainer {
    @include relative;
    width: 100%;
    & textarea {
      box-sizing: border-box;
      height: 115px;
      resize: none;
    }
    & span {
      @include absolute((bottom: 10px, right: 12px));
      font-size: vars.$fs-xs;
    }
  }
  &__textButton {
    justify-content: flex-start;
  }
}
</style>
