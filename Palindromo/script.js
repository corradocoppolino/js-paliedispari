// chiedo all'utente una parola

var parola = prompt("Inserisci una parola");

// creo la mia funzione palindromo

function palindromo(str){

    // creo variabile length che mi da la lunghezza della stringa

    var length = str.length;

    // ciclo for che carica metà della parola

    for(var i = 0; i < length/2; i++){

        // if che controlla se la prima metà è uguale alla seconda

        if(str[i] != str[length -1 -i]){
            return "La parola non è palindroma";
        }

    }

    return "La parola è palindroma";

}

// vado a leggere sulla console il risultato

console.log(palindromo(parola));