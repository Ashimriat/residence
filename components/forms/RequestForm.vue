<script setup lang="ts">
import { EButtons } from '../base';


type Props = {
  title: string;
  subtext: string;
  requestTextPlaceholder: string;
  selectOptions?: SelectOption[];
  buttonType: EButtons;
};
type Emits = {
  submit: [data: RequestFormData];
};

/** Props & Emits */
const {
  title,
  subtext,
  requestTextPlaceholder,
  buttonType,
  selectOptions = []
} = defineProps<Props>();
const emit = defineEmits<Emits>();


const formData = ref<RequestFormData>({
  selectOption: null,
  name: '',
  telegram: '',
  text: '',
});


const isRequestFormFilled = computed<boolean>(() => (
  getKeys(formData.value).reduce((acc, key) => {
    if (!acc) return acc;
    const value = formData.value[key];
    if (key === 'selectOption' && selectOptions.length) {
      return value !== null;
    }
    return !!value;
  }, true)
));

function test(val: any) {
  console.log("INPUT UPDATE EVENT", val);
}

const $b = useBEM('RequestForm');
</script>

<template lang="pug">
div(:class="$b()")
  div(:class="$b('requestQuestion')")
    h1
      | {{ title }}
    span
      | {{ subtext }}
  div(:class="$b('requestForm')")
    BaseSelectButtons(
      v-if="selectOptions.length"
      is-inverted
      v-model="formData.selectOption"
      :options="selectOptions"
    )
    div(:class="$b('inputsContainer')")
      PInputText(
        v-model="formData.name"
        placeholder="Имя"
      )
      PInputText(
        v-model="formData.telegram"
        placeholder="Ник телеграм"
      )
    BaseTextarea(
      v-model="formData.text"
      :placeholder="requestTextPlaceholder"
    )
    BaseButton(
      :type="buttonType"
      :disabled="!isRequestFormFilled"
      @click="emit('submit', formData)"
    )
</template>

<style lang="scss">
.RequestForm {
  @include flex;
  background-color: vars.$colors-black;
  border-radius: vars.$br-x2l;
  overflow: hidden;
  &__requestQuestion {
    @include flexColumn((gap: 20px));
    box-sizing: content-box;
    max-width: 450px;
    padding: 40px;
    background-color: vars.$colors-white;
    border-radius: 0 vars.$br-x2l vars.$br-x2l 0;
    & > span {
      color: vars.$colors-greyDark;
    }
  }
  &__requestForm {
    @include flexColumn((gap: 20px));
    box-sizing: content-box;
    width: 670px;
    padding: 40px;
    background-color: vars.$colors-black;
  }
  &__inputsContainer {
    @include flex((justify-content: space-between));
    & > input {
      box-sizing: border-box;
      width: 100%;
      max-width: 325px;
      background-color: vars.$colors-white;
    }
  }
}

@include mobile {
  .RequestForm {
    flex-direction: column;
    border-radius: vars.$br-s;
    height: unset;
    width: 100%;
    &__requestQuestion {
      border-radius: 0 0 vars.$br-s vars.$br-s;
      padding: 20px;
      max-width: unset;
      & span {
        font-size: vars.$fs-xl;
      }
    }
    &__requestForm {
      gap: 12px;
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
    }
    &__inputsContainer {
      & > input {
        max-width: unset;
      }
    }
    &__inputsContainer {
      flex-direction: column;
      gap: 12px;
      & > input {
        min-height: 32px;
      }
    }
  }
}
</style>
