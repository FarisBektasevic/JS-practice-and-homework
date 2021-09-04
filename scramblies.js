
// Scramblies
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.

// let str1 = 'jscripts'
// let str2 = 'javascript'

function scramble(str1, str2) {
    let array1 = str1.split("").sort();
    let array2 = str2.split("").sort();
    let index = 0;

    for( var i = 0; index < array2.length && i <= array1.length; i++) {
        if(array2[i] === array1[i]) {
            index++;
        }
    } 

    if (i <= array1.length){
        return true
    } else {
        return false 
    }
}

console.log(scramble('cedewaraaossoqqyt','codewars')) // true
console.log(scramble('katas','steak')) // false 
console.log(scramble('scriptjava','javascript')) // true
console.log(scramble('scriptingjava','javascript')) // true
console.log(scramble('scriptsjava','javascripts')) // true
console.log(scramble('jscripts','javascript')) // false
console.log(scramble('aabbcamaomsccdd','commas')) // true