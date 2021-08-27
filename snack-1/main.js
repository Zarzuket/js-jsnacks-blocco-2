// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var sommaNumeri = 0;

for ( i=0; i<5; i++ ){
    var numeroUtente = parseInt(prompt("inserisci un numero"));
    sommaNumeri += numeroUtente;
}

console.log(sommaNumeri);

var sommaNumeri2 = 0;

contatore = 0;
while ( contatore < 5)  {
    var numeroUtente = parseInt(prompt("inserisci un numero"));
    sommaNumeri2 += numeroUtente;
    contatore++
}

console.log(sommaNumeri2); 