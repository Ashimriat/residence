import type { EditableUserData, ProvidedUserData } from '~/types/stores/user';
import { EUserRoles } from './constants/user';


const useUserStore = defineStore('user', () => {
  const userData = ref<EditableUserData>({
    avatar: '',
    name: '',
    surname: '',
    birthdate: '',
    telegram: '',
    instagram: '',
    email: '',
    phone: '',
    password1: '',
    password2: '',
    about: '',
    sex: '',
  });
  const providedData = ref<ProvidedUserData>({
    id: '',
    role: EUserRoles.USER,
    notifications: [],
    clans: {
      participant: [],
      owner: [1],
    }
  } as ProvidedUserData);

  /**
   *
   */
  const isLoggedIn = computed<boolean>(() => providedData.value.id !== '');
  /**
   *
   */
  const isCommonUser = computed<boolean>(() => providedData.value.role === EUserRoles.USER);

  const isAdmin = computed<boolean>(() => providedData.value.role === EUserRoles.ADMIN);

  function setUserData([editable, provided]: [EditableUserData, ProvidedUserData?]): void {
    if (provided) {
      providedData.value = provided;
    }
    userData.value = editable;
  }

  return {
    /**  */
    userData,
    providedData,
    /** getters */
    isLoggedIn,
    isCommonUser,
    isAdmin,
    /** actions */
    setUserData,
  };
});


export default useUserStore;