// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples:
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (str.length === 0) return ''
  let camelCase = str
    .split(/-|_/)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('')
  return str[0] + camelCase.slice(1)
}

console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_Stealth_Warrior'))

// OLD SOLUTUION

// function toCamelCase(str) {
//   if (str === '') {
//     return ''
//   } else if (str.includes('-')) {
//     str = str.split('-')
//   } else if (str.includes('_')) {
//     str = str.split('_')
//   }

//   let camelCase = str[0]
//   for (i = 1; i < str.length; i++) {
//     let word = str[i]
//     let firstLetter = word[0].toUpperCase()
//     let nString = str[i].split('').splice(1)
//     nString.unshift(firstLetter)
//     word = nString.join('')
//     console.log(word)
//     camelCase += word
//   }
//   return camelCase
// }
