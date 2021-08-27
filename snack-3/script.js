var nomiInvitati = ["Luca" , "Peppe", "GianGian"]
var cognomiInvitati = ["Miuz" , "Frenk" , "Trepuz"]
var nuoviInvitati = []


for ( i=0; i<nomiInvitati.length ; i++){
    console.log(Math.floor(Math.random(nomiInvitati[i]) *3));
    // console.log(nomiInvitati[i]);
}


for ( i=0; i<cognomiInvitati.length ; i++){
    console.log(Math.floor(Math.random(cognomiInvitati[i]) *3));
}

