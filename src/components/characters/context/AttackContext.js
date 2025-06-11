import { createContext } from "react";

export const AttackContext = createContext({
    attacks: [],
    character: {},
    onAttacksChange: (attacks) => {},
})  