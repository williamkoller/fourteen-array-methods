// sort

// The sort() method is used to sort the elements of an array and returning the sorting array.
// Be aware that this method is mutating the original array.

const numbers = [2, 9, 3, 5, 1, 8];

numbers.sort((a, b) => a - b);

console.log(numbers);
