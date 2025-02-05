import Instagram from '~assets/icons/socials/instagram.svg';
import Telegram from '~assets/icons/socials/telegram.svg';
import WhatsApp from '~assets/icons/socials/whatsapp.svg';
import Merch from '~assets/icons/merch.svg';
import Users from '~assets/icons/users.svg';
import Clock from '~assets/icons/clock.svg';
import Link from '~assets/icons/link.svg';
import Location from '~assets/icons/location.svg';
import PlusCircled from '~assets/icons/plusCircled.svg';
import Plus from '~assets/icons/plus.svg';
import Login from '~assets/icons/login.svg';
import Bell from '~assets/icons/bell.svg';
import Burger from '~assets/icons/burger.svg';
import ArrowDown from '~assets/icons/arrowDown.svg';
import ArrowUpRight from '~assets/icons/arrowUpRight.svg';
import Calendar from '~assets/icons/calendar.svg';
import User from '~assets/icons/user.svg';
import Edit from '~assets/icons/edit.svg';
import Gift from '~assets/icons/gift.svg';
import Minus from '~assets/icons/minus.svg';
import ChevronLeft from '~/assets/icons/chevronLeft.svg';
import ChevronRight from '~assets/icons/chevronRight.svg';
import Gear from '~assets/icons/settings.svg';
import CrossCircled from '~assets/icons/crossCircled.svg';
import CalendarNextMonth from '~assets/icons/calendarNextMonth.svg';
import CalendarPrevMonth from '~assets/icons/calendarPrevMonth.svg';
import Shield from '~assets/icons/shield.svg';
import Search from '~assets/icons/search.svg';
import Cross from '~assets/icons/cross.svg';
import Award from '~assets/icons/award.svg';
import Grid from '~assets/icons/grid.svg';
import Zap from '~assets/icons/zap.svg';
import Hash from '~assets/icons/hash.svg';
import { EIcons, EIconsSizes } from '~/constants/components';


const ICONS_LIST: Record<EIcons, string> = {
  [EIcons.MINUS]: Minus,
  [EIcons.CHEVRON_RIGHT]: ChevronRight,
  [EIcons.CHEVRON_LEFT]: ChevronLeft,
  [EIcons.USERS]: Users,
  [EIcons.CLOCK]: Clock,
  [EIcons.LINK]: Link,
  [EIcons.LOCATION]: Location,
  [EIcons.PLUS_CIRCLED]: PlusCircled,
  [EIcons.PLUS]: Plus,
  [EIcons.LOGIN]: Login,
  [EIcons.BURGER]: Burger,
  [EIcons.BELL]: Bell,
  [EIcons.CALENDAR]: Calendar,
  [EIcons.ARROW_DOWN]: ArrowDown,
  [EIcons.ARROW_UP_RIGHT]: ArrowUpRight,
  [EIcons.USER]: User,
  [EIcons.EDIT]: Edit,
  [EIcons.MERCH]: Merch,
  [EIcons.GIFT]: Gift,
  [EIcons.GEAR]: Gear,
  [EIcons.CROSS_CIRCLED]: CrossCircled,
  [EIcons.SEARCH]: Search,
  [EIcons.SHIELD]: Shield,
  [EIcons.CALENDAR_NEXT_MONTH]: CalendarNextMonth,
  [EIcons.CALENDAR_PREV_MONTH]: CalendarPrevMonth,
  [EIcons.CROSS]: Cross,
  [EIcons.AWARD]: Award,
  [EIcons.GRID]: Grid,
  [EIcons.ZAP]: Zap,
  [EIcons.HASH]: Hash,
  // socials

  [EIcons.WHATSAPP]: WhatsApp,
  [EIcons.TELEGRAM]: Telegram,
  [EIcons.INSTAGRAM]: Instagram,
} as const;

const ICONS_SIZES: Record<EIconsSizes, number> = {
  [EIconsSizes.XL]: 48,
  [EIconsSizes.L]: 36,
  [EIconsSizes.M]: 24,
  [EIconsSizes.S]: 16,
}


export default function useIcon(iconType: EIcons, iconSize: EIconsSizes) {
  const res = {
    image: ICONS_LIST[iconType],
    finalSize: `${ICONS_SIZES[iconSize]}px`,
  };

  if (iconType === EIcons.USERS && iconSize !== EIconsSizes.M) {
    // res.finalSize = '28px';
  }
  
  return res;
}