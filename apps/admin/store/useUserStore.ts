import { create } from 'zustand';

interface UserInfo {
  profileUrl: string;
  nickname: string;
}

interface UserActions {
  setUserState: (userInfo: UserInfo) => void;
  deleteUserState: () => void;
}

const initialUserInfo: UserInfo = { profileUrl: '', nickname: '' };

const useUserStore = create<UserInfo | UserActions>((set) => ({
  userInfo: initialUserInfo,
  setUserState: (userInfo: UserInfo) => {
    set(userInfo);
  },
  deleteUserState: () => {
    set(initialUserInfo);
  },
}));

export default useUserStore;
