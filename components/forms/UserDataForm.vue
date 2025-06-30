<script setup lang="ts">
import type { EButtons } from '~/components/constants';
import { EIcons, EIconsSizes } from '~/components/constants';


type Props = {
  submitButton: EButtons;
  isLoading: boolean;
  additionalButtons?: EButtons[];
};
type Emits = {
  additionalButton: [type: EButtons];
  dataSubmit: [data: EditableUserData<Date | undefined>];
};


const {
  submitButton,
  isLoading,
  additionalButtons = [],
} = defineProps<Props>();
const emit = defineEmits<Emits>();

const { isTMA } = usePlatform()
const route = useRoute()
const { userData } = storeToRefs(useUserStore());

const data = ref<EditableUserData<Date | undefined>>({
  ...userData.value,
  birthdate: undefined,
  password1: '',
  password2: '',
  isPrivateData: false,
});

const checkedKeys = computed<(keyof EditableUserData)[]>(() => {
  if (isSettings.value) return getTypedKeys(data.value)
  return ['name', 'surname', 'password1', 'password2', 'sex', isTMA ? 'telegram' : 'phone', 'birthdate'];
})

const isDataChanged = computed<boolean>(() => {
  for (const [key, value] of getTypedEntries(data.value)) {
    if (value !== userData.value[key]) {
      return true;
    }
  }
  return false;
});

const withEmptyFields = computed<boolean>(() => {
  for (const [key, value] of getTypedEntries(data.value)) {
    if (!value && checkedKeys.value.includes(key) && key !== 'avatar') {
      return true;
    }
  }
  return false;
});


const isSettings = computed<boolean>(() => route.path.includes('settings'))
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
      RzdInput(
        v-model="data.name"
        placeholder="Имя"
      )
      RzdInput(
        v-model="data.surname"
        placeholder="Фамилия"
      )
  div(:class="$b('container')")
    RzdDatePicker(
      v-model="data.birthdate"
      placeholder="Дата рождения"
    )
    RzdInput(
      v-if="!isTMA"
      v-model="data.phone"
      v-keyfilter.int
      placeholder="Телефон"
    )
    RzdInput(
      v-else
      v-model="data.telegram"
      placeholder="Телеграм"
    )
    template(v-if="isSettings")
      RzdInput(
        v-if="isSettings"
        v-model="data.instagram"
        placeholder="Ник Инстаграм"
      )
      RzdInput(
        v-else
        v-model="data.email"
        placeholder="Почта"
      )
  div(
    v-if="isSettings"
    :class="$b('container')"
  )
    RzdInput(
      v-model="data.email"
      placeholder="Почта"
    )
  RzdInput(
    v-model="data.password1"
    type="password"
    :placeholder="isSettings ? 'Новый пароль' : 'Пароль'"
  )
  RzdInput(
    v-model="data.password2"
    type="password"
    :placeholder="isSettings ? 'Подтвердите новый пароль' : 'Подтвердите пароль'"
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
  RzdToggle(
    v-if="isSettings"
    v-model="data.isPrivateData"
    label="Скрывать личную информацию от других пользователей?"
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
    :is-loading="isLoading"
  )
</template>

<style lang="scss">
.UserDataForm {
  @include flex-column((gap: vars.$gaps-g16));
  
  --rzd-avatar-size: 112px;

  box-sizing: content-box;
  
  & input {
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

@include mobile {
  .UserDataForm {
    --rzd-avatar-size: 106px;
    &__container {
      &:nth-child(2) {
        flex-direction: column;
      }
    }
  }
}
</style>
