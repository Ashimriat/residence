import { EIcons } from '../constants/icon';
import { EButtonVariant, EButtons } from '../constants/button';


enum EIconPos {
  LEFT = 'left',
  RIGHT = 'right'
}

type ButtonData = {
  label?: string;
  icon?: EIcons;
  iconPos?: EIconPos;
  variant?: EButtonVariant;
  isText?: boolean;
};

const BUTTONS_DATA: Record<EButtons, ButtonData> = {
  [EButtons.ALREADY_REGISTERED]: {
    label: 'Уже есть аккаунт?',
    isText: true,
  },
  [EButtons.NO_ACCOUNT]: {
    label: 'Ещё нет аккаунта?',
    isText: true,
  },
  [EButtons.FORGOT_PASSWORD]: {
    label: 'Забыли пароль?',
    isText: true,
  },
  [EButtons.SIGN_IN]: {
    label: 'Войти',
    icon: EIcons.LOGIN,
  },
  [EButtons.ENTER_EVENT]: {
    label: 'Записаться',
  },
  [EButtons.CLOSE]: {
    label: 'Закрыть',
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.EVENTS_CALENDAR]: {
    label: 'Открыть календарь ивентов',
    icon: EIcons.CALENDAR,
  },
  [EButtons.REQUEST_EVENT]: {
    label: 'Оставить заявку',
  },
  [EButtons.ASK_QUESTION]: {
    label: 'Отправить заявку',
  },
  [EButtons.WELCOME_BEGINNING]: {
    label: 'Начнём!',
  },
  [EButtons.DETAILS]: {
    label: 'Подробнее',
    icon: EIcons.ARROW_DOWN,
    iconPos: EIconPos.RIGHT,
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.ADD_EVENT]: {
    label: 'Событие',
    icon: EIcons.PLUS_CIRCLED,
  },
  [EButtons.SHARE]: {
    icon: EIcons.LINK,
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.EDIT_RULES]: {
    label: 'Редактировать',
    icon: EIcons.EDIT,
    variant: EButtonVariant.SECONDARY,
  },
  [EButtons.SIGN_UP]: {
    label: 'Зарегистрироваться',
  },
  [EButtons.ADD_RULES]: {
    label: 'Добавить правила',
    icon: EIcons.PLUS,
    iconPos: EIconPos.RIGHT,
  },
  [EButtons.ADD_SUBSCRIPTION]: {
    label: 'Добавить абонемент',
    icon: EIcons.PLUS,
    iconPos: EIconPos.RIGHT,
  },
  [EButtons.GIFT_TO_FRIEND]: {
    label: 'Подарить другу',
    variant: EButtonVariant.CONTRAST,
    icon: EIcons.GIFT,
  },
  [EButtons.BUY]: {
    label: 'Купить',
  },
  [EButtons.BUY_MERCH]: {
    label: 'Написать',
    icon: EIcons.TELEGRAM_MERCH,
  },
  [EButtons.USER_SETTINGS]: {
    label: 'Настройки',
    variant: EButtonVariant.CONTRAST,
    icon: EIcons.GEAR,
  },
  [EButtons.ORDER_GAME]: {
    label: 'Заказать игру',
    icon: EIcons.PLUS_CIRCLED,
  },
  [EButtons.ADD_PLAYERS]: {
    label: 'Добавить игроков',
    icon: EIcons.LINK,
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.LEAVE_CLAN]: {
    variant: EButtonVariant.DANGER,
    icon: EIcons.CROSS_CIRCLED,
  },
  [EButtons.EXPEL_PLAYER]: {
    variant: EButtonVariant.DANGER,
    icon: EIcons.CROSS_CIRCLED,
  },
  [EButtons.SAVE_CHANGES]: {
    label: 'Сохранить изменения',
  },
  [EButtons.SEARCH]: {
    icon: EIcons.SEARCH,
  },
  [EButtons.CREATE_OWN_CLAN]: {
    label: 'Создать свой клан',
    icon: EIcons.SHIELD,
    iconPos: EIconPos.LEFT,
  },
  [EButtons.ENTER_CLAN]: {
    label: 'Вступить'
  },
  [EButtons.CLAN_PARTICIPANTS]: {
    label: 'Участники',
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.CREATE_CLAN]: {
    label: 'Создать клан',
  },
  [EButtons.INVITE_TO_CLAN]: {
    label: 'Пригласить игрока'
  },
  [EButtons.CLAN_APPLICATION_CONFIRM]: {
    label: 'Отлично!'
  },
  [EButtons.ADD_PLAYER_TO_CLAN_SELECTION]: {
    label: 'Добавить',
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.REMOVE_PLAYER_FROM_CLAN_SELECTION]: {
    label: 'Убрать',
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.CONFIRM]: {
    label: 'Подтвердить',
  },
} as const;


export default function useButtonData(type: EButtons): ButtonData {
  const data = BUTTONS_DATA[type];
  data.variant ??= EButtonVariant.PRIMARY;
  data.iconPos ??= EIconPos.LEFT;
  return data;
}
