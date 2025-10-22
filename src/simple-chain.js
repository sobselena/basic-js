const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value !== undefined ? value : ''} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.result.length
    ) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    const resultStr = `${this.result.join('~~')}`;
    this.result = [];
    return resultStr;
  },
};

module.exports = {
  chainMaker,
};
