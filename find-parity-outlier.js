
// #Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    let  parni = 0
    let neparni = 0
    for ( i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            parni++
        } else {
            neparni++
        }
    }
    
    if (parni === integers.length - 1) { // moze i da se pita neparni = 1
        for ( i = 0; i < integers.length; i++) {
            if (integers[i] % 2 != 0) {
               let result = integers.splice(i, 1)
               return result[0]
            }
        }
    }
    
    if (neparni === integers.length -1) {// moze i da se pita parni = 1
        for ( i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0){
               let result =  integers.splice(i, 1)
               return result[0]
            }
        }
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])
)