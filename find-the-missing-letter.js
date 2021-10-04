// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)

function findMissingLetter(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  array[0] === array[0].toUpperCase()
    ? (alphabet = alphabet.toUpperCase())
    : alphabet

  return [...alphabet]
    .slice(
      [...alphabet].indexOf(array[0]),
      [...alphabet].indexOf(array[array.length - 1]) + 1
    )
    .filter((letter) => !array.includes(letter))
    .join('')
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))
