/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a = s1.split('').sort();
  const b = s2.split('').sort();
  const result = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      a.shift();
    } else if (a[0] > b[0]) {
      b.shift();
    } /* they're equal */ else {
      result.push(a.shift());
      b.shift();
    }
  }
  return result.length;
}

// console.log(getCommonCharacterCount('aabcc', 'adcaa')); //, 3);
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz')); //, 4);
// console.log(getCommonCharacterCount('abca', 'xyzbac')); //, 3);
// console.log(getCommonCharacterCount('', 'abc')); //, 0);
// console.log(getCommonCharacterCount('a', 'b')); //, 0);

module.exports = getCommonCharacterCount;
