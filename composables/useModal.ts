import { 
  LazySignIn,
  LazySignUp,
  LazyMobileCalendar,
  LazyMafiaRating
} from '#components'
// import MerchPurchase from '~/mvpV2/components/modals/MerchPurchase.vue';
// import AchievementDetails from '~/mvpV2/components/modals/AchievementDetails.vue';
// import ClanApplication from '~/mvpV2/components/modals/clan/ClanApplication.vue';
// import ClanCreated from '~/mvpV2/components/modals/clan/ClanCreated.vue';
// import ClanParticipants from '~/mvpV2/components/modals/clan/ClanParticipants.vue';
// import CreateClan from '~/mvpV2/components/modals/clan/CreateClan.vue';
// import InviteToClan from '~/mvpV2/components/modals/clan/InviteToClan.vue';
// import MasterSelect from '~/mvpV2/components/modals/MasterSelect.vue';


const GAMES_RATINGS: Record<string, Component> = {
  mafia: LazyMafiaRating,
};

export default function useModal<T>() {
  const { $displayedModalData } = useNuxtApp()

  const openModal = <P>(component: Component, params: { layer?: number, title?: string, data?: P }): void => {
    const layer = params?.layer ?? 0
    const data = params?.data
    const title = params?.title ?? '';
    const newState = [...$displayedModalData.value];
    newState[layer] = {
      component,
      data,
      title
    }
    $displayedModalData.value = newState
  }

  function closeModal() {
    const newState = [...$displayedModalData.value];
    newState.pop();
    $displayedModalData.value = newState;
  }

  function getModalData(): T {
    return $displayedModalData.value[$displayedModalData.value.length - 1].data as T;
  }

  function openSignIn(): void {
    openModal(LazySignIn, { title: 'Вход' })
  }

  function openSignUp(): void {
    openModal(LazySignUp, { title: 'Регистрация' })
  }

  function showMobileCalendar(data: MobileCalendarModalData): void {
    openModal(LazyMobileCalendar, { data });
  }

  function openGameRating(
    gameType: keyof typeof GAMES_RATINGS,
    data: EventData,
  ): void {
    openModal(GAMES_RATINGS[gameType], { data });
  }


  return {
    openSignIn,
    openSignUp,
    showMobileCalendar,
    openGameRating,
    closeModal,
    getModalData,
  }
}