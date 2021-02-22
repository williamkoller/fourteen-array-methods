// findIndex

// The findIndex() method behaves similarly to the find() method, but it returns an index instead of the element,
// This method will stop at the first element that "pass the test", and return its index.
// If none exists, it will return -1.
const numbers = [2, 9, 3, 5, 1, 8];

const indexOfThree = numbers.findIndex(n => n === 3);

console.log(indexOfThree)