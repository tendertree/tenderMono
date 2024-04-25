type SectionContext = {
    currentSection: number;
    setActiveSection: (_: number) => void;
    activeSectionProgress: number;
    setActiveSectionProgress: (_: number) => void;
}
