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
  const nStr = String(n);
  let result = nStr;
  for (let i = 0; i < nStr.length; i += 1) {
    if (nStr[i] < nStr[i + 1]) {
      result = nStr.slice(0, i) + nStr.slice(i + 1);
      break;
    }
  }
  if (result === nStr) {
    result = result.slice(0, -1);
  }
  return Number(result);
}

module.exports = {
  deleteDigit,
};
