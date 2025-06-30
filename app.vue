<script setup lang="ts">
const { config } = usePrimeVue()

onBeforeMount(() => {
  if (!config.locale) return
  config.locale.dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  config.locale.dayNamesShort = ['Вск', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  config.locale.dayNamesMin = ['Вск', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  config.locale.monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  config.locale.monthNamesShort = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'];
})
</script>

<template lang="pug">
NuxtRouteAnnouncer
NuxtLayout
  NuxtPage
RzdModals
PToast(position="bottom-right")
</template>

<style lang="scss">
@use 'primeicons/primeicons.css';
@use '~scss/fonts';
@use '~scss/main';
@use '~scss/root';
</style>