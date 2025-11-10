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
  let resultMatrix = matrix.map(row => row.slice());
  console.log('--resultMatrix', resultMatrix);
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // check top left cell
      if (matrix[i - 1] && matrix[i - 1][j - 1]) counter++;
      // check top center cell
      if (matrix[i - 1] && matrix[i - 1][j]) counter++;
      // check top right cell
      if (matrix[i - 1] && matrix[i - 1][j + 1]) counter++;

      // check left cell
      if (matrix[i][j - 1]) counter++;
      // check right cell
      if (matrix[i][j + 1]) counter++;

      // check bottom left cell
      if (matrix[i + 1] && matrix[i + 1][j - 1]) counter++;
      // check bottom center cell
      if (matrix[i + 1] && matrix[i + 1][j]) counter++;
      // check bottom right cell
      if (matrix[i + 1] && matrix[i + 1][j + 1]) counter++;

      resultMatrix[i][j] = counter;
      counter = 0;
    }
  }

  console.log('==resultMatrix', resultMatrix);
  return resultMatrix;
}

module.exports = {
  minesweeper
};
