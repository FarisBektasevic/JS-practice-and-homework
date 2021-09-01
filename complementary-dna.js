// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell);
//  you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input: output)

console.log(DNAStrand ("ATTGC")) // return "TAACG"
console.log(DNAStrand ("GTAT")) // return "CATA" 

function DNAStrand(dna){
    let localDNA = dna.split('')
        for (let i = 0; i < dna.length; i++) {
            
            if (dna[i] === 'A'){
                localDNA[i] = 'T'
            } else if (dna[i] === 'T'){
                localDNA[i] ='A'
            }
    
            if (dna[i] === 'C'){
                localDNA[i] = 'G'
            } else if (dna[i] === 'G'){
                localDNA[i] ='C'
            }
        }
    
        return localDNA.join('')
    }