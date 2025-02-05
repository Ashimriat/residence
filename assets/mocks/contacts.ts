import { EIcons } from '~/constants/components';


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
    icon: EIcons.TELEGRAM,
  },
  {
    icon: EIcons.INSTAGRAM,
  },
];



export { mockContacts, mockSocials };
