// Decompose a number num into an array  of
// the form [[k1,k2,k3...], r],  such that:

// 1. each kn is more than one
// 2. eack kn is maximized (first maximizing for 2 then 3 then 4 and so on)
// 3. and 2k1 + 3k2 + 4k3 + ... + nkn-1 + r = num

// ##Examples

// # when there are no `k` more than 1:

// INPUT: 3

// OUTPUT: [[], 3]

// # when the remainder is zero:

// 8330475

// OUTPUT: [[22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2], 0] =

// EXPLANATION: 2 ^ 22 + 3 ^ 13 + 4 ^ 10 + 5 ^ 8 + 6 ^ 7 + 7 ^ 6 + 8 ^ 6 + 9 ^ 5 + 10 ^ 5 + 11 ^ 5 + 12 ^ 4 + 13 ^ 4 + 14 ^ 4 + 15 ^ 3 + 16 ^ 3 + 17 ^ 3 + 18 ^ 3 + 19 ^ 3 + 20 ^ 3 + 21 ^ 2 + 22 ^ 2 + 23 ^ 2 + 24 ^ 2 + 0 = 8330475

// # when there is both `k` and a remainder:

// INPUT: 26

// OUTPUT: [[4, 2], 1]

// EXPLANATION: 2 ^ 4 + 3 ^ 2 + 1 = 26

// # when there is neither `k` nor a remainder:

// INPUT: 0

// OUTPUT: [[], 0]

// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/55ec80d40d5de30631000025/train/javascript

/*
 * Method name: Sum
 * Description:
 * Param
 * -> number1
 * -> number 2
 */
function decompose(num) {
  let result = [];
  let remainder = num;

  for (let base = 2; remainder > 0; base++) {
    let exponent = 1;
    while (Math.pow(base, exponent + 1) <= remainder) {
      exponent++;
    }
    if (exponent > 1) {
      result.push(exponent);
      remainder -= Math.pow(base, exponent);
    }
  }

  return [result, remainder];
}

// Example usage:
console.log(decompose(0)); // [[], 0]
console.log(decompose(3)); // [[], 3]
console.log(decompose(26)); // [[4, 2], 1]
console.log(decompose(8330475)); // [[22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2], 0]

