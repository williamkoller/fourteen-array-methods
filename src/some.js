// some

// The some() method takes a predicate function and return true if any of the elements in the array "passes the test".

const numbers = [1, 2, 3, 4, 5, 6, 7];

const hasAboveThree = numbers.some(n => n > 3);

console.log(hasAboveThree);