<script setup lang="ts">
import type { EButtons } from '~/components/constants';
import { EIcons, EIconsSizes } from '~/components/constants';


type Props = {
  type: 'registration' | 'settings'
  withoutSex?: boolean;
  submitButton: EButtons;
  additionalButtons?: EButtons[];
};
type Emits = {
  additionalButton: [type: EButtons];
  dataSubmit: [data: EditableUserData];
};


const {
  type,
  submitButton,
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


const isSettings = computed(() => type === 'settings')
const $b = useBEM('UserDataForm');
</script>

<template lang="pug">
form(
  :class="$b()"
  @submit.prevent.stop="emit('dataSubmit', data)"
)
  div(:class="$b('container')")
    RzdAvatar(
      v-if="isSettings"
      :class="$b('avatar')"
      :image="data.avatar"
    )
      template(
        v-if="!data.avatar"
        #icon
      )
        RzdIcon(
          :type="EIcons.USER"
          :size="EIconsSizes.L"
        )
    div
      RzdTextInput(
        v-model="data.name"
        placeholder="Имя"
      )
      RzdTextInput(
        v-model="data.surname"
        placeholder="Фамилия"
      )
  div(:class="$b('container')")
    RzdTextInput(
      v-model="data.birthdate"
      placeholder="Дата рождения"
    )
    RzdTextInput(
      v-model="data.telegram"
      placeholder="Ник Телеграм"
    )
    template(v-if="isSettings")
      RzdTextInput(
        v-if="isSettings"
        v-model="data.instagram"
        placeholder="Ник Инстаграм"
      )
      RzdTextInput(
        v-else
        v-model="data.email"
        placeholder="Почта"
      )
  div(
    v-if="isSettings"
    :class="$b('container')"
  )
    RzdTextInput(
      v-model="data.email"
      placeholder="Почта"
    )
    RzdTextInput(
      v-model="data.phone"
      placeholder="Телефон"
    )
  RzdPasswordInput(
    v-model="data.password1"
    placeholder="Пароль"
  )
  RzdPasswordInput(
    v-model="data.password2"
    placeholder="Подтвердите пароль"
  )
  RzdTextarea(
    v-if="isSettings"
    v-model="data.about"
    placeholder="Кратко о себе"
    :max-length="100"
  )
  RzdRadios(
    v-if="!isSettings"
    v-model="data.sex"
    :options="[{ label: 'Мужчина', value: 'male' }, { label: 'Женщина', value: 'female' }]"
  )
  RzdButton(
    v-for="button of additionalButtons"
    :key="button"
    :type="button"
    :class="$b('textButton')"
    @click="emit('additionalButton', button)"
  )
  RzdButton(
    :disabled="withEmptyFields || !isDataChanged"
    :type="submitButton"
  )
</template>

<style lang="scss">
.UserDataForm {
  @include flex-column((gap: vars.$gaps-g16));
  box-sizing: content-box;
  & input {
    height: 48px;
    width: 100%;
    box-sizing: border-box;
  }
  &__container {
    @include flex((gap: vars.$gaps-g16));
    & > div:last-child {
      @include flex-column((gap: vars.$gaps-g16));
      width: 100%;
    }
  }
  &__avatar {
    min-width: 112px;
    min-height: 112px;
    background-color: vars.$colors-white;
    box-shadow: vars.$shadows-base;
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
}
</style>
