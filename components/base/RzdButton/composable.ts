import { EIcons, EIconsSizes } from '~/components/constants';
import { EButtons, EButtonVariant, EButtonSize } from './constants';


enum EIconPos {
  LEFT = 'left',
  RIGHT = 'right',
}

type ButtonData = Partial<{
  label: string;
  size: EButtonSize;
  iconType: EIcons | null;
  iconSize: EIconsSizes;
  iconPos: EIconPos;
  variant: EButtonVariant;
  isVariantInverted: boolean;
  isTextButton: boolean;
  htmlType: HTMLButtonElement['type'];
}>;

type ExtendedButtonData = ButtonData & { atMobile?: ButtonData };


const SIGN_IN_BUTTON_DATA: ExtendedButtonData = {
  label: 'Войти',
  size: EButtonSize.M,
  iconType: EIcons.LOGIN,
  iconPos: EIconPos.RIGHT,
  iconSize: EIconsSizes.S,
} as const;

const EXPEL_BUTTON_DATA: ExtendedButtonData = {
  variant: EButtonVariant.DANGER,
  iconType: EIcons.CROSS_CIRCLED,
  iconSize: EIconsSizes.S,
  iconPos: EIconPos.RIGHT,
  atMobile: {
    label: 'Выгнать',
  },
}

const ADD_PLAYERS_DATA: ExtendedButtonData = {
  label: 'Добавить игроков',
  iconType: EIcons.PLUS_CIRCLED,
  variant: EButtonVariant.TERTIARY,
}

