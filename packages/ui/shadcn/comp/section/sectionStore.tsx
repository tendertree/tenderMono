import create from 'zustand';
import { SectionDataType } from './type';

export type SectionContextType = {
    activeSection: number;
    setActiveSection: (_: number) => void;
    activeSectionProgress: number;
    setActiveSectionProgress: (_: number) => void;
    data: SectionDataType[];
};


export const UseSectionStore = create<SectionContextType>((set) => ({
    activeSection: 0,
    setActiveSection: (section) => set((state) => ({ ...state, activeSection: section })),
    activeSectionProgress: 0,
    setActiveSectionProgress: (progress) => set((state) => ({ ...state, activeSectionProgress: progress })),
    data: [],
}));

