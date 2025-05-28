import { createContext } from "react";

export const CharacterHeaderContext = createContext({
    onInitiativeChange: () => {},
    onArmorClassChange: () => {},
    onSpeedChange: () => {},
    onNameChange: () => {},
    onRaceChange: () => {},
    onClassChange: () => {},
    onSubclassChange: () => {},
    name: "",
    race: "",
    className: "",
    subclass: "",
    armorClass: 10,
    speed: 30,
    proficiencyBonus: 0,
    initiative: 0,
    currentHP: 0,
    maxHP: 0,
    temporaryHP: 0,
});

