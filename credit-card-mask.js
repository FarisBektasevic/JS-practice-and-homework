// Usually when you buy something, you're asked whether your credit card number,
//  phone number or answer to your most secret question is still correct.
//   However, since someone could look over your shoulder,
//    you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples

console.log(maskify("4556364607935616")) // == "############5616"
console.log(maskify(     "64607935616")) // ==      "#######5616"
console.log(maskify(               "1")) // ==                "1"
console.log(maskify(                "")) // ==                 ""

function maskify(cc) {
    let niz1 = cc.split('')
        if (niz1.length > 4) {
            for ( i = 0; i < niz1.length - 4; i++ ){
                    niz1[i] = '#'
            }
        }
        return niz1.join('')
    }