/** @module calSedra */
import { Writing, Mapper } from 'aramaic-mapper';
import {
  allConsonants as consonants,
  commonVowels,
  diacritics
} from 'cal-code-util';
import {
  consonants as sedraConsonants,
  vowels as sedraVowels,
  diacritics as sedraDiacritics
} from 'sedra-code-util';

/**
 * @private
 * CAL source writing
 * @const
 * @type { Writing }
 */
const calWriting = new Writing(consonants, commonVowels, diacritics);

/**
 * @private
 * Sedra destination writing
 * @const
 * @type { Writing }
 */
const sedraWriting = new Writing(
  Object.freeze(sedraConsonants.concat(['I', 'S'])),
  sedraVowels,
  sedraDiacritics
);

/**
 * @private
 * Maps input character to Sedra char
 * @param { string } c input character
 * @param { Object.<string, string> } fromTo mapping dictionary
 * @returns { string } Sedra mapped char
 */
const map = (c, fromTo) => fromTo[c] || c;

/**
 * @private
 * Customized mapping callback
 * @param { string } word input word
 * @param { number } i current index in the word
 * @param { Object.<string, string> } fromTo mapping dictionary
 * @returns { string } Sedra mapped char
 */
const mapCallback = (word, i, fromTo) => {
  let m = '';
  const c = word.charAt(i);
  switch (c) {
    case 'E':
      m = 'e'; // no short E in Western, it could map to i in some words though
      break;
    case 'y':
      m =
        word.charAt(i + 1) === 'i'
          ? 'i;' // Sedra stores as (iy)
          : word.charAt(i + 1) === 'e'
            ? 'e;' // Sedra stores as (ey)
            : map(c, fromTo);
      break;
    case 'w':
      m =
        word.charAt(i + 1) === 'u'
          ? 'uO' // Sedra stores as (uw)
          : word.charAt(i + 1) === 'O'
            ? 'oO' // Eastern O stored as (ow)
            : map(c, fromTo);
      break;
    default:
      m = map(c, fromTo);
      break;
  }
  return m;
};

/**
 * CAL to Sedra aramaic mapper
 * @const
 * @type { Mapper }
 */
export const mapper = new Mapper(calWriting, sedraWriting, mapCallback);

/**
 * Convert from CAL to Sedra 3 transliteration
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Sedra 3 representation
 */
export const toSedra = word => mapper.map(word);

/**
 * CAL to Sedra map
 * @constant
 * @type { Object.<string, string> }
*/
export const toSedraMap = Object.freeze(
  Object.create(null, {
    // Abgad
    ')': { value: 'A', enumerable: true },
    b: { value: 'B', enumerable: true },
    g: { value: 'G', enumerable: true },
    d: { value: 'D', enumerable: true },

    // Hawaz
    h: { value: 'H', enumerable: true },
    w: { value: 'O', enumerable: true },
    z: { value: 'Z', enumerable: true },

    // Ḥaṭy
    x: { value: 'K', enumerable: true },
    T: { value: 'Y', enumerable: true },
    y: { value: ';', enumerable: true },

    // Kalman
    k: { value: 'C', enumerable: true },
    l: { value: 'L', enumerable: true },
    m: { value: 'M', enumerable: true },
    n: { value: 'N', enumerable: true },

    // Saʿpac
    s: { value: 'S', enumerable: true },
    '(': { value: 'E', enumerable: true },
    p: { value: 'I', enumerable: true },
    c: { value: '/', enumerable: true },

    // Qarshat
    q: { value: 'X', enumerable: true },
    r: { value: 'R', enumerable: true },
    $: { value: 'W', enumerable: true },
    t: { value: 'T', enumerable: true },

    P: { value: 'I', enumerable: true }, // Palestinian p
    '&': { value: 'S', enumerable: true }, // Hebrew Sin

    E: { value: 'e', enumerable: true }, // Eastern short E => Western e
    O: { value: 'o', enumerable: true } // Eastern O => Western o(w)
  })
);
