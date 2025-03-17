import type { EditableUserData, ProvidedUserData } from '~/types/stores/user';
import { EUserRoles } from '~/constants/stores';
import { mockNotifications } from './notification';


const EDITABLE_DATA: EditableUserData = {
  avatar: undefined,
  name: 'Никита',
  surname: 'Цуканов',
  birthdate: '14.03.1993',
  telegram: 'nikitosik_tut',
  instagram: 'nikitosik_tut',
  email: 'n.tsu@gmail.com',
  phone: '88005553535',
  password1: 'password1',
  password2: 'password2',
  about: 'Основатель комьюнити "Резиденция"',
  sex: 'm',
};

const PROVIDED_DATA: ProvidedUserData = {
  id: '0',
  role: EUserRoles.ADMIN,
  notifications: [...mockNotifications(8)],
  clans: {
    participant: [0],
    owner: [1],
  }
};

const mockUserData = (): [EditableUserData, ProvidedUserData] => [
  { ...EDITABLE_DATA },
  { ...PROVIDED_DATA },
];

export { mockUserData };
