// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  const words = s.split("");
  return words
    .map((e, index) => e.toUpperCase() + e.toLowerCase().repeat(index))
    .join("-");
}

console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); //-> "C-Ww-Aaa-Tttt"

