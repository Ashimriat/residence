enum EButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'contrast',
  DANGER = 'danger',
}

enum EButtons {
  ENTER_EVENT = 'enterEvent',
  CLOSE = 'close',
  DETAILS = 'details',
  SIGN_IN_MODAL = 'signInModal',
  SIGN_IN = 'signIn',
  SIGN_IN_MOBILE = 'signInMobile',
  ADD_EVENT = 'addEvent',
  ADD_EVENT_MOBILE = 'addEventMobile',
  SHARE = 'share',
  EDIT_RULES = 'editRules',
  REFERRAL = 'referral',
  EVENTS_CALENDAR = 'eventsCalendar',
  /** RequestForm */
  REQUEST_EVENT = 'requestEvent',
  ASK_QUESTION = 'askQuestion',
  /** */
  WELCOME_BEGINNING = 'welcomeBeginning',
  NO_ACCOUNT = 'noAccount',
  FORGOT_PASSWORD = 'forgotPassword',
  ALREADY_REGISTERED = 'alreadyRegistered',
  SIGN_UP = 'signUp',
  ADD_RULES = 'addRules',
  ADD_SUBSCRIPTION = 'addSubscription',
  GIFT_TO_FRIEND = 'giftToFriend',
  BUY = 'buy',
  BUY_MERCH = 'buyMerch',
  USER_SETTINGS = 'userSettings',
  ORDER_GAME = 'orderGame',
  ADD_PLAYERS = 'addPlayers',
  ADD_PLAYERS_CLAN = 'addPlayersClan',
  LEAVE_CLAN = 'leaveClan',
  EXPEL_PLAYER = 'expelPlayer',
  DELETE_PLAYER = 'deletePlayer',
  SAVE_CHANGES = 'saveChanges',
  CREATE_OWN_CLAN = 'createOwnClan',
  CREATE_CLAN = 'createClan',

  SEARCH = 'search',
  ENTER_CLAN = 'enterClan',
  CLAN_PARTICIPANTS = 'clanParticipants',
  INVITE_TO_CLAN = 'inviteToClan',
  INVITE_TO_CLAN_MOBILE = 'inviteToClanMobile',
  CLAN_APPLICATION_CONFIRM = 'clanApplicationConfirm',
  ADD_PLAYER_TO_SELECTION = 'addPlayerToSelection',
  REMOVE_PLAYER_FROM_SELECTION = 'removePlayerFromSelection',

  CONFIRM = 'confirm',
  TOGGLE_DETAILS = 'toggleDetails',


  FINISH_GAME = 'finishGame',
  MASTER_RATING = 'masterRating',
  FINISH_SEASON = 'finishSeason',
  SUBMIT_GAME_ORDER = 'submitGameOrder',
  SELECT_MASTER = 'selectMaster',
  SELECT = 'select',
  REMOVE = 'remove',
  CONFIRM_MASTER = 'confirmMaster',
  CREATE_EVENT = 'createEvent',
  ADD_GAME_ROUND = 'addGameRound',
  RECOVER_PASSWORD = 'recoverPassword',

  BACK = 'back',


  // Мафия
  SAVE_RATINGS = 'saveRatings',
}

enum EButtonSize {
  S = 's',
  M = 'm',
  L = 'l',
}


export { EButtonVariant, EButtons, EButtonSize };
