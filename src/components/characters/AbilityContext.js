import { createContext } from "react";

export const AbilityContext = createContext({
    onScoreChange: () => {},

    onSavingThrowProficiencyChange: () => {},
    onSavingThrowBonusChange: () => {},

    onSkillProficiencyChange: (index) => {},
    onSkillBonusChange: (index, bonus) => {}
});
