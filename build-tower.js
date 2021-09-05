// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// for example, a tower of 3 floors looks like below
// [
//     '  *  ', 
//     ' *** ', 
//     '*****'
//   ]

// and a tower of 6 floors looks like below

// [
//     '     *     ', 
//     '    ***    ', 
//     '   *****   ', 
//     '  *******  ', 
//     ' ********* ', 
//     '***********'
//   ]


function towerBuilder(nFloors) {
    let tower = []
    let start = 1
    for (let i = 0; i < nFloors; i++) {
        tower.push(' '.repeat(nFloors * 2 - 1))
        tower[i] = tower[i].split('')
        tower[i].splice( (tower[i].length - start) / 2, start, '*'.repeat(start))
        tower[i] = tower[i].join('')
        start += 2
    }
    return tower
}

console.log(towerBuilder(6))
console.log(towerBuilder(20))