/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
const arrSum = (array) => array.reduce(
  (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
  0,
);

function getMatrixElementsSum(matrix) {
  const arr = matrix;
  const h = matrix.length;
  const l = matrix[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      if (arr[i][j] === 0 && typeof arr[i + 1] !== 'undefined') arr[i + 1][j] = 0;
    }
  }
  return arrSum(matrix);
  // throw new Error('Not implemented');
}

// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];
// console.log(getMatrixElementsSum(matrix));

module.exports = getMatrixElementsSum;
