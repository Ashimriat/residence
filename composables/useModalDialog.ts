import { type MasterSelectModalData } from '~/mvpV2/pages/admin/CreateEvent.vue';
import SignIn from '~/components/modals/SignIn.vue';
import SignUp from '~/components/modals/SignUp.vue';
import MerchPurchase from '~/components/modals/MerchPurchase.vue';
import AchievementDetails from '~/components/modals/AchievementDetails.vue';
import ClanApplication from '~/components/modals/clan/ClanApplication.vue';
import ClanCreated from '~/components/modals/clan/ClanCreated.vue';
import ClanParticipants from '~/components/modals/clan/ClanParticipants.vue';
import CreateClan from '~/components/modals/clan/CreateClan.vue';
import InviteToClan from '~/components/modals/clan/InviteToClan.vue';
import MobileCalendar, { type MobileCalendarModalData } from '~/components/modals/MobileCalendar.vue';
import MasterSelect from '~/components/modals/MasterSelect.vue';
import MafiaRating from '~/components/modals/rating/MafiaRating.vue';


type DialogRef<T> = {
  value: {
    close: () => void;
    data: T;
  }
};

type OpenParams<T> = {
  data?: T;
  closable?: boolean;
  title?: string;
  id?: string;
};

const GAMES_RATINGS = {
  mafia: {
    component: MafiaRating,
    name: 'Мафия',
  },
};

export default function useModalDialog<T>() {
  const dialog = useDialog();
  const dialogRef = inject<DialogRef<T>>('dialogRef');

  function closeModal(): void {
    dialogRef?.value.close();
  }

  function openModal<P>(
    content: any,
    params?: OpenParams<P>,
    omitModalClose = false
  ): void {
    dialog.open(content, {
      props: {
        header: params?.title ?? '',
        closable: !!params?.closable,
        modal: true,
        closeOnEscape: true,
        draggable: false,
        dismissableMask: true,
        pt: {
          root: {
            id: params?.id ? `modal_${params.id}` : '',
          },
        },
      },
      data: params?.data,
    });
    if (!omitModalClose) closeModal();
  }

  function getModalData(): T {
    return (dialogRef as DialogRef<T>).value.data;
  }

  function openSignIn(): void {
    openModal(SignIn, { title: 'Вход' });
  }

  function openSignUp(): void {
    openModal(SignUp, { title: 'Регистрация' });
  }

  function seeMerch(data: MerchData): void {
    openModal(MerchPurchase, {
      title: `Покупка [${data.title}]`,
      data,
    });
  }

  function seeAchievement(data: AchievementData): void {
    openModal(AchievementDetails, {
      id: 'achievementDetails',
      data,
    });
  }

  function createClan(): void {
    openModal(CreateClan, { title: 'Создание клана' });
  }

  function seeClanParticipants(data: ClanData): void {
    openModal(ClanParticipants, {
      id: 'clanParticipants',
      data,
    });
  }

  function showClanCreated(): void {
    openModal(ClanCreated, {
      title: 'Клан успешно создан',
      id: 'clanCreated',
    });
  }

  function showClanRequestSent(): void {
    openModal(ClanApplication, {
      title: 'Заявка на вступление отправлена!',
    });
  }

  function inviteToClan(clanId: string): void {
    openModal(InviteToClan, {
      title: 'Добавить игрока',
      id: 'inviteToClan',
      data: clanId,
    });
  }

  function showMobileCalendar(data: MobileCalendarModalData): void {
    openModal(MobileCalendar, {
      id: 'mobileCalendar',
      data,
      closable: true,
    });
  }

  function showMasterSelect(data: MasterSelectModalData): void {
    openModal(MasterSelect, {
      title: 'Выбрать ведущего',
      id: 'masterSelect',
      data,
      closable: true,
    });
  }

  function openGameRating(
    gameType: keyof typeof GAMES_RATINGS,
    data: EventData,
  ): void {
    const { component, name } = GAMES_RATINGS[gameType];
    openModal(component, {
      title: `Расбалловка - ${name}`,
      id: 'gameRating',
      data,
      closable: true,
    });
  }

  return {
    getModalData,
    closeModal,
    /** */
    openSignIn,
    openSignUp,
    seeMerch,
    seeAchievement,
    createClan,
    showClanCreated,
    seeClanParticipants,
    showClanRequestSent,
    inviteToClan,
    showMobileCalendar,
    showMasterSelect,
    openGameRating,
  };
}
