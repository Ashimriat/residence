import { EIcons } from '~/components/base';


const CONTACT: ContactData = {
  title: 'Человек-Поддержка',
  topic: 'По вопросам DND',
  socials: [
    {
      icon: EIcons.TELEGRAM,
      link: '',
    },
    {
      icon: EIcons.WHATSAPP,
      link: '',
    },
  ],
};

const mockContacts = (length: number) => Array.from({ length }, () => CONTACT);

const mockSocials = () => [
  {
    icon: EIcons.TELEGRAM_CONTACTS,
  },
  {
    icon: EIcons.INSTAGRAM_CONTACTS,
  },
];



export { mockContacts, mockSocials };
