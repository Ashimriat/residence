import type { EUserRoles } from './store';


export type EditableUserData<BD extends string | Date | undefined = string> = {
  avatar?: string;
  name: string;
  surname: string;
  birthdate: BD;
  telegram: string;
  instagram: string;
  email: string;
  phone: string;
  password1: string;
  password2: string;
  about: string;
  sex: 'm' | 'f' | '';
  isPrivateData: boolean;
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
