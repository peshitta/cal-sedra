import * as test from 'assert';
import * as sut from '../build/cal-sedra';

describe('CAL', () => {
  describe('To Sedra', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = sut.toSedra('dqsry)-dpylypws');
      const vocalised = sut.toSedra("d'qesariya)-d,p,yilyip'wOs");
      const wordExpected = 'DXSR;A-DI;L;IOS';
      const vocalisedExpected = "D'XeSaRi;aA-D,I,i;Li;I'oOS";
      test.strictEqual(word, wordExpected, 'toSedra_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'toSedra_generic vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = sut.toSedra('dylydwth');
      const vocalised = sut.toSedra("d'yilyid,wut,eh");
      const wordExpected = 'D;L;DOTH';
      const vocalisedExpected = "D'i;Li;D,uOT,eH";
      test.strictEqual(word, wordExpected, 'toSedra_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'toSedra_yi vocalised');
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = sut.toSedra(')wld');
      const vocalised = sut.toSedra(')awlEd');
      const wordExpected = 'AOLD';
      const vocalisedExpected = 'AaOLeD';
      test.strictEqual(word, wordExpected, 'toSedra_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'toSedra_yi vocalised');
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = sut.toSedra('lb(ldbbykwn');
      const vocalised = sut.toSedra("lab,(eld'b,ob,ayk'wun");
      const wordExpected = 'LBELDBB;CON';
      const vocalisedExpected = "LaB,EeLD'B,oB,a;C'uON";
      test.strictEqual(word, wordExpected, 'toSedra_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'toSedra_wu vocalised');
    });
    it('Word with (wO) => (oO) mapping', () => {
      const word = sut.toSedra(')bhwhy');
      const vocalised = sut.toSedra(')ab,ohawh_y');
      const wordExpected = 'ABHOH;';
      const vocalisedExpected = 'AaB,oHaOH_;';
      test.strictEqual(word, wordExpected, 'toSedra_wO consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'toSedra_wO vocalised');
    });
    it('Blank word returns blank', () => {
      const word = sut.toSedra('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'toSedra_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toSedra(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'toSedra_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toSedra(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'toSedra_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toSedra(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'toSedra_zero');
    });
  });
});
