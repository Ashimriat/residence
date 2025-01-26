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
    notifications: [{}],
    clans: {
      participant: [],
      owner: [1],
    }
  } as ProvidedUserData);
  const isLoggedIn = ref<boolean>(false);

  /**
   *
   */
  const isCommonUser = computed<boolean>(() => isLoggedIn.value && providedData.value.role === EUserRoles.USER);

  const isAdmin = computed<boolean>(() => isLoggedIn.value && providedData.value.role === EUserRoles.ADMIN);

  function checkIsClanOwner(clanOwnerId: string): boolean {
    return providedData.value.id === clanOwnerId;
  }

  function setUserData([editable, provided]: [EditableUserData, ProvidedUserData?]): void {
    if (provided) {
      providedData.value = provided;
    }
    userData.value = editable;
    isLoggedIn.value = true;
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
    checkIsClanOwner,
    setUserData,
  };
});


export default useUserStore;
