const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let maxDepth = 1;
    let curDepth = 1;
    (function helperFunc(curArr) {
      for (let i = 0; i < curArr.length; i += 1) {
        if (Array.isArray(curArr[i])) {
          curDepth += 1;
          if (maxDepth < curDepth) {
            maxDepth = curDepth;
          }
          helperFunc(curArr[i]);
          curDepth -= 1;
        }
      }
    })(arr);
    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
