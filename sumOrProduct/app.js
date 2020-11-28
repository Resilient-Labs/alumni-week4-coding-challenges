// Description
// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

// Example
//   sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) => "product"

const sumOrProduct = (arr, n) => {
    const sorted = arr.sort((a, b) => a - b)
    const product = sorted.splice(0, n).reduce((acc, curr) => acc * curr)
    const sum = sorted.reverse().splice(0, n).reduce((acc, curr) => acc + curr)

    return sum > product ? 'sum' : product > sum ? 'product' : 'same'
}

console.log('test1', sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))//"sum"
console.log('test2', sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3))//"product"
console.log('test3', sumOrProduct([10, 20, 3, 30, 5, 4], 3))//"same"

