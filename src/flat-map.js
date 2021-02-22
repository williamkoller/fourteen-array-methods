// flatMap

// The flatMap() method applies a callback to each element of the array and then flatten the result into an array. It combines flat() and map() in one function.


const numbers = [[1], [2], [3], [4], [5], [6]];

const flattenedDoubles = numbers.flatMap((n) => n * 2);

console.log(flattenedDoubles)