import { create } from "zustand";

const useIconURLStore = create((set) => ({
  iconURLs: [],
  setIconURLs: (iconURLs: { [iconName: string]: string }[]) =>
    set({ iconURLs }),
}));

export default useIconURLStore;
