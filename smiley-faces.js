
// Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example:

console.log(countSmileys([':)', ';(', ';}', ':-D']))       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']))     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) // should return 1;

function countSmileys(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if ( (arr[i].includes(':') || arr[i].includes(';')) && (arr[i].includes(')') || arr[i].includes('D')) && !(arr[i].length > 3)) {
            counter++
            if (arr[i].length > 2 && (!arr[i].includes('-') && !arr[i].includes('~'))){
                counter--
            }
        }
    }
    return counter
    }