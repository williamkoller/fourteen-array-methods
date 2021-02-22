// flat

// The flat() method creates a new array with all sub-array elements flattened into it.
// You can specify a depth. The default is 1.

const numbers = [[1, 2], [[3], [4]], [5, 6]];

const flattened = numbers.flat(2);

console.log(flattened)