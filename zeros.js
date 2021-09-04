// Write and algoeithm that makes an array and moves all of the zeros to the end,
//  preserving the order of the other elements


let niz = [0, 4, 3, 4543, 6456 , 0, 5, 0, 'gkfdlgkdf', 0, 0, 8, 0, 0]

for (let  i = 0;  i < niz.length;  i++) {
    for (let  i = 0;  i < niz.length;  i++) {
        if (niz[i] === 0) {
            let nula = niz.splice(i, 1)
            niz.push(nula[0])
        }
    }
}

console.log(niz)