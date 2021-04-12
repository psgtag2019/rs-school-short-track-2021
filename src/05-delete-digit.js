/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let m = 0;

  for (let i = 0; i < arr.length; i++) {
    const b = [];
    let sm = '';
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        b.push(arr[j]);
      }
    }
    sm = b.join('');
    if (m < +sm) {
      m = +sm;
    }
  }
  return m;
  // throw new Error('Not implemented');
}

// console.log(deleteDigit(152)); // 52);
// console.log(deleteDigit(1001)); // 101);
// console.log(deleteDigit(10)); // 1);
// console.log(deleteDigit(222219)); // 22229);
// console.log(deleteDigit(109)); // 19);

module.exports = deleteDigit;
