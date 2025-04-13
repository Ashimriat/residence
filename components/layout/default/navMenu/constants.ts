import { EIcons } from '~/components/constants';


export type NavMenuItem = {
  label: string;
  url: string;
  icon?: EIcons;
};

type AuthNavMenuItem = Required<NavMenuItem>

type MenuStructure = {
  section: NavMenuItem & { isHeaderOnly?: boolean },
  items?: NavMenuItem[];
}[];


const CONTENT_IDS = {
  accordion: crypto.randomUUID(),
};
const ACCORDION_CONTENT: AccordionContent[] = [
  {
    title: 'Страницы',
    id: CONTENT_IDS.accordion,
  },
];


const MOBILE_AUTHED_ITEMS: AuthNavMenuItem[][] = [
  [
    {
      label: 'Панель событий',
      url: '/events',
      icon: EIcons.GRID,
    },
  ],
  [
    // {
    //   label: 'Рейтинг ведущих',
    //   url: '/rating/masters',
    //   icon: EIcons.ZAP,
    // },
    {
      label: 'Рейтинг',
      url: '/rating',
      icon: EIcons.HASH,
    },
  ],
  [
    // {
    //   label: 'Достижения',
    //   url: '/account?tab=achievements',
    //   icon: EIcons.AWARD,
    // },
    // {
    //   label: 'Кланы',
    //   url: '/account?tab=clans',
    //   icon: EIcons.SHIELD,
    // },
    // {
    //   label: 'Игроки',
    //   url: '/account?tab=referrals',
    //   icon: EIcons.USERS,
    // },
  ],
  [
    {
      label: 'Настройки',
      url: '/account/settings',
      icon: EIcons.GEAR,
    },
  ],
] as const;


const MENU_STRUCTURE: MenuStructure = [
  {
    section: {
      label: 'Ивенты',
      url: '/events',
    },
  },
  // {
  //   section: {
  //     label: 'Галлерея',
  //     url: '/gallery',
  //     isHeaderOnly: true,
  //   },
  // },
  // {
  //   section: {
  //     label: 'Мерч',
  //     url: '/merch',
  //     isHeaderOnly: true,
  //   },
  // },
  // {
  //   section: {
  //     label: 'Направления',
  //     url: '/directions'
  //   },
  //   items: [
  //     {
  //       label: 'Camp',
  //       url: '/directions?type=camp',
  //     },
  //     {
  //       label: 'Dungeon',
  //       url: '/directions?type=dungeon',
  //     },
  //     {
  //       label: 'Women',
  //       url: '/directions?type=women',
  //     },
  //     {
  //       label: 'Kids',
  //       url: '/directions?type=kids',
  //     },
  //   ],
  // },
  // {
  //   section: {
  //     label: 'Контакты',
  //     url: '/contacts',
  //   },
  //   items: [
  //     // {
  //     //   label: 'DND',
  //     //   url: 't.me/dnd',
  //     //   icon: EIcons.TELEGRAM,
  //     // },
  //     // {
  //     //   label: 'Camp',
  //     //   url: 't.me/camp',
  //     //   icon: EIcons.TELEGRAM,
  //     // },
  //   ],
  // },
  {
    section: {
      label: 'FAQ',
      url: '/faq',
    },
  },
];


export {
  MENU_STRUCTURE,
  CONTENT_IDS,
  ACCORDION_CONTENT,
  MOBILE_AUTHED_ITEMS,
};