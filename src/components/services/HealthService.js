export const getHealthBarColor = (current, max, temp) => {
    let percentage = (current / max) * 100;

    if (percentage <= 25) {
        return "#e64747";
    }

    if (percentage <= 75) {
        return "orange";
    }

    return "green";
};
