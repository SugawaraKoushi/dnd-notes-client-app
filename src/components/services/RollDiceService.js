export const rollDice = (times = 1, k = 20) => {
    const results = [];
    for (let i = 0; i < times; i++) {
        results.push(Math.floor(Math.random() * k) + 1);
    }
    return times === 1 ? results[0] : results;
};
