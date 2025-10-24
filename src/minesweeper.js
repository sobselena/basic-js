const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array.from({ length: matrix.length }, () => {
    return Array.from({ length: matrix[0].length }, () => {
      return 0;
    });
  });
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      for (let k = -1; k <= 1; k += 1) {
        for (let l = -1; l <= 1; l += 1) {
          if (l !== 0 || k !== 0) {
            result[i][j] += matrix[i + k]?.[j + l] ? 1 : 0;
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
