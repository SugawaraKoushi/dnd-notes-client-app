import { createContext } from "react";

export const CharacterHeaderContext = createContext({
    onInitiativeChange: () => {},
    onArmorClassChange: () => {},
    onSpeedChange: () => {},
    onNameChange: () => {},
    onRaceChange: () => {},
    onClassChange: () => {},
    onSubclassChange: () => {},
    onHPChange: () => {},
    character: {}, 
});

