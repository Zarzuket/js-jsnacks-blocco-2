var nomiInvitati = ["Luca" , "Peppe", "GianGian"]
var cognomiInvitati = ["Miuz" , "Frenk" , "Trepuz"]
var nuoviInvitati = []


for ( i=0; i<3 ; i++){
    var nomeRandom = Math.floor(Math.random() * nomiInvitati.length);
    var cognomeRandom =Math.floor(Math.random() * cognomiInvitati.length);
    var nomeCognomeRandom = nomiInvitati[nomeRandom] + " " + cognomiInvitati[cognomeRandom];
    nuoviInvitati.push(nomeCognomeRandom);
}

console.log(nuoviInvitati)