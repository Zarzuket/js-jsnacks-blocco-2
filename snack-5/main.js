// alert("gl bruh")

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


var big = [ 1 , 2 , 3 , 4 , 5]
var small = [1 , 2 ,  3]

console.log(big.length);
console.log(small.length);

while (big.length > small.length){
   small.push(1)
}

console.log(big.length);
console.log(small.length);