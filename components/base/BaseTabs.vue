<script setup lang="ts">
type Props = {
  tabs: TabData[];
};

const { tabs } = defineProps<Props>();
const activeTab = defineModel<string>('tab', { required: true });
</script>

<template lang="pug">
PTabs(v-model:value="activeTab")
  PTabList
    PTab(
      v-for="({ label, id }) of tabs"
      :key="id"
      :value="id"
    )
      | {{ label }}
  PTabPanels
    slot(name="tabsCommon")
    PTabPanel(
      v-for="({ id }) of tabs"
      :key="id"
      :value="id"
    )
      slot(
        v-for="({ id }) of tabs"
        :key="id"
        :name="`tab-${id}`"
      )
      slot(name="commonTab")
    slot
</template>
