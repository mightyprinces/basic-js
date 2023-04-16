const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let arr = n.toString().split('');
  let compareArr = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr.slice(0);
    tempArr.splice(i,1)
    compareArr.push(tempArr.join(''));

  }
  compareArr.sort((a,b) => a - b);
  return compareArr[compareArr.length-1] - 0;
}

module.exports = {
  deleteDigit
};
