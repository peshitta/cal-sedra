/** @module cal */
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

    E: { value: 'e', enumerable: true }, // Eastern short E => Western e
    O: { value: 'o', enumerable: true } // Eastern O => Western o
  })
);

/**
 * @private
 * Maps input character to Sedra char
 * @param { string } c input character
 * @returns { string } Sedra mapped char
 */
const map = c => toSedraMap[c] || c;

/**
 * Convert from CAL to Sedra 3 transliteration
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Sedra 3 representation
 */
export function toSedra(word) {
  if (!word) {
    return word;
  }

  let sb = '';
  for (let i = 0, len = word.length, m; i < len; i += m.length) {
    const c = word.charAt(i);
    switch (c) {
      case 'y':
        m =
          word.charAt(i + 1) === 'i'
            ? 'i;' // Sedra stores as (iy)
            : map(c);
        break;
      case 'w':
        m =
          word.charAt(i + 1) === 'u'
            ? 'uO' // Sedra stores as (uw)
            : word.charAt(i + 1) === 'O'
              ? 'oO' // Eastern O stored as (ow)
              : map(c);
        break;
      default:
        m = map(c);
        break;
    }
    sb += m;
  }
  return sb;
}
