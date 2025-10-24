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
  const digits = n.split('-');
  if (digits.length !== 6) return false;
  for (let i = 0; i < digits.length; i += 1) {
    if (
      digits[i].length !== 2 ||
      !/[0-9A-F]/.test(digits[i][0]) ||
      !/[0-9A-F]/.test(digits[i][1])
    ) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isMAC48Address,
};
