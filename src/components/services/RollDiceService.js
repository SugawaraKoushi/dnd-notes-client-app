export const rollD20 = (times = 1) => {
    const results = [];
    for (let i = 0; i < times; i++) {
        results.push(Math.floor(Math.random() * 20) + 1);
    }
    return times === 1 ? results[0] : results;
};
