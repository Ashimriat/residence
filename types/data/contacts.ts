import type { EIcons } from '~/components/constants';


export type ContactData = {
  title: string;
  topic: string;
  socials: {
    icon: EIcons;
    link: '';
  }[];
};
