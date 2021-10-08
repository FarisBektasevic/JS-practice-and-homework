// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// Examples:
console.log(encryptThis('Hello')) // === '72olle'
console.log(encryptThis('good')) // === '103doo'
console.log(encryptThis('A')) //  === '104olle 119drlo'

function encryptThis(text) {
  return text.length === 1
    ? text.charCodeAt(0).toString()
    : text
        .split(' ')
        .map((word) => {
          if (word.length === 1) return word.charCodeAt(0).toString()
          if (word.length === 2) return word.charCodeAt(0).toString() + word[1]
          ;[a, b, ...rest] = word.split('')
          return (
            word.charCodeAt(0) +
            word[word.length - 1] +
            rest.join('').slice(0, rest.length - 1) +
            b
          )
        })
        .join(' ')
}
