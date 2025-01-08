import type { MenuStructure } from '../../../types/components/layouts/NavigationMenu';
import { EIcons } from '~/components/base';


const FOOTER_MENU_STRUCTURE: MenuStructure = [
  {
    section: {
      title: 'FAQ',
      url: '/faq',
    },
  },
  {
    section: {
      title: 'Ивенты',
      url: '/events',
    },
  },
  {
    section: {
      title: 'Направления',
    },
    items: [
      {
        title: 'Camp',
        url: '/camp',
      },
      {
        title: 'Dungeon',
        url: '/dungeon',
      },
      {
        title: 'Women',
        url: '/women',
      },
      {
        title: 'Kids',
        url: '/kids',
      },
    ],
  },
  {
    section: {
      title: 'Контакты',
    },
    items: [
      {
        title: 'DND',
        url: 't.me/dnd',
        icon: EIcons.TELEGRAM,
      },
      {
        title: 'Camp',
        url: 't.me/camp',
        icon: EIcons.TELEGRAM,
      },
    ],
  },
];

const HEADER_MENU_STRUCTURE: MenuStructure = [
  {
    section: {
      title: 'Ивенты',
      url: '/events',
    },
  },
  {
    section: {
      title: 'Галлерея',
      url: '/gallery',
    },
  },
  {
    section: {
      title: 'Мерч',
      url: '/merch',
    },
  },
  {
    section: {
      title: 'Направления',
      url: '/directions',
    },
  },
  {
    section: {
      title: 'FAQ',
      url: '/faq',
    },
  },
  {
    section: {
      title: 'Контакты',
      url: '/contacts',
    },
  },
];


export { FOOTER_MENU_STRUCTURE, HEADER_MENU_STRUCTURE };
