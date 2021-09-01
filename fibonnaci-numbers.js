// Print the first 10 Fibonacci numbers without recursion

// svaki sledeći broj računa kao zbir prethodna dva u nizu

let f0 = 1
console.log(f0)
let f1 = 1
console.log(f1)

for (i = 2; i < 10; i++){
    var fi = f0 + f1
    console.log(fi)
    f0 = f1
    f1 = fi
}