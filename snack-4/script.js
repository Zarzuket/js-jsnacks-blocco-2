// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

// var numeri = [1 , 2 , 1 , 2 , 1, 2];
var numeri = [2, 4, 6, 8, 10];

var somma = 0;

for (i=0; i<numeri.length; i++) {
    if([i] % 2 == 1){
        somma += numeri[i];
    }

}

console.log(somma);