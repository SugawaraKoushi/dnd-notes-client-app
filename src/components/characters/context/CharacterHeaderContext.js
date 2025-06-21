import { createContext } from "react";

export const CharacterContext = createContext({
    onCharacterChange: () => {},
    character: {}, 
});

