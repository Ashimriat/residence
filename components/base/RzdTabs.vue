<script setup lang="ts">
export type TabData = {
  label: string;
  id: string;
};


type Props = {
  tabs: TabData[];
};

const { tabs } = defineProps<Props>();
const activeTab = defineModel<string>('tab', { required: true });

const $b = useBEM('RzdTabs');
</script>

<template lang="pug">
PTabs(
  v-model:value="activeTab"
  :pt:root:class="$b()"
)
  PTabList(:pt:root:class="$b('list')")
    PTab(
      v-for="({ label, id }) of tabs"
      :key="id"
      :value="id"
      :pt:root:class="$b('tab')"
    )
      | {{ label }}
  PTabPanels(:pt:root:class="$b('panels')")
    slot(name="tabsCommon")
    PTabPanel(
      v-for="({ id }) of tabs"
      :key="id"
      :value="id"
    )
      slot(
        :key="id"
        :name="`tab-${id}`"
      )
      slot(name="tab")
    slot
</template>

<style lang="scss">
.RzdTabs {
  --scoped-tab-padding: 12px 16px;
  --scoped-tab-height: 48px;
  --scoped-tab-font: #{vars.$fonts-buttonL};
  &__list {
    --p-tabs-tablist-background: transparent;
    --p-tabs-tablist-border-color: transparent;
    --p-tabs-active-bar-height: 0;

    overflow: auto;

    & .p-tablist-tab-list {
      gap: vars.$gaps-g16;
    }
  }
  &__tab {
    @include centered-flex;

    --p-tabs-tab-background: transparent;
    --p-tabs-tab-active-background: #{vars.$colors-black};
    --p-tabs-tab-border-color: #{vars.$colors-black};
    --p-tabs-tab-padding: var(--scoped-tab-padding);
    --p-tabs-tab-hover-color: #{vars.$colors-black};
    --p-tabs-tab-hover-border-color: #{vars.$colors-black};
    --p-tabs-tab-active-border-color: #{vars.$colors-black};
    --p-tabs-tab-color: #{vars.$colors-black};
    --p-tabs-tab-active-color: #{vars.$colors-white};
    --p-tabs-tab-border-width: 3px;
    
    height: var(--scoped-tab-height);
    font: var(--scoped-tab-font);
    border-radius: vars.$br-s;
  }
  &__panels {
    @include relative;
    --p-tabs-tabpanel-background: transparent;
    padding: 20px 0 0;
  }
}

@include mobile {
  .RzdTabs {
    --scoped-tab-padding: 8px 12px;
    --scoped-tab-height: 32px;
    --scoped-tab-font: #{vars.$fonts-buttonS};
  }
}
</style>
