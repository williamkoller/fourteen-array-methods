// filter 

// The filter() method creates a new array containing only the elements that "pass the test" implemented by the callback function.
// We call this type of callback a predicate function.

const numbers = [1, 2, 3, 4, 5, 6, 7];

const even = numbers.filter(n => n % 2 == 0)

console.log(even)