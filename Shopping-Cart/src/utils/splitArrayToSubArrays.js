export const splitArrayToSubArrays = (electronicsArray) => {
    let matrix = [];
    while (electronicsArray.length) {
        matrix.push(electronicsArray.splice(0, 9));
    }
    return matrix;
};
