import { createContext } from "react";

export const AttackContext = createContext({
    attacks: [],
    onAttacksChange: (attacks) => {},
})  