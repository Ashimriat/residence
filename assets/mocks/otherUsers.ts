
const USER_DATA: OtherUserData = {
  name: 'Имя',
  avatar: undefined,
  id: '',
};


const mockOtherUsers = (length: number): OtherUserData[] => Array.from({ length }, (_, i) => ({
  ...USER_DATA,
  id: `${i}`,
}));


export { mockOtherUsers };
