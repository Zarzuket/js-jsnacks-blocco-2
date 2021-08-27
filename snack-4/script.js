// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

var numeri = [1 , 2 , 1 , 2 , 1, 2];


var somma = 0;

for (i=0; i<numeri.length; i++) {
    if(numeri[i] % 2 == 1){
        somma += numeri[i];
    }

}

console.log(somma);