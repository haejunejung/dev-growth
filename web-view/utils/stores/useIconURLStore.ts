import { create } from "zustand";

interface IconURLStore {
  iconURLs: { [iconName: string]: string | null };
  setIconURLs: (iconURLs: { [iconName: string]: string | null }) => void;
}

const useIconURLStore = create<IconURLStore>((set) => ({
  iconURLs: {},
  setIconURLs: (iconURLs: { [iconName: string]: string | null }) =>
    set({ iconURLs }),
}));

export default useIconURLStore;
