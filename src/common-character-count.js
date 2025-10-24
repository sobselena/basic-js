const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  let count = 0;
  for (const symbol of s1) {
    obj1[symbol] = (obj1[symbol] || 0) + 1;
  }
  for (const symbol of s2) {
    obj2[symbol] = (obj2[symbol] || 0) + 1;
  }
  for (const symbol of Object.keys(obj1)) {
    if (obj1[symbol] && obj2[symbol]) {
      count += Math.min(obj1[symbol], obj2[symbol]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
