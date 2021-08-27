
// Strip Comments

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
//  Any whitespace at the end of the line should also be stripped out.
// Example:
// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
    let arr = input.split('\n')
    let simbolIndex
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(markers[0])){
            simbolIndex = arr[i].indexOf(markers[0])
        } else if (arr[i].includes(markers[1])){
            simbolIndex = arr[i].indexOf(markers[1])
        }
        arr[i] = arr[i].slice(0, simbolIndex - 1)
    }
    return arr.join('\n')
    
}
  
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))