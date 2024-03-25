import { create } from 'zustand';

interface UserState {
  profileUrl: string;
  nickname: string;
}

interface UserActions {
  setUserState: (userState: UserState) => void;
  initializeUserState: () => void;
}

const initialUserState: UserState = { profileUrl: '', nickname: '' };

const useUserStore = create<UserState & UserActions>((set) => ({
  ...initialUserState,
  setUserState: (userState: UserState) => {
    set({ ...userState });
  },
  initializeUserState: () => {
    set(initialUserState);
  },
}));

export default useUserStore;
