<script setup lang="ts">
import { mockOtherUsers } from '~/assets/mocks';
import type { MasterSelectModalData } from '~/mvpV2/pages/admin/CreateEvent.vue';
import { EButtons } from '~/constants/components';


const { getModalData } = useModalDialog<MasterSelectModalData>();
const { onSelect } = getModalData();

const search = ref<string>('');
const masterId = ref<string>('');

const mastersList = mockOtherUsers(10);

const processedMasters = computed<Participant[]>(
  () => mastersList.filter(({ name, id }) => {
    return name.indexOf(search.value) !== -1 || id.indexOf(search.value) !== -1;
  })
);
 
const selectedMaster = computed<Participant>(
  () => mastersList.find(({ id }) => id === masterId.value) as Participant
);

function selectMaster(id: string): void {
  removeMaster();
  masterId.value = id;
}

function removeMaster(): void {
  masterId.value = '';
}

const $b = useBEM('MasterSelect');
</script>

<template lang="pug">
div(:class="$b()")
  RzdSearch(
    v-model="search"
    placeholder="ID или имя ведущего"
  )
  RzdScrollPanel
    div(
      v-for="({ id, name, avatar }) of processedMasters"
      :key="id"
    )
      UserData(
        :avatar
        :name
      )
      RzdButton(
        :type="EButtons.SELECT"
        @click="selectMaster(id)"
      )
  div(v-if="selectedMaster")
    UserData(
      :avatar="selectedMaster.avatar"
      :name="selectedMaster.name"
    )
    RzdButton(
      :type="EButtons.REMOVE"
      @click="removeMaster"
    )
  RzdButton(
    :type="EButtons.CONFIRM_MASTER"
    :disabled="!masterId"
    @click="onSelect(selectedMaster)"
  )
</template>

<style lang="scss">
.MasterSelect {
  
}
</style>
