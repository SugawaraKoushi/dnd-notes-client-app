export const calculateModifier = (value) => {
    return Math.floor((value - 10) / 2);
};

export const calculateModifierAsString = (value) => {
    const modifier = Math.floor((value - 10) / 2);

    if (modifier > 0) {
        return `+${modifier}`;
    }

    return modifier;
}

export const modifierAsString = (modifier) => {
    return modifier > 0 ? `+${modifier}` : modifier;
}
