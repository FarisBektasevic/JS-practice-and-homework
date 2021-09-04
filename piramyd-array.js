// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.\

function pyramid(n) {
    let arr = []
  for (let i = 0; i < n; i++) {
      arr.push([])
      for (let j = 0; j <= i; j++) {
          arr[i].push(1)
      }
  }  
  return arr
  }

console.log(pyramid(0)) // => [ ]
console.log(pyramid(1)) // => [ [1] ]
console.log(pyramid(2)) // => [ [1], [1, 1] ]
console.log(pyramid(3)) // => [ [1], [1, 1], [1, 1, 1] ]