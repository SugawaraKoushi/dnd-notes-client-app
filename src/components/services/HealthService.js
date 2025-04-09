export const getHealthBarColor = (current, max, temp) => {
    let percentage = (current / (max + temp)) * 100;

    if (percentage <= 25) {
        return "red";
    }

    if (percentage <= 75) {
        return "orange";
    }

    return "green";
};