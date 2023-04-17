const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


class DepthCalculator {
  calculateDepth(a) {
    let depth = 0;
    if (Array.isArray(a)) {
        for (let i in a) {
            depth = Math.max(depth, this.calculateDepth(a[i]));
        }
        depth++;
    }
    return depth;
  }
}

  // calculateDepth(arr) {
  //   for (let val of arr) {
  //     if (Array.isArray(val)) {
  //       depthCount++;
  //       calculateDepth(val);
  //     }
  //   }
  //   return depthCount;
  // }


module.exports = {
  DepthCalculator
};
