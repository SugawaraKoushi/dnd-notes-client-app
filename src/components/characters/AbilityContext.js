import { createContext } from "react";

export const AbilityContext = createContext({
    onScoreChange: () => {},
    onSavingThrowProficiencyChange: () => {},
});
