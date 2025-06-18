import { createContext } from "react";

export const StatusTrackerContext = createContext({
    onInspirationChange: () => {},
    onExhaustChange: () => {},
    character: {},
});
