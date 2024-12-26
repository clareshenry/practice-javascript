// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3
// (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐
// │------5-│
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │
// BANG!────┘  ├─────► OK!
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘

// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

function solution(start, finish) {
  let jumps = 0;
  let position = start;

  while (position < finish) {
    if (position + 3 <= finish) {
      position += 3;
    } else {
      position += 1;
    }
    jumps++;
  }

  return jumps;
}

// Example usage:
console.log(solution(1, 5)); // Output: 2
console.log(solution(1, 6)); // Output: 2
console.log(solution(2, 7)); // Output: 2
console.log(solution(3, 10)); // Output: 3

