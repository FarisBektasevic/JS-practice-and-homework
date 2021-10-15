// Scramblies
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.

const scramble = (str1, str2) => {
  return [...str2].every(
    (val) => str2.split(val).length <= str1.split(val).length
  )
}

console.log(scramble('katas', 'steak'))
