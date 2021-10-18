// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  str = str.toLowerCase().split('').sort()
  return str.some((letter, i) => letter === str[i + 1]) ? false : true
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('aba'))
console.log(isIsogram('moOse'))

//OLD SOLUTION

// function isIsogram(str){
//     for (let i = 0; i < str.length; i++) {
//          for (let j = i+1; j < str.length; j++) {
//              if (str[i].toLowerCase() === str[j].toLowerCase()){
//                  return false
//              }
//          }
//      }
//      return true
//  }
