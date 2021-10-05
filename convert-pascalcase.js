// #Convert PascalCase into snake_case

// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation.
//  Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
  string = string.toString()
  string = string.split('')
  string[0] = string[0].toLowerCase()
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i])) {
      continue
    }

    if (string[i] === string[i].toUpperCase()) {
      string[i] = string[i].toLowerCase()
      string.splice(i, 0, '_')
    }
  }
  return string.join('')
}

console.log(toUnderscore('TestController'))
console.log(toUnderscore('MoviesAndBooks'))
console.log(toUnderscore('App7Test'))
console.log(toUnderscore(1))
