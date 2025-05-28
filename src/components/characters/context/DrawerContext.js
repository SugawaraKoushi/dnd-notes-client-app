import { createContext } from "react";

export const DrawerContext = createContext({
    onClose: () => {},
    name: "",
    race: "",
    className: "",
    subclass: "",
    armorClass: 10,
    speed: 30,
    initiative: 0,
});
