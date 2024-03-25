import { create } from 'zustand';

interface UserInfo {
  profileUrl: string;
  nickname: string;
}

interface UserActions {
  setUserInfo: (userInfo: UserInfo) => void;
  initializeUserInfo: () => void;
}

type UserState = UserInfo & UserActions;

const initialUserInfo: UserInfo = { profileUrl: '', nickname: '' };

const useUserStore = create<UserState>((set) => ({
  ...initialUserInfo,
  setUserInfo: (userInfo: UserInfo) => {
    set({ ...userInfo });
  },
  initializeUserInfo: () => {
    set(initialUserInfo);
  },
}));

export default useUserStore;
