import {IconType} from '@/shared/model';
import {create} from 'zustand';

interface IconStoreProps {
  icons: Record<IconType, string>;
}

const useIconStore = create<IconStoreProps>(set => ({
  icons: {} as Record<IconType, string>,
  setIcons: (icons: Record<IconType, string>) => set({icons}),
}));

export default useIconStore;
