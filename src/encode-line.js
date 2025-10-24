const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let curCount = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      curCount += 1;
    } else {
      result += (curCount === 1 ? '' : curCount) + str[i];
      curCount = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
