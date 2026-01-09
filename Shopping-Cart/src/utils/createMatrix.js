export const createMatrix = (electronicsArray) => {
    let matrix = [];
    while (electronicsArray.length) {
        matrix.push(electronicsArray.splice(0, 9));
    }
    return matrix;
};
