import {
  EIcons,
  EIconsSizes,
  EButtonVariant,
  EButtons
} from '~/constants/components';


enum EIconPos {
  LEFT = 'left',
  RIGHT = 'right'
}

type ButtonData = Partial<{
  label: string;
  iconType: EIcons;
  iconSize: EIconsSizes;
  iconPos: EIconPos;
  variant: EButtonVariant;
  isVariantInverted: boolean;
  isTextButton: boolean;
  htmlType: HTMLButtonElement['type']
  atMobile: Omit<ButtonData, 'atMobile'>
}>;

const SIGN_IN_BUTTON_DATA: ButtonData = {
  label: 'Войти',
  iconType: EIcons.LOGIN,
  iconPos: EIconPos.RIGHT,
} as const;

const BUTTONS_DATA: Record<EButtons, ButtonData> = {
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
    iconType: undefined,
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
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.REFERRAL]: {
    label: 'Скопировать ссылку',
    iconType: EIcons.LINK,
    variant: EButtonVariant.CONTRAST,
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
    variant: EButtonVariant.CONTRAST,
    iconPos: EIconPos.RIGHT,
    iconType: EIcons.ARROW_DOWN,
  },
  [EButtons.DETAILS]: {
    label: 'Подробнее',
    iconType: EIcons.ARROW_DOWN,
    iconPos: EIconPos.RIGHT,
    variant: EButtonVariant.CONTRAST,
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
    variant: EButtonVariant.CONTRAST,
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
    label: 'Подарить другу',
    variant: EButtonVariant.CONTRAST,
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
    variant: EButtonVariant.CONTRAST,
    iconType: EIcons.GEAR,
    iconSize: EIconsSizes.S,
  },
  [EButtons.ORDER_GAME]: {
    label: 'Заказать игру',
    iconType: EIcons.PLUS_CIRCLED,
  },
  [EButtons.ADD_PLAYERS]: {
    label: 'Добавить игроков',
    iconType: EIcons.LINK,
    variant: EButtonVariant.CONTRAST,
    isVariantInverted: true,
  },
  [EButtons.TOGGLE_DETAILS]: {
    iconType: EIcons.LINK,
    variant: EButtonVariant.CONTRAST,
    isVariantInverted: true,
  },
  [EButtons.LEAVE_CLAN]: {
    variant: EButtonVariant.DANGER,
    iconType: EIcons.CROSS_CIRCLED,
  },
  [EButtons.EXPEL_PLAYER]: {
    variant: EButtonVariant.DANGER,
    iconType: EIcons.CROSS_CIRCLED,
    iconSize: EIconsSizes.S,
    iconPos: EIconPos.RIGHT,
    atMobile: {
      label: 'Выгнать',
    }
  },
  [EButtons.SELECT_MASTER]: {
    label: 'Выбрать ведущего',
    variant: EButtonVariant.CONTRAST,
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
  [EButtons.INVITE_TO_CLAN_MOBILE]: {
    label: 'Пригласить',
    iconType: EIcons.PLUS_CIRCLED,
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
  [EButtons.FINISH_SEASON]: {
    label: 'Закончить сезон',
  },
  [EButtons.SUBMIT_GAME_ORDER]: {
    label: 'Подать заявку',
  },
  [EButtons.SELECT]: {
    label: 'Выбрать',
    variant: EButtonVariant.CONTRAST,
  },
  [EButtons.REMOVE]: {
    label: 'Убрать',
    variant: EButtonVariant.CONTRAST,
    isVariantInverted: true,
  },
  [EButtons.CONFIRM_MASTER]: {
    label: 'Подтвердить и вернуться',
    iconType: EIcons.CHEVRON_LEFT,
    iconPos: EIconPos.LEFT,
  }
} as const;



export default function useButtonData(type: EButtons): Omit<ButtonData, 'atMobile'> {
  const { isMobile } = useDevice();
  let data = BUTTONS_DATA[type];
  data.variant ??= EButtonVariant.PRIMARY;
  data.iconPos ??= EIconPos.LEFT;
  data.iconSize ??= EIconsSizes.M;
  data.htmlType ??= 'button';
  if (isMobile) {
    data.iconSize = EIconsSizes.S;
    if (data.atMobile) {
      data = {
        ...data,
        ...data.atMobile,
      }
    }
  }
  return data;
}
