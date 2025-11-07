const { NotImplementedError } = require('../lib');

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
    let tempArr = arr.slice(0); // copying all arr elements to tempArr - from 0 to the end of array
    tempArr.splice(i,1) // remove one element from tempArr at index i
    compareArr.push(tempArr.join('')); // push new number created of the rest digits after removing one
  }
  compareArr.sort((a,b) => a - b);
  return compareArr[compareArr.length-1] - 0;
}
 

module.exports = {
  deleteDigit
};
