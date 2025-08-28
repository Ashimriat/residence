import MafiaLogo from '~assets/images/games/mafia.svg';
import DndLogo from '~assets/images/games/dnd.svg';
import BunkerLogo from '~assets/images/games/bunker.svg';
import PokerLogo from '~assets/images/games/poker.svg';


enum EGameTypes {
  MAFIA = 'mafia',
  DND = 'dnd',
  BUNKER = 'bunker',
  POKER = 'poker'
}

const GAMES_DESCRIPTIONS = [
  {
    logo: MafiaLogo,
    name: 'Мафия',
    description: 'Командная психологическая пошаговая ролевая игра с детективным сюжетом',
    gameType: EGameTypes.MAFIA,
  },
  {
    logo: DndLogo,
    name: 'DND',
    description: 'Настольная ролевая игра в жанре фэнтези. Требуется удача!',
    gameType: EGameTypes.DND,
  },
  {
    logo: BunkerLogo,
    name: 'Бункер',
    description: 'Невероятно атмосферная игра с великолепной нарративной частью!',
    gameType: EGameTypes.BUNKER,
  },
  {
    logo: PokerLogo,
    name: 'Покер',
    description: 'Жаркая смесь логики, стратегии и удачи. Сможешь разгадать, что на руках у других игроков?',
    gameType: EGameTypes.POKER,
  },
];

const LESSER_GAMES_OPTIONS: SelectOption[] = [
  { label: 'Мафия', value: 'mafia' },
  { label: 'Бункер', value: 'bunker' },
  { label: 'DND', value: 'dnd' },
];

const BIGGER_GAMES_OPTIONS: SelectOption[] = [
  ...LESSER_GAMES_OPTIONS,
  { label: 'Покер', value: 'poker' },
  { label: 'Другое', value: 'other' },
]

const EVENTS_OPTIONS: SelectOption[] = [
  { label: 'Игра', value: 'game' },
  { label: 'Активность', value: 'activity' },
  { label: 'Поездка', value: 'trip' },
  { label: 'Другое', value: 'other' },
];


export {
  LESSER_GAMES_OPTIONS,
  BIGGER_GAMES_OPTIONS,
  EVENTS_OPTIONS,
  EGameTypes
};
