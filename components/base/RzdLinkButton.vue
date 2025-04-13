<script setup lang="ts">
import type { EButtons } from '../constants';
import RzdButton from './RzdButton/RzdButton.vue';


type Props = {
  type: EButtons;
  link: string;
};


/** Props & Emits */
const { type, link } = defineProps<Props>();


const $b = useBEM('RzdLinkButton');
</script>

<template lang="pug">
RzdButton(
  :type="type"
  :class="$b('button')"
  @click="navigateTo(link)"
)
</template>
