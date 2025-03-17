import { type RadioOption } from '~/components/base/RzdRadios.vue';
import { type SpecialParams } from '~/components/forms/EventCreationForm.vue';


const AUDIENCE_TYPE_OPTIONS: RadioOption<Extract<SpecialParams, 'kids' | 'women'>>[] = [
  {
    label: 'Ивенты для детей',
    value: 'kids',
  },
  {
    label: 'Женский ивент',
    value: 'women',
  },
];

const SPECIAL_OPTIONS: RadioOption<Extract<SpecialParams, 'secret' | 'subscription'>>[] = [
  {
    label: 'Скрытое событие',
    value: 'secret',
  },
  {
    label: 'Действует абонемент',
    value: 'subscription',
  },
];


export { AUDIENCE_TYPE_OPTIONS, SPECIAL_OPTIONS };
