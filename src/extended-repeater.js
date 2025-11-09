const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

// function repeater(str, options) {
//   let addition = options.hasOwnProperty('addition') ? options.addition : '';
//   const repeatTimes = options.repeatTimes || 1;
//   const separator = options.separator || '+';
//   const additionRepeatTimes = options.additionRepeatTimes || 1;
//   const additionSeparator = options.additionSeparator || '';

//   const additionBlock = Array(additionRepeatTimes)
//     .fill(addition)
//     .join(additionSeparator);

//   const fullBlock = str + additionBlock;

//   return Array(repeatTimes)
//     .fill(fullBlock)
//     .join(separator);
// }

function repeater(str, options) {
  let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';

  // create default values
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';

  // create addition block
  const additionBlock = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  // create full block
  const fullBlock = str + additionBlock;

  // repeat str+addition n-times
  return Array(repeatTimes)
    .fill(fullBlock)
    .join(separator);
}

module.exports = {
  repeater
};
