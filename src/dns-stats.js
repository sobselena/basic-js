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
  const result = {};
  for (let i = 0; i < domains.length; i += 1) {
    const domainNames = domains[i].split('.').reverse();
    let curDomainName = '';
    for (let j = 0; j < domainNames.length; j += 1) {
      curDomainName += `.${domainNames[j]}`;
      result[curDomainName] = (result[curDomainName] || 0) + 1;
    }
  }
  return result;
}

module.exports = {
  getDNSStats,
};
