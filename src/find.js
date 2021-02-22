// find

// The find() method behaves similarly to the filter() method, but it only returns a single element.
// This method will stop at the first element that "pass the test", and return that.
// If none exists, it will return undefined.

const numbers = [1, 2, 3, 4, 5];

const even = numbers.find(n => n === 3);


console.log(even)