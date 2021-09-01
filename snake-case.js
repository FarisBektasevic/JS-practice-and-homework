// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation.
//  Lowercase characters can be numbers.
//  If the method gets a number as input, it should return a string.

// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"


function toUnderscore(string) {
      string = string.toString()
      string = string.split('')
      string[0] = string[0].toLowerCase()
      for (let i = 0; i < string.length; i++) {
          if (parseInt(string[i])){
              continue
          }
  
          if (string[i] === string[i].toUpperCase()){
              string[i] = string[i].toLowerCase()
              string.splice(i, 0, '_')
          }
      }
      string = string.join('')
      return string
    }
  console.log(toUnderscore(2))