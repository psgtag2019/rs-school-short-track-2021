/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function myCompare(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
  return 0;
}
function sortByHeight(arr) {
  const arr1 = arr.filter((x) => x !== -1);
  arr1.sort(myCompare);
  const arr2 = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr2.push(arr1[j]);
      j++;
    } else {
      arr2.push(-1);
    }
  }
  return arr2;
  //  throw new Error('Not implemented');
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// //      [-1, 150, 160, 170, -1, -1, 180, 190],

// console.log(sortByHeight([-1, -1, -1, -1, -1]));
// //      [-1, -1, -1, -1, -1],
// console.log(sortByHeight([-1]));
// //      [-1],
// console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
// //      [2, 2, 4, 9, 11, 16],
// console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
// //[1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
module.exports = sortByHeight;
