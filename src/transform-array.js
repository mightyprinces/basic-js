const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = arr.slice(0);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      newArr[i+1] = null;
    }

    if (newArr[i] === '--discard-prev' && newArr[i-1] !== null) {
      newArr[i-1] = null;
    }

    if (newArr[i] === '--double-next') {
      newArr.splice(i+1, 0, newArr[i+1]);
    }

    if (newArr[i] === '--double-prev' && newArr[i-1] !== null) {
      newArr.splice(i, 0, newArr[i-1]);
      i++;
    }
  }

  return newArr.filter(a => {
    if (a !== null && a !== '--discard-next' && a !== '--discard-prev' && a !== '--double-next' && a !== '--double-prev') {
      return a;
    }
  });
}

module.exports = {
  transform
};
