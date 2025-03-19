import type { EUserRoles } from './store';


export type EditableUserData = {
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
  sex: 'm' | 'f' | '';
};

export type ProvidedUserData = {
  id: string;
  role: EUserRoles;
  notifications: any[];
  clans: {
    participant: number[];
    owner: number[];
  };
};
