// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let letters = ' abcdefghijklmnopqrstuvwxyz'
  x = x.split(' ').map((word) => [...word])
  let score = []
  x.forEach((wordArr) => {
    score.push(
      wordArr.map((l) => (l = letters.indexOf(l))).reduce((a, b) => a + b)
    )
  })
  return x[score.indexOf(Math.max(...score))].join('')
}

// OLD SOLUTION

// function high(x){
//     let letters = ' abcdefghijklmnopqrstuvwxyz'
//     x = x.split(' ')
//     let score = 0
//     let maxScore = []
//     for (let i = 0; i < x.length; i++) {
//         for(let j = 0; j < x[i].length; j++) {
//             score += parseInt(letters.indexOf(x[i][j]))
//         }
//         maxScore.push(score)
//         score = 0
//     }
//      return x[maxScore.indexOf(Math.max(...maxScore))]
//   }
