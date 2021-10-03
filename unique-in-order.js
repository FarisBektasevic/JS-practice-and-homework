// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next to each other
//  and preserving the original order of elements.

// For example:

uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]) // == [1, 2, 3]

function uniqueInOrder(iterable) {
  if (typeof iterable === 'string') iterable = iterable.split('')
  return iterable.filter((a, i) => a !== iterable[i + 1])
}

// OLD SOLUTION

// var uniqueInOrder = function (iterable) {
//   if (typeof iterable === 'string') {
//     iterable = iterable.split('')
//   }

//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] === iterable[i + 1]) {
//       iterable.splice(i + 1, 1)
//       i--
//     }
//   }
//   return iterable
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB')) // == ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD')) //  == ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1, 2, 2, 3, 3])) //   == [1,2,3]
