// reduce

// The reduce() method takes a callback with (at least) two arguments:
// An accumulator and the current element.

// For each iteration, the return value of the callback function is passed on as the accumulator argument of the next iteration.

const numbers = [1, 2, 3, 4,, 5, 6];

const sum = numbers.reduce((acc, n) => acc + n);

console.log(sum);