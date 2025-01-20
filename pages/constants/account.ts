
import MafiaLogo from '~assets/images/games/mafia.svg';
import DndLogo from '~assets/images/games/dnd.svg';
import BunkerLogo from '~assets/images/games/bunker.svg';
import PokerLogo from '~assets/images/games/poker.svg';
import { EIcons } from '~/components/base';


const GAMES_ICONS = [MafiaLogo, BunkerLogo, DndLogo, PokerLogo];

const TABS = [
  {
    id: 'events',
    label: 'События',
    icon: EIcons.CALENDAR,
  },
  {
    id: 'clans',
    label: 'Кланы',
    icon: EIcons.SHIELD,
  },
  {
    id: 'referrals',
    label: 'Рефералка',
    icon: EIcons.USERS,
  },
];


export { GAMES_ICONS, TABS };
