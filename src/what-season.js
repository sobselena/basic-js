const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  const curMonth = date.getMonth() + 1;
  if (curMonth >= 3 && curMonth < 6) return 'spring';
  if (curMonth >= 6 && curMonth < 9) return 'summer';
  if (curMonth >= 9 && curMonth < 12) return 'autumn';
  return 'winter';
}

module.exports = {
  getSeason,
};
