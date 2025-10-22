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
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const commands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case commands[0]: {
        i += 1;
        break;
      }
      case commands[1]: {
        if (arr[i - 1] === result[result.length - 1]) {
          result.pop();
        }
        break;
      }
      case commands[2]: {
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      }
      case commands[3]: {
        if (i > 0) {
          result.push(arr[i - 1]);
        }
        break;
      }
      default: {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

module.exports = {
  transform,
};
