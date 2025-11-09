const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // ^ and & - start and end of the string
  // [0-9A-F] - range 0-9 and A - F
  // {2} - 2 symbols fixed
  // ([0-9A-F]{2}-) and [0-9A-F]{2} ctuvtyn with '-' at the end and without it - final block
  // ([0-9A-F]{2}-){5} - 5 block of ([0-9A-F]{2}-)
  return /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(n);

  
  // let testArr = n.split('-');

  // for (const el of testArr) {
  //   if (!/^[0-9A-F]$/.test(el[0]) || !/^[0-9A-F]$/.test(el[0])) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
}

module.exports = {
  isMAC48Address
};
