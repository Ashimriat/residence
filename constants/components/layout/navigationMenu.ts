import { EIcons } from '~/constants/components';


type MenuItem = {
  title: string;
  url: string;
  icon?: EIcons;
};

type MenuStructure = Array<{
  section: MenuItem & { isHeaderOnly?: boolean },
  items?: MenuItem[];
}>;

const MENU_STRUCTURE: MenuStructure = [
  {
    section: {
      title: 'Ивенты',
      url: '/events',
    },
  },
  // {
  //   section: {
  //     title: 'Галлерея',
  //     url: '/gallery',
  //     isHeaderOnly: true,
  //   },
  // },
  // {
  //   section: {
  //     title: 'Мерч',
  //     url: '/merch',
  //     isHeaderOnly: true,
  //   },
  // },
  // {
  //   section: {
  //     title: 'Направления',
  //     url: '/directions'
  //   },
  //   items: [
  //     {
  //       title: 'Camp',
  //       url: '/directions?type=camp',
  //     },
  //     {
  //       title: 'Dungeon',
  //       url: '/directions?type=dungeon',
  //     },
  //     {
  //       title: 'Women',
  //       url: '/directions?type=women',
  //     },
  //     {
  //       title: 'Kids',
  //       url: '/directions?type=kids',
  //     },
  //   ],
  // },
  // {
  //   section: {
  //     title: 'Контакты',
  //     url: '/contacts',
  //   },
  //   items: [
  //     // {
  //     //   title: 'DND',
  //     //   url: 't.me/dnd',
  //     //   icon: EIcons.TELEGRAM,
  //     // },
  //     // {
  //     //   title: 'Camp',
  //     //   url: 't.me/camp',
  //     //   icon: EIcons.TELEGRAM,
  //     // },
  //   ],
  // },
  {
    section: {
      title: 'FAQ',
      url: '/faq',
    },
  },
];


export { MENU_STRUCTURE };
