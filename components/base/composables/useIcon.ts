import InstagramLogo from '~assets/icons/instagram/common.svg';
import InstagramContacts from '~assets/icons/instagram/contacts.svg';
import TelegramLogo from '~assets/icons/telegram/common.svg';
import TelegramMerch from '~assets/icons/telegram/merch.svg';
import TelegramContacts from '~assets/icons/telegram/contacts.svg';
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
import Chevron from '~assets/icons/chevron.svg';
import WhatsApp from '~assets/icons/whatsapp.svg';
import Gear from '~assets/icons/settings.svg';
import Clans from '~assets/icons/clans.svg';
import CrossCircled from '~assets/icons/crossCircled.svg';
import CalendarNextMonth from '~assets/icons/calendarNextMonth.svg';
import CalendarPrevMonth from '~assets/icons/calendarPrevMonth.svg';
import Shield from '~assets/icons/shield.svg';
import Search from '~assets/icons/search.svg';
import Cross from '~assets/icons/cross.svg';
import { EIcons, EIconsSizes } from '../constants/icon';


const ICONS_LIST: Record<EIcons, string> = {
  [EIcons.MINUS]: Minus,
  [EIcons.CHEVRON]: Chevron,
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
  [EIcons.TELEGRAM]: TelegramLogo,
  [EIcons.INSTAGRAM]: InstagramLogo,
  [EIcons.ARROW_DOWN]: ArrowDown,
  [EIcons.ARROW_UP_RIGHT]: ArrowUpRight,
  [EIcons.USER]: User,
  [EIcons.EDIT]: Edit,
  [EIcons.TELEGRAM_MERCH]: TelegramMerch,
  [EIcons.GIFT]: Gift,
  [EIcons.WHATSAPP]: WhatsApp,
  [EIcons.TELEGRAM_CONTACTS]: TelegramContacts,
  [EIcons.INSTAGRAM_CONTACTS]: InstagramContacts,
  [EIcons.GEAR]: Gear,
  [EIcons.CLANS]: Clans,
  [EIcons.CROSS_CIRCLED]: CrossCircled,
  [EIcons.SEARCH]: Search,
  [EIcons.SHIELD]: Shield,
  [EIcons.CALENDAR_NEXT_MONTH]: CalendarNextMonth,
  [EIcons.CALENDAR_PREV_MONTH]: CalendarPrevMonth,
  [EIcons.CROSS]: Cross,
} as const;

const ICONS_DESKTOP_SIZES: Record<EIconsSizes, number> = {
  [EIconsSizes.XXL]: 4.2,
  [EIconsSizes.XL]: 2.4,
  [EIconsSizes.L]: 1.8,
  [EIconsSizes.M]: 1.2,
  [EIconsSizes.S]: 0.8,
}

const ICONS_MOBILE_SIZES: Record<EIconsSizes, number> = {
  [EIconsSizes.XXL]: 6.4,
  [EIconsSizes.XL]: 2.4,
  [EIconsSizes.L]: 1.8,
  [EIconsSizes.M]: 2.4,
  [EIconsSizes.S]: 0.8,
};


const SOCIAL_ICONS = [
  EIcons.INSTAGRAM,
  EIcons.INSTAGRAM_CONTACTS,
  EIcons.TELEGRAM,
  EIcons.TELEGRAM_CONTACTS,
  EIcons.WHATSAPP,
];


export default function useIcon(iconType: EIcons, iconSize: EIconsSizes) {
  const { isMobile } = useDevice();
  const usedSizes = isMobile ? ICONS_MOBILE_SIZES : ICONS_DESKTOP_SIZES;
  let size = usedSizes[iconSize];
  
  const res = {
    image: ICONS_LIST[iconType],
    finalSize: `${size}rem`,
    isSocialIcon: SOCIAL_ICONS.includes(iconType),
  };

  if (iconType === EIcons.USERS && iconSize !== EIconsSizes.M) {
    res.finalSize = '28px';
  }
  
  return res;
}
export { SOCIAL_ICONS };
