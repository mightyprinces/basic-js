const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  for (const domain of domains) {
    let domainSegments = domain.split('.').reverse();
    let dns = '';

    for (const segment of domainSegments) {
      dns += `.${segment}`; // create future key for the object 'result'
      result[dns] = result[dns] ? result[dns] + 1 : 1; // increase counter of the key if it is already exists, or create it and set counter-value on 1
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
