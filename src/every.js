// every

// The every() method takes a predicate function and returns true if all of the elements in the array "pass the test".

const numbers = [1, 2, 3, 4, 5, 6];

const allAboveThree = numbers.every(n => n > 3);

console.log(allAboveThree)