import { 
  LazyLogin,
  LazyRegistration,
  LazyMCalendar,
  LazyMafiaRating,
  LazyPasswordRecovery,
  LazyAddPlayers
} from '#components'
// import MerchPurchase from '~/mvpV2/components/modals/MerchPurchase.vue';
// import AchievementDetails from '~/mvpV2/components/modals/AchievementDetails.vue';
// import ClanApplication from '~/mvpV2/components/modals/clan/ClanApplication.vue';
// import ClanCreated from '~/mvpV2/components/modals/clan/ClanCreated.vue';
// import ClanParticipants from '~/mvpV2/components/modals/clan/ClanParticipants.vue';
// import CreateClan from '~/mvpV2/components/modals/clan/CreateClan.vue';
// import InviteToClan from '~/mvpV2/components/modals/clan/InviteToClan.vue';
// import MasterSelect from '~/mvpV2/components/modals/MasterSelect.vue';

type ModalOpenParams<P> = {
  layer: number
  title: string
  size: 'm' | 's'
  data: P
}

const GAMES_RATINGS: Record<string, Component> = {
  mafia: LazyMafiaRating,
};

export default function useModal<T>() {
  const displayedModalData = useState<DisplayedModalData[]>(
    'displayedModalData',
    () => shallowRef([])
  );
  

  const openModal = <P>(component: Component, params: Partial<ModalOpenParams<P>>): void => {
    const layer = params?.layer ?? 0
    const data = params?.data
    const title = params?.title ?? '';
    const size = params?.size ?? 'm';
    const newState = [...displayedModalData.value];
    newState[layer] = {
      component,
      data,
      title,
      size,
    }
    displayedModalData.value = newState
  }

  function closeModal() {
    const newState = [...displayedModalData.value];
    newState.pop();
    displayedModalData.value = newState;
  }

  function getModalData(): T {
    return displayedModalData.value[displayedModalData.value.length - 1].data as T;
  }

  function openLogin(): void {
    openModal(LazyLogin, { title: 'Вход', size: 's' });
  }

  function openRegistration(): void {
    openModal(LazyRegistration, { title: 'Регистрация', size: 'm' });
  }

  function openPasswordRecovery(): void {
    openModal(LazyPasswordRecovery, { title: 'Восстановление пароля', size: 's' });
  }

  function showMobileCalendar(data: MobileCalendarModalData): void {
    openModal(LazyMCalendar, { data, title: 'Дата и время' });
  }

  function addPlayers(): void {
    openModal(LazyAddPlayers, { title: 'Добавить игроков', size: 'm', layer: 1 })
  }

  function openGameRating(
    gameType: keyof typeof GAMES_RATINGS,
    data: EventData,
  ): void {
    openModal(GAMES_RATINGS[gameType], { data, title: 'Рейтинг' });
  }


  return {
    openLogin,
    openRegistration,
    openPasswordRecovery,
    showMobileCalendar,
    openGameRating,
    addPlayers,
    closeModal,
    getModalData,
  }
}