const BUTTONS_DATA: Record<EButtons, ExtendedButtonData> = {
  [EButtons.ALREADY_REGISTERED]: {
    label: 'Уже есть аккаунт?',
    isTextButton: true,
  },
  [EButtons.NO_ACCOUNT]: {
    label: 'Ещё нет аккаунта?',
    isTextButton: true,
  },
  [EButtons.FORGOT_PASSWORD]: {
    label: 'Забыли пароль?',
    isTextButton: true,
  },
  [EButtons.SIGN_IN_MODAL]: {
    ...SIGN_IN_BUTTON_DATA,
    size: EButtonSize.L,
    iconType: null,
  },
  [EButtons.SIGN_IN]: SIGN_IN_BUTTON_DATA,
  [EButtons.SIGN_IN_MOBILE]: {
    ...SIGN_IN_BUTTON_DATA,
    variant: EButtonVariant.SECONDARY,
  },
  [EButtons.ENTER_EVENT]: {
    label: 'Записаться',
  },
  [EButtons.CLOSE]: {
    label: 'Закрыть',
    variant: EButtonVariant.TERTIARY,
  },
  [EButtons.REFERRAL]: {
    label: 'Скопировать ссылку',
    iconType: EIcons.LINK,
    variant: EButtonVariant.TERTIARY,
    isVariantInverted: true,
  },
  [EButtons.EVENTS_CALENDAR]: {
    label: 'Открыть календарь ивентов',
    iconType: EIcons.CALENDAR,
  },
  [EButtons.REQUEST_EVENT]: {
    label: 'Оставить заявку',
  },
  [EButtons.ASK_QUESTION]: {
    label: 'Отправить заявку',
  },
  [EButtons.WELCOME_BEGINNING]: {
    label: 'Начнём!',
    variant: EButtonVariant.TERTIARY,
    iconPos: EIconPos.RIGHT,
    iconType: EIcons.ARROW_DOWN,
  },
  [EButtons.DETAILS]: {
    label: 'Подробнее',
    iconType: EIcons.ARROW_DOWN,
    iconPos: EIconPos.RIGHT,
    variant: EButtonVariant.TERTIARY,
  },
  [EButtons.ADD_EVENT]: {
    label: 'Событие',
    iconType: EIcons.PLUS_CIRCLED,
  },
  [EButtons.ADD_EVENT_MOBILE]: {
    label: 'Создать событие',
    iconType: EIcons.PLUS_CIRCLED,
    iconPos: EIconPos.RIGHT,
  },
  [EButtons.SHARE]: {
    iconType: EIcons.LINK,
    variant: EButtonVariant.TERTIARY,
  },
  [EButtons.EDIT_RULES]: {
    label: 'Редактировать',
    iconType: EIcons.EDIT,
    variant: EButtonVariant.SECONDARY,
  },
  [EButtons.SIGN_UP]: {
    label: 'Зарегистрироваться',
    htmlType: 'submit',
  },
  [EButtons.ADD_RULES]: {
    label: 'Добавить правила',
    iconType: EIcons.PLUS,
    iconPos: EIconPos.RIGHT,
  },
  [EButtons.ADD_SUBSCRIPTION]: {
    label: 'Добавить абонемент',
    iconType: EIcons.PLUS,
    iconPos: EIconPos.RIGHT,
  },
  [EButtons.GIFT_TO_FRIEND]: {
    label: 'Подарить',
    variant: EButtonVariant.TERTIARY,
    iconType: EIcons.GIFT,
    atMobile: {
      iconType: undefined,
    },
  },
  [EButtons.BUY]: {
    label: 'Купить',
  },
  [EButtons.BUY_MERCH]: {
    label: 'Написать',
    iconType: EIcons.MERCH,
  },
  [EButtons.USER_SETTINGS]: {
    label: 'Настройки',
    size: EButtonSize.S,
    variant: EButtonVariant.TERTIARY,
    iconType: EIcons.GEAR,
    iconSize: EIconsSizes.S,
  },
  [EButtons.ORDER_GAME]: {
    label: 'Заказать игру',
    iconType: EIcons.PLUS_CIRCLED,
  },
  [EButtons.ADD_PLAYERS]: {
    ...ADD_PLAYERS_DATA,
    atMobile: {
      size: EButtonSize.S,
    },
  },
  [EButtons.ADD_PLAYERS_CLAN]: ADD_PLAYERS_DATA,
  [EButtons.TOGGLE_DETAILS]: {
    iconType: EIcons.LINK,
    variant: EButtonVariant.TERTIARY,
    isVariantInverted: true,
  },
  [EButtons.LEAVE_CLAN]: {
    variant: EButtonVariant.DANGER,
    iconType: EIcons.CROSS_CIRCLED,
  },
  [EButtons.EXPEL_PLAYER]: EXPEL_BUTTON_DATA,
  [EButtons.DELETE_PLAYER]: {
    ...EXPEL_BUTTON_DATA,
    iconType: EIcons.CROSS,
    atMobile: undefined,
  },
  [EButtons.BACK]: {
    label: 'Назад',
    variant: EButtonVariant.SECONDARY,
  },
  [EButtons.SELECT_MASTER]: {
    label: 'Выбрать ведущего',
    variant: EButtonVariant.TERTIARY,
  },
  [EButtons.SAVE_CHANGES]: {
    label: 'Сохранить изменения',
    htmlType: 'submit',
  },
  [EButtons.SEARCH]: {
    iconType: EIcons.SEARCH,
  },
  [EButtons.CREATE_OWN_CLAN]: {
    label: 'Создать свой клан',
    iconType: EIcons.SHIELD,
    iconPos: EIconPos.LEFT,
  },
  [EButtons.ENTER_CLAN]: {
    label: 'Вступить',
  },
  [EButtons.CLAN_PARTICIPANTS]: {
    label: 'Участники',
    variant: EButtonVariant.TERTIARY,
  },
  [EButtons.CREATE_CLAN]: {
    label: 'Создать клан',
  },
  [EButtons.INVITE_TO_CLAN]: {
    label: 'Пригласить игрока',
  },
  [EButtons.INVITE_TO_CLAN_MOBILE]: {
    label: 'Пригласить',
    iconType: EIcons.PLUS_CIRCLED,
  },
  [EButtons.CLAN_APPLICATION_CONFIRM]: {
    label: 'Отлично!',
  },
  [EButtons.ADD_PLAYER_TO_SELECTION]: {
    label: 'Добавить',
    size: EButtonSize.M,
    variant: EButtonVariant.TERTIARY,
  },
  [EButtons.REMOVE_PLAYER_FROM_SELECTION]: {
    label: 'Убрать',
    size: EButtonSize.M,
    variant: EButtonVariant.TERTIARY,
    isVariantInverted: true,
  },
  [EButtons.CONFIRM]: {
    label: 'Подтвердить',
  },
  [EButtons.FINISH_SEASON]: {
    label: 'Закончить сезон',
  },
  [EButtons.SUBMIT_GAME_ORDER]: {
    label: 'Подать заявку',
  },
  [EButtons.SELECT]: {
    label: 'Выбрать',
    variant: EButtonVariant.TERTIARY,
  },
  [EButtons.REMOVE]: {
    label: 'Убрать',
    variant: EButtonVariant.TERTIARY,
    isVariantInverted: true,
  },
  [EButtons.CONFIRM_MASTER]: {
    label: 'Подтвердить и вернуться',
    iconType: EIcons.CHEVRON_LEFT,
  },
  [EButtons.CREATE_EVENT]: {
    label: 'Создать событие',
  },
  [EButtons.FINISH_GAME]: {
    label: 'Закончить игру',
  },
  [EButtons.MASTER_RATING]: {
    label: 'Оценить',
  },
  [EButtons.ADD_GAME_ROUND]: {
    label: 'Добавить партию',
    iconType: EIcons.PLUS_CIRCLED,
    variant: EButtonVariant.TERTIARY,
    atMobile: {
      size: EButtonSize.S,
    },
  },
  [EButtons.SAVE_RATINGS]: {
    label: 'Сохранить оценки',
  },
  [EButtons.RECOVER_PASSWORD]: {
    label: 'Подтвердить',
    htmlType: 'submit',
  }
} as const;

const DEFAULT_PARAMS: Required<ButtonData> = {
  label: '',
  size: EButtonSize.L,
  iconType: null,
  iconSize: EIconsSizes.M,
  iconPos: EIconPos.LEFT,
  variant: EButtonVariant.PRIMARY,
  isVariantInverted: false,
  isTextButton: false,
  htmlType: 'button'
}


export default function useButtonData(type: EButtons): Required<ButtonData> {
  const { isMobile } = usePlatform();
  let data = {
    ...DEFAULT_PARAMS,
    ...BUTTONS_DATA[type],
  };
  if (isMobile) {
    data.iconSize = EIconsSizes.S;
    if (data.size === EButtonSize.L) {
      data.size = EButtonSize.M;
    }
    if (data.atMobile) {
      data = {
        ...data,
        ...data.atMobile,
      };
    }
  }
  return data;
}
