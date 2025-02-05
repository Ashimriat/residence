import { type EIcons } from '~/constants/components';

declare type ContactData = {
  title: string;
  topic: string;
  socials: Array<{
    icon: EIcons;
    link: '',
  }>;
}