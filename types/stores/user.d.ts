import type { EUserRoles } from '~/stores/constants/user';


declare type EditableUserData = {
  avatar?: string;
  name: string;
  surname: string;
  birthdate: string;
  telegram: string;
  instagram: string;
  email: string;
  phone: string;
  password1: string;
  password2: string;
  about: string;
  sex: 'm' | 'f' | '',
}

declare type ProvidedUserData = {
  id: string;
  role: EUserRoles;
  notifications: any[];
  clans: {
    participant: number[];
    owner: number[];
  }
};
