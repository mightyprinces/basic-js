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
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msg = message.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];

      if (ch >= 'A' && ch <= 'Z') {
        const mCode = ch.charCodeAt(0) - 65;
        const kCode = k[keyIndex % k.length].charCodeAt(0) - 65;
        const cCode = (mCode + kCode) % 26 + 65;

        result += String.fromCharCode(cCode);
        keyIndex++;
      } else {
        result += ch;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msg = message.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];

      if (ch >= 'A' && ch <= 'Z') {
        const mCode = ch.charCodeAt(0) - 65;
        const kCode = k[keyIndex % k.length].charCodeAt(0) - 65;
        const cCode = (mCode - kCode + 26) % 26 + 65;

        result += String.fromCharCode(cCode);
        keyIndex++;
      } else {
        result += ch;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};


module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
