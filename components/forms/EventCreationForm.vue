<script setup lang="ts">
import { SUBWAY_STATIONS, AUDIENCE_TYPE_OPTIONS, SPECIAL_OPTIONS } from '~/constants/components';


export type SpecialParams = 'kids' | 'women' | 'secret' | 'subscription';
export type FormData = {
  name: string;
  price: string;
  address: string;
  subwayId: string;
  description: string;
  params: SpecialParams[];
};


const formData = defineModel<FormData>({ required: true });

const audienceParam = ref<SpecialParams | ''>('');
const specialParams = ref<SpecialParams | ''>('');

const $b = useBEM('EventCreationForm');
</script>

<template lang="pug">
div(:class="$b()")
  PInputText(
    v-model="formData.name"
    placeholder="Название"
  )
  PInputText(
    v-model="formData.price"
    v-keyfilter.money
    placeholder="Цена"
  )
  PInputText(
    v-model="formData.address"
    placeholder="Адрес"
  )
  PSelect(
    v-model="formData.subwayId"
    :options="SUBWAY_STATIONS"
    option-label="stationName"
    option-value="id"
    placeholder="Метро"
  )
    template(#option="{ option }")
      SubwayStation(v-bind="option")
  BaseTextarea(
    v-model="formData.description"
    placeholder="Описание"
    :max-length="123"
  )
  BaseRadios(
    v-model="audienceParam"
    :options="AUDIENCE_TYPE_OPTIONS"
    is-resettable
  )
  BaseRadios(
    v-model="specialParams"
    :options="SPECIAL_OPTIONS"
    is-resettable
  )
</template>

<style lang="scss">
.EventCreationForm {
  @include flex((flex-wrap: wrap));

  & > * {
    flex-grow: 1;
  }
}
</style>
