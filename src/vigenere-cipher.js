const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(value, key) {
    if (!value || !key) throw new Error('Incorrect arguments!');
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < value.length; i += 1) {
      const char = value[i].toLowerCase();
      if (/[a-z]/.test(char)) {
        const step =
          key[keyIndex % key.length].toLowerCase().charCodeAt(0) -
          'a'.charCodeAt(0);
        result += String.fromCharCode(
          ((char.charCodeAt(0) - 'a'.charCodeAt(0) + step) % 26) +
            'a'.charCodeAt(0)
        ).toUpperCase();
        keyIndex += 1;
      } else {
        result += value[i];
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(value, key) {
    if (!value || !key) throw new Error('Incorrect arguments!');
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < value.length; i += 1) {
      const char = value[i].toLowerCase();
      if (/[a-z]/.test(char)) {
        const step =
          key[keyIndex % key.length].toLowerCase().charCodeAt(0) -
          'a'.charCodeAt(0);
        result += String.fromCharCode(
          ((char.charCodeAt(0) - 'a'.charCodeAt(0) - step + 26) % 26) +
            'a'.charCodeAt(0)
        ).toUpperCase();
        keyIndex += 1;
      } else {
        result += value[i];
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